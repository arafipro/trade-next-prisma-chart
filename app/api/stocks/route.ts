import { Stock } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../lib/prisma";

export async function GET() {
  try {
    const stocks = await prisma.stock.findMany();
    return NextResponse.json({ stocks }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// Required fields in body: code, stockname, market
export async function POST(req: NextRequest) {
  try {
    const stock: Stock = await req.json();
    const newStock = await prisma.stock.create({
      data: {
        ...stock,
      },
    });
    return NextResponse.json({ newStock }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
