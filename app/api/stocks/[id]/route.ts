import { Stock } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: number } }
) {
  try {
    const stock = await prisma.stock.findUnique({
      where: {
        code: Number(params.id),
      },
    });
    return NextResponse.json({ stock }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: number } }
) {
  try {
    const stock: Stock = await req.json();
    const updateStock = await prisma.stock.update({
      where: {
        code: Number(params.id),
      },
      data: {
        ...stock,
      },
    });
    return NextResponse.json({ updateStock }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: number } }
) {
  try {
    const deleteStock = await prisma.stock.delete({
      where: {
        code: Number(params.id),
      },
    });
    return NextResponse.json({ deleteStock }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
