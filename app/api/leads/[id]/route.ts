// app/api/leads/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";  // Changed from default import to named import

type RouteParams = {
  params: Promise<{
    id: string
  }>
}

export async function PATCH(
  request: NextRequest,
  { params }: RouteParams
) {
  try {
    // Await the params in Next.js 15
    const { id } = await params;
    
    // Parse the request body
    const data = await request.json();
    
    console.log("Updating lead:", { id, data });
    
    // Update the lead
    const updatedLead = await prisma.lead.update({
      where: { id },
      data: {
        status: data.status,
        bookingStatus: data.bookingStatus,
      },
    });

    return NextResponse.json({
      success: true,
      lead: updatedLead,
    });
  } catch (error: any) {
    console.error("Error updating lead:", error);
    
    // Check if it's a Prisma error
    if (error.code === 'P2025') {
      return NextResponse.json(
        { success: false, error: "Lead not found" },
        { status: 404 }
      );
    }
    
    return NextResponse.json(
      { success: false, error: "Failed to update lead" },
      { status: 500 }
    );
  }
}