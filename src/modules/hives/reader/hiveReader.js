import Hive from "../modal/hiveModal.js";

export function parseHiveData(data) {
  const { hiveId, datePlaced, latitude, longitude, numColonies } = data;

  if (
    !hiveId ||
    !datePlaced ||
    latitude == null ||
    longitude == null ||
    !numColonies
  ) {
    throw new Error("Missing required fields");
  }
  if (latitude < -90 || latitude > 90 || longitude < -180 || longitude > 180) {
    throw new Error("Invalid latitude or longitude");
  }
  return {
    hiveId,
    datePlaced: new Date(datePlaced),
    latitude,
    longitude,
    numColonies,
  };
}

export async function readHiveLogs(filters = {}, page = 1, limit = 10) {
  const skip = (page - 1) * limit;

  const hives = await Hive.find(filters)
    .sort({ datePlaced: -1 })
    .skip(skip)
    .limit(Number(limit));

  const total = await Hive.countDocuments(filters);

  return {
    data: hives,
    pagination: {
      total,
      page: Number(page),
      limit: Number(limit),
      totalPages: Math.ceil(total / limit),
    },
  };
}
