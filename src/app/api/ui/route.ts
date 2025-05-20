export const dynamic = "auto";
export const revalidate = 3600;

// GET
const getHandler = async () => {
  try {
    console.log(`GET REQUEST: api/ui: `);

    const uiData: Record<string, Record<string, string>[]> = {};

    const myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      `Bearer ${process.env.AIRTABLE_PERSONAL_ACCESS_TOKEN}`
    );

    const impact_response_ = await fetch(
      `https://api.airtable.com/v0/${process.env.AIRTABLE_APP_ID}/impact`,
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
    return Response.json({
      message: "successful data fetch",
      data: {
        ...uiData,
      },
    });
  } catch (err: unknown) {
    console.error("ERROR in route: api/ui - GET \n > ", err);
    return Response.json({ error: "SERVER ERROR" });
  }
};

export const GET = getHandler;
