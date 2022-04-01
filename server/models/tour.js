import mongoos from "mongoose";

const tourSchema = mongoos.Schema({
  title: String,
  description: String,
  name: String,
  creator: String,
  tages: [String],
  imageFile: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
  likeCount: {
    type: Number,
    default: 0,
  },
});

const TourModel = mongoos.model("Tour", tourSchema);
export default TourModel;
