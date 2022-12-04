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
  new QuestionModel(203, "Qual é o coletivo de cães?", [
    AnswerModel.incorrect("Manada"),
    AnswerModel.incorrect("Alcateia"),
    AnswerModel.incorrect("Rebanho"),
    AnswerModel.correct("Matilha"),
  ]),
  new QuestionModel(204, "Qual é o triângulo que tem todos os lados diferentes?", [
    AnswerModel.incorrect("Equilátero"),
    AnswerModel.incorrect("Isóceles"),
    AnswerModel.incorrect("Trapézio"),
    AnswerModel.correct("Escaleno"),
  ]),
];

export default questions;
