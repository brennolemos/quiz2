// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import QuestionModel from "../../../model/Question";
import questions from "../questionsStorage";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<QuestionModel>,
) {
  res.status(200).json(questions[0]);
}
