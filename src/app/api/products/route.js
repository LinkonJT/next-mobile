import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import React from "react";

export async function POST(request) {
  try {
    const newProduct = await request.json(); //get product data from req body
    const productWithTimeStamp = {
      ...newProduct,
      createdAt: new Date().toISOString(),
    };
    const productsCollection = await dbConnect("products");

    const result = await productsCollection.insertOne(productWithTimeStamp);
    return NextResponse.json(
      { ...newProduct, _id: result.insertedId },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    const collection = await dbConnect("products");
    const products = await collection.find({}).toArray();
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
