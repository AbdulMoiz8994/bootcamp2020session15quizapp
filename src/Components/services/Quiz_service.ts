import { Quiz, QuestinsQuiz } from "../TypeofQuiz/QuizTypes";

//This will suffle the result where these correct answer will come everytime on diff place
const SuffleArray = (array: any[]) =>
  [...array].sort(() => Math.random() - 0.5);

export const Quiz_service = async (
  QuestionsNub: number,
  TypeofQuestions: string
): Promise<QuestinsQuiz[]> => {
  const result = await fetch(
    `https://opentdb.com/api.php?amount=${QuestionsNub}&category=10&difficulty=${TypeofQuestions}&type=multiple`
  );
  const { results } = await result.json();

  const finalResult: QuestinsQuiz[] = results.map((questionObj: Quiz) => {
    return {
      question: questionObj.question,
      answer: questionObj.correct_answer,
      option: SuffleArray(
        questionObj.incorrect_answers.concat(questionObj.correct_answer)
      ),
    };
  });
  return finalResult;
  // console.log(results);
};
