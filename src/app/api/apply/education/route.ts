import { NextRequest, NextResponse } from "next/server";

// interface ApplicationEducation {
//   email: string;
//   phone: string;
//   name: string;
//   applicationFor: string;
//   attachmentLink: string;
// }

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

    const formData = await req.formData();
    const body = Object.fromEntries(formData);

    const { email, phone, name, applicationFor, attachmentLink } = body;

    if (!email || !phone || !name || !applicationFor || !attachmentLink) {
      console.log("Invalid application object", formData);
      return NextResponse.json(
        { message: "Invalid application object" },
        { status: 400 }
      );
    }

    // POST application to airtable
    const post_response_ = await fetch(
      `https://api.airtable.com/v0/${airtableBaseID}/tblucViMAIbfKt0NS`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${airtablePAT_write}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields: {
            email,
            phone,
            name,
            for: applicationFor,
            attachment_link: attachmentLink,
          },
        }),
      }
    );

    // if response !ok
    if (!post_response_.ok) {
      const error = await post_response_.json();
      const errorMessage = error.message || "status - " + post_response_.status;
      console.warn(
        "FAILED: in routeHandler POST: /api/apply/education: ",
        errorMessage
      );

      return NextResponse.json(
        { message: errorMessage },
        { status: post_response_.status }
      );
    }

    const post_response = await post_response_.json();

    // http response
    console.log("response - ", post_response);
    return NextResponse.json(
      { message: "Application sent successfully", data: post_response },
      { status: 200 }
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("ERROR in POST: /api/apply/education", error);

    return NextResponse.json(
      {
        message: "Error sending education application",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
