import Crop from '../modal/cropModal.js';

export async function saveCropEntry(cropData) {
  const crop = new Crop(cropData);
  return await crop.save();
}
