import { Trade } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: number } }
) {
  try {
    const trade = await prisma.trade.findUnique({
      where: {
        id: Number(params.id),
      },
    });
    return NextResponse.json({ trade }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: number } }
) {
  try {
    const { id, ...trade }: Trade = await req.json();
    const updateTrade = await prisma.trade.update({
      where: {
        id: Number(params.id),
      },
      data: {
        ...trade,
      },
    });
    return NextResponse.json({ updateTrade }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: number } }
) {
  try {
    const deleteTrade = await prisma.trade.delete({
      where: {
        id: Number(params.id),
      },
    });
    return NextResponse.json({ deleteTrade }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
