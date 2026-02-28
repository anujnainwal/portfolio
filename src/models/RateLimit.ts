import mongoose, { Schema, Document } from "mongoose";

export interface IRateLimit extends Document {
  identifier: string; // email or IP
  attempts: number;
  lastAttempt: Date;
}

const RateLimitSchema: Schema = new Schema({
  identifier: { type: String, required: true, unique: true },
  attempts: { type: Number, default: 0 },
  lastAttempt: { type: Date, default: Date.now },
});

// Automatically expire records after 1 hour (rate limit window)
RateLimitSchema.index({ lastAttempt: 1 }, { expireAfterSeconds: 3600 });

const RateLimit =
  (mongoose.models?.RateLimit as mongoose.Model<IRateLimit>) ||
  mongoose.model<IRateLimit>("RateLimit", RateLimitSchema);

export default RateLimit;
