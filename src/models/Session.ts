import mongoose, { Schema, Document } from "mongoose";

export interface ISession extends Document {
  userId: string;
  expiresAt: Date;
  isValid: boolean;
}

const SessionSchema: Schema = new Schema({
  userId: { type: String, required: true },
  expiresAt: { type: Date, required: true },
  isValid: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
});

// TTL index to automatically remove expired sessions
SessionSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

const Session =
  (mongoose.models?.Session as mongoose.Model<ISession>) ||
  mongoose.model<ISession>("Session", SessionSchema);

export default Session;
