import { parseHiveData } from "../reader/hiveReader.js";
import { saveHiveLog } from "../writer/hiveWriter.js";
import Hive from "../modal/hiveModal.js";
import { readHiveLogs } from "../reader/hiveReader.js";
import { Parser } from "json2csv";

export async function addHiveLog(hiveDataRaw) {
  const hiveData = parseHiveData(hiveDataRaw);

  const existing = await Hive.findOne({ hiveId: hiveData.hiveId });
  if (existing) {
    throw new Error("hiveId must be unique");
  }

  const saved = await saveHiveLog(hiveData);
  return saved;
}

export async function getHiveLogs({
  startDate,
  endDate,
  page = 1,
  limit = 10,
}) {
  const filters = {};

  if (startDate || endDate) {
    filters.datePlaced = {};
    if (startDate) filters.datePlaced.$gte = new Date(startDate);
    if (endDate) filters.datePlaced.$lte = new Date(endDate);
  }

  return await readHiveLogs(filters, page, limit);
}

export async function exportHiveLogsToCSV({ startDate, endDate }) {
  const query = {};
  if (startDate || endDate) {
    query.datePlaced = {};
    if (startDate) query.datePlaced.$gte = new Date(startDate);
    if (endDate) query.datePlaced.$lte = new Date(endDate);
  }

  const hiveLogs = await Hive.find(query).lean();

  if (hiveLogs.length === 0) {
    throw new Error("No hive logs found for the specified date range");
  }

  const fields = [
    "hiveId",
    "datePlaced",
    "latitude",
    "longitude",
    "numColonies",
    "createdAt",
  ];
  const opts = { fields };

  const parser = new Parser(opts);
  const csv = parser.parse(hiveLogs);

  return csv;
}
