import type { NextApiRequest, NextApiResponse } from "next";
import { checkIfClaimed } from "../../utils/googleSheets";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const claimedStatusArray = await checkIfClaimed();
    res.status(200).json(claimedStatusArray);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch claimed status" });
  }
}
