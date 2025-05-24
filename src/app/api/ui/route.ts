import { NextResponse } from "next/server";

export const dynamic = "auto";
export const revalidate = 7200; // 7200 seconds = 2 hours

const airtableBaseID = process.env.AIRTABLE_BASE_ID;
const airtablePAT_read = process.env.AIRTABLE_PAT_READ;

// GET
const getHandler = async () => {
  try {
    console.log(`GET REQUEST: api/ui: `);

    if (!airtableBaseID) {
      console.error("Missing AIRTABLE_BASE_ID environment variable");
      return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
    if (!airtablePAT_read) {
      console.error("Missing AIRTABLE_PAT_READ environment variable");
      return NextResponse.json({ message: "Server error" }, { status: 500 });
    }

    const uiData: Record<string, Record<string, string>[]> = {};

    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${airtablePAT_read}`);

    const impact_response_ = await fetch(
      `https://api.airtable.com/v0/${airtableBaseID}/tblhubeP5Y1TVhRUm`,
      {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      }
    );
    // if response !ok
    if (!impact_response_.ok) {
      const error = await impact_response_.json();
      const errorMessage =
        error.message || "status - " + impact_response_.status;
      console.warn("FAILED: in routeHandler POST:/auth/login: ", errorMessage);

      return Response.json(
        { message: errorMessage },
        { status: impact_response_.status }
      );
    }

    // response ok
    const impactResponse = await impact_response_.json();
    // console.log("impactResponse.records:", impactResponse.records);
    uiData.impact = impactResponse.records.map(
      (record: Record<string, unknown>) => record.fields
    );

    // console.log("uiData: ", uiData);
    return NextResponse.json({
      message: "successful data fetch",
      data: {
        ...uiData,
      },
    });
  } catch (err: unknown) {
    console.error("ERROR in route: /api/ui - GET \n > ", err);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
};

export const GET = getHandler;
