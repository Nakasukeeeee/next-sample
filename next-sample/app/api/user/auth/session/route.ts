import { NextRequest, NextResponse } from "next/server";
import { createClerkClient } from "@clerk/clerk-sdk-node";

const clerk = createClerkClient({ secretKey: process.env.CLERK_API_KEY });

export async function GET(req: NextRequest) {
  const sessionId = req.cookies.get("__session");
  if (!sessionId) {
    return NextResponse.json({ error: "No session found" }, { status: 401 });
  }

  try {
    const session = await clerk.sessions.verifySession(sessionId);
    if (session) {
      return NextResponse.json({ user: session.user }, { status: 200 });
    } else {
      return NextResponse.json({ error: "Invalid session" }, { status: 401 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error verifying session" },
      { status: 500 }
    );
  }
}
