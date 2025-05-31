import { addHiveLog, getHiveLogs, exportHiveLogsToCSV } from "../service/hiveService.js";

const addHive = async (req, res) => {
  try {
    const savedHive = await addHiveLog(req.body);
    res.status(201).json(savedHive);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const fetchHiveLogs = async (req, res) => {
  try {
    const { startDate, endDate, page, limit } = req.query;
    const result = await getHiveLogs({ startDate, endDate, page, limit });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const exportHiveLogs = async (req, res) => {
  try {
    const { startDate, endDate } = req.query;
    const csv = await exportHiveLogsToCSV({ startDate, endDate });

    res.header('Content-Type', 'text/csv');
    res.attachment('hive_logs.csv');
    res.send(csv);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


export { addHive, fetchHiveLogs };
