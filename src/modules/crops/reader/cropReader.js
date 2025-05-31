export function parseCropData(req) {
  const {
    name,
    floweringStart,
    floweringEnd,
    latitude,
    longitude,
    recommendedHiveDensity,
  } = req.body;

  if (
    !name ||
    !floweringStart ||
    !floweringEnd ||
    latitude == null ||
    longitude == null ||
    !recommendedHiveDensity
  ) {
    throw new Error("Missing required crop fields");
  }

  if (latitude < -90 || latitude > 90 || longitude < -180 || longitude > 180) {
    throw new Error("Invalid latitude or longitude");
  }

  if (new Date(floweringEnd) < new Date(floweringStart)) {
    throw new Error("Flowering end date must be after start date");
  }

  return {
    name,
    floweringStart: new Date(floweringStart),
    floweringEnd: new Date(floweringEnd),
    latitude,
    longitude,
    recommendedHiveDensity,
  };
}

export function parseNearbyQuery(query) {
  const { latitude, longitude, radius = 100, date = new Date() } = query;

  if (!latitude || !longitude) {
    throw new Error("Latitude and longitude are required");
  }

  const lat = parseFloat(latitude);
  const lng = parseFloat(longitude);
  const rad = parseFloat(radius);
  const targetDate = new Date(date);

  if (isNaN(lat) || isNaN(lng) || isNaN(rad)) {
    throw new Error("Invalid coordinates or radius");
  }

  if (lat < -90 || lat > 90 || lng < -180 || lng > 180) {
    throw new Error("Latitude or longitude out of range");
  }

  return { lat, lng, rad, targetDate };
}
