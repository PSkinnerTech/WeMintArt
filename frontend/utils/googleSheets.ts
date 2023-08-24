import { google, sheets_v4 } from "googleapis";
import { readFileSync } from "fs";
import path from "path";

const sheets = google.sheets("v4");

const serviceAccount = JSON.parse(
  readFileSync(
    path.resolve(process.cwd(), "wemintart-e73ca359b40f.json"),
    "utf8"
  )
);

const jwtClient = new google.auth.JWT(
  serviceAccount.client_email,
  undefined,
  serviceAccount.private_key,
  ["https://www.googleapis.com/auth/spreadsheets"]
);

google.options({ auth: jwtClient });

const SHEET_ID = process.env.sheetID;

export async function writeToSheet(data: any) {
  await jwtClient.authorize();

  await sheets.spreadsheets.values.append({
    spreadsheetId: SHEET_ID,
    range: "Sheet1!A2:D401",
    valueInputOption: "RAW",
    insertDataOption: "INSERT_ROWS",
    resource: {
      values: [data],
    },
  } as any);
}

export async function checkIfClaimed() {
  await jwtClient.authorize();

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: SHEET_ID,
    range: "Sheet1!D2:D401",
  });

  const values = response.data.values;
  if (!values || values.length === 0) {
    throw new Error("No data found.");
  }
  const claimedNFTs = values.map((row) => row[0] !== "");

  return claimedNFTs;
}
