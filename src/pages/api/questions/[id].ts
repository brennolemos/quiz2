// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import questions from "../questionsStorage";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const selectedId = req.query.id && +req.query.id;

  const filteredQuestion = questions.filter(
    (question) => question.id === selectedId,
  );

  if (filteredQuestion.length === 1) {
    const selectedQuestion = filteredQuestion[0];
    res.status(200).json(selectedQuestion.toObject());
  } else {
    res.status(204).send({});
  }
}
