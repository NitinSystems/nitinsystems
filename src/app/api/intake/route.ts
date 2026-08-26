import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { fullName, workEmail, businessType, primaryNeed, operationalBottleneck, techStack } = body;

    // Server-side validation
    if (!fullName || !workEmail || !operationalBottleneck) {
      return NextResponse.json(
        { error: "Required fields missing: fullName, workEmail, or operationalBottleneck." },
        { status: 400 }
      );
    }

    const intakePayload = {
      fullName,
      workEmail,
      businessType: businessType || "Not Specified",
      primaryNeed: primaryNeed || "CRM Structuring",
      operationalBottleneck,
      techStack: techStack || "None Specified",
      submittedAt: new Date().toISOString(),
      source: "Nitin Systems Website Diagnostic Form",
    };

    // Forward to external Webhook (Make.com, Zapier, GoHighLevel, or HubSpot) if environment variable is set
    const webhookUrl = process.env.INTAKE_WEBHOOK_URL;
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(intakePayload),
      });
    }

    // Log payload server-side for inspection
    console.log("[INTAKE SUBMISSION LOGGED]:", intakePayload);

    return NextResponse.json({
      success: true,
      message: "Intake diagnostic received successfully.",
      payload: intakePayload,
    });
  } catch (error) {
    console.error("[INTAKE API ERROR]:", error);
    return NextResponse.json(
      { error: "Internal server error processing diagnostic submission." },
      { status: 500 }
    );
  }
}
