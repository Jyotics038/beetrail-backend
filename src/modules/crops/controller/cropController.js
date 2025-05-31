import { addCropEntry, getNearbyCrops } from '../service/cropService.js';
import { parseNearbyQuery } from '../reader/cropReader.js';

export const createCrop = async (req, res) => {
  try {
    const saved = await addCropEntry(req);
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getNearbyCropOpportunities = async (req, res) => {
  try {
    const queryData = parseNearbyQuery(req.query);
    const crops = await getNearbyCrops(queryData);
    res.json(crops);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
