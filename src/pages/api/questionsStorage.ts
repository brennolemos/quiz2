import AnswerModel from "../../model/Answer";
import QuestionModel from "../../model/Question";

const questions: QuestionModel[] = [
  new QuestionModel(306, "Qual bicho transmite doença de chagas?", [
    AnswerModel.incorrect("Abelha"),
    AnswerModel.incorrect("Barata"),
    AnswerModel.incorrect("Pulga"),
    AnswerModel.correct("Barbeiro"),
  ]),
  new QuestionModel(202, "Qual fruto é conhecido no norte e nordeste como jerimum?", [
    AnswerModel.incorrect("Caju"),
    AnswerModel.incorrect("Côco"),
    AnswerModel.incorrect("Chuchu"),
    AnswerModel.correct("Abóbora"),
  ]),
];

export default questions;
