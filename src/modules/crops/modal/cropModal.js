import mongoose from "mongoose";

const cropSchema = new mongoose.Schema({
  name: { type: String, required: true },
  floweringStart: { type: Date, required: true },
  floweringEnd: { type: Date, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  location: {
    type: { type: String, default: "Point" },
    coordinates: { type: [Number], index: "2dsphere" },
  },
  recommendedHiveDensity: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

cropSchema.pre("save", function (next) {
  this.location = {
    type: "Point",
    coordinates: [this.longitude, this.latitude],
  };
  next();
});

cropSchema.index({ location: "2dsphere" });

const Crop = mongoose.model("Crop", cropSchema);
export default Crop;
