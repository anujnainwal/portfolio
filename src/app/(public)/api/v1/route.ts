import { NextResponse } from "next/server";
import connectDB from "@/config/db";

export async function GET(req: Request) {
  await connectDB();
  return NextResponse.json({
    statusCode: 200,
    message: "Hello World",
    data: null,
  });
}
