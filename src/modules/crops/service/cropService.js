import { parseCropData } from "../reader/cropReader.js";
import { saveCropEntry } from "../writer/cropWriter.js";
import Crop from "../modal/cropModal.js";

export async function addCropEntry(rawData) {
  const parsedData = parseCropData(rawData);

  // Check for overlapping flowering windows nearby
  const overlappingCrop = await Crop.findOne({
    location: {
      $near: {
        $geometry: {
          type: "Point",
          coordinates: [parsedData.longitude, parsedData.latitude],
        },
        $maxDistance: 10000, // e.g. 10 km radius for overlap check
      },
    },
    $or: [
      {
        floweringStart: { $lte: parsedData.floweringEnd },
        floweringEnd: { $gte: parsedData.floweringStart },
      },
    ],
  });

  if (overlappingCrop) {
    throw new Error(
      "Overlapping flowering window detected with an existing crop nearby"
    );
  }

  return await saveCropEntry(parsedData);
}

export async function getNearbyCrops({ lat, lng, rad, targetDate }) {
  return await Crop.find({
    location: {
      $near: {
        $geometry: {
          type: "Point",
          coordinates: [lng, lat],
        },
        $maxDistance: rad * 1000, // convert km to meters
      },
    },
    floweringStart: { $lte: targetDate },
    floweringEnd: { $gte: targetDate },
  });
}
