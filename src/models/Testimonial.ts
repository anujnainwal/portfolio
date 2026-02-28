import mongoose, { Schema, Document } from "mongoose";

export interface ITestimonial extends Document {
  name: string;
  role: string;
  company: string;
  quote: string;
  image?: string;
  order?: number; // for manual sorting
}

const TestimonialSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    role: { type: String, required: true },
    company: { type: String, required: true },
    quote: { type: String, required: true },
    image: { type: String },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.models.Testimonial ||
  mongoose.model<ITestimonial>("Testimonial", TestimonialSchema);
