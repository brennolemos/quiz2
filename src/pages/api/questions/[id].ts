// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import questions from "../questionsStorage";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{
    id: number;
    text: string;
    answers: {
      value: string;
      correct: boolean;
      revealed: boolean;
    }[];
    correct: boolean;
  }>,
) {
  res.status(200).json(questions[0].toObject());
}
