import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import { writeToSheet } from "../../utils/googleSheets";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const data = req.body;
    await writeToSheet(data);
    res.status(200).json({ message: "Data written successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to write data" });
  }
}
