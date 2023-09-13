import { Trade } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../lib/prisma";

export async function GET() {
  try {
    const trades = await prisma.trade.findMany();
    return NextResponse.json({ trades }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// Required fields in body: price, shares, tradingDate, stockCode
export async function POST(req: NextRequest) {
  try {
    const { id, ...trade }: Trade = await req.json();
    const newTrade = await prisma.trade.create({
      data: {
        ...trade,
      },
    });
    return NextResponse.json({ newTrade }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
