import { NextRequest, NextResponse } from "next/server";

interface Message {
  name?: string;
  email: string;
  tel?: string;
  message: string;
}

const airtableBaseID = process.env.AIRTABLE_BASE_ID;
const airtablePAT_write = process.env.AIRTABLE_PAT_WRITE;

// POST message
export async function POST(req: NextRequest) {
  try {
    if (!airtableBaseID) {
      console.error("Missing AIRTABLE_BASE_ID environment variable");
      return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
    if (!airtablePAT_write) {
      console.error("Missing AIRTABLE_PAT_WRITE environment variable");
      return NextResponse.json({ message: "Server error" }, { status: 500 });
    }

    const messageObj: Message = await req.json();
    const { email, message, name, tel } = messageObj;
    if (!email || !message) {
      return NextResponse.json(
        { message: "Email and message are required" },
        { status: 400 }
      );
    }

    console.log("saving message: ", messageObj);

    // POST message to airtable
    const post_response_ = await fetch(
      `https://api.airtable.com/v0/${airtableBaseID}/messages`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${airtablePAT_write}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields: {
            email,
            message,
            name,
            tel,
          },
        }),
      }
    );

    // if response !ok
    if (!post_response_.ok) {
      const error = await post_response_.json();
      const errorMessage = error.message || "status - " + post_response_.status;
      console.warn(
        "FAILED: in routeHandler POST: /api/message: ",
        errorMessage
      );

      return NextResponse.json(
        { message: errorMessage },
        { status: post_response_.status }
      );
    }

    // response ok
    const post_response = await post_response_.json();
    return NextResponse.json(
      { message: "Message sent successfully", data: post_response },
      { status: 200 }
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("ERROR in POST: /api/message", error);

    return NextResponse.json(
      {
        message: "Error sending message",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
