import Hive from "../modal/hiveModal.js";

export async function saveHiveLog(hiveData) {
  const hive = new Hive(hiveData);
  return await hive.save();
}
