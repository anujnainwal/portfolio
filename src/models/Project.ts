import mongoose, { Schema, Document } from "mongoose";

export interface IProject extends Document {
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  github: string;
  live: string;
  color: string;
  category: string;
  challenge: string;
  solution: string;
  keyFeatures: string[];
  screenshots: string[];
  year: string;
  role: string;
  video: string;
  order: number;
}

const ProjectSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    shortDescription: { type: String, required: true },
    fullDescription: { type: String, required: true },
    image: { type: String, required: true },
    technologies: { type: [String], default: [] },
    github: { type: String },
    live: { type: String },
    color: { type: String, required: true },
    category: { type: String, required: true },
    challenge: { type: String, required: true },
    solution: { type: String, required: true },
    keyFeatures: { type: [String], default: [] },
    screenshots: { type: [String], default: [] },
    year: { type: String, required: true },
    role: { type: String, required: true },
    video: { type: String },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.models.Project ||
  mongoose.model<IProject>("Project", ProjectSchema);
