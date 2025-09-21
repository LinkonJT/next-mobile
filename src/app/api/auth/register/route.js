import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import React from "react";

import bcrypt from "bcryptjs"

export async function POST(req) {
  const { username, email, password, photoURL, role, createdAt } =
    await req.json(); // Parse the incoming JSON data from the request

  if (!username || !email || !password || !photoURL || !role) {
    return NextResponse.json(
      { message: "All fields are required" },
      { status: 400 }
    ); // Return an error if any field is missing
  }
  try {
    const usersCollection = await dbConnect("users"); // Connect to the "users" collection in the database

    // Check if the user already exists in the database

    const existingUser = await usersCollection.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }

    // Hash the password before storing it in the database
    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password with 10 salt rounds

    const newUser = {
      username,
      email,
      photoURL,
      password: hashedPassword,
      role: role || "customer", // fallback if role not provided
      createdAt: new Date().toISOString(),
    };

    const result = await usersCollection.insertOne(newUser);
    console.log(result); // Log the result for debugging purposes
    // Return a success message after user registration
    return NextResponse.json(
      { message: "User registered successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "something went wrong" },
      { status: 500 }
    );
  }
}


