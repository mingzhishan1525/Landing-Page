import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const fallbackSubscribers = new Set<string>();

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      email?: string;
      source?: string;
    };
    const email = body.email?.trim().toLowerCase() || "";
    const source = body.source?.trim() || "unknown";

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { message: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseServiceRoleKey) {
      if (fallbackSubscribers.has(email)) {
        return NextResponse.json({
          message: "You are already subscribed.",
        });
      }

      fallbackSubscribers.add(email);

      return NextResponse.json({
        message: "Subscription successful",
      });
    }

    const response = await fetch(
      `${supabaseUrl}/rest/v1/newsletter_subscribers`,
      {
        method: "POST",
        headers: {
          apikey: supabaseServiceRoleKey,
          Authorization: `Bearer ${supabaseServiceRoleKey}`,
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        },
        body: JSON.stringify({ email, source }),
      },
    );

    if (response.status === 409) {
      return NextResponse.json({
        message: "You are already subscribed.",
      });
    }

    if (!response.ok) {
      return NextResponse.json(
        { message: "We could not subscribe you right now. Please try again later." },
        { status: 500 },
      );
    }

    return NextResponse.json({
      message: "Subscription successful",
    });
  } catch {
    return NextResponse.json(
      { message: "We could not subscribe you right now. Please try again later." },
      { status: 500 },
    );
  }
}
