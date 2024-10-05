import connectionDB from "@/app/lib/connectionDB";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    // Connect to the database
    const db = await connectionDB();
    const userCollection = db.collection('user');

    // Get user data from request body
    const newUser = await request.json();

    // Insert new user into the collection
    const resp = await userCollection.insertOne(newUser);

    // Return success response
    return NextResponse.json({ message: "New user added", data: resp }, { status: 201 });
  } catch (err) {
    console.error("Error during user creation:", err);

    // Return error response
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
  }
};
