import type { NextApiRequest, NextApiResponse } from "next";
import { shuffle } from "../../../utils/arrays";
import questions from "../questionsStorage";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const questionsIds = questions.map((question) => question.id);

  res.status(200).json(shuffle(questionsIds));
};

export default handler;
