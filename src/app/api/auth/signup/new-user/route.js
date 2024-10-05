import connectionDB from "@/app/lib/connectionDB";
import { NextResponse } from "next/server";

export const POST = async(request)=>{
    try{
        const db= await connectionDB()
        const userCollection = db.collection('user');
        const newUser= await request.json();
        const resp= await userCollection.insertOne(newUser)
        return NextResponse.json({resp}, {message: "New user added" })
    }
    catch(err){
        console.log(err);
        return NextResponse.json({ message: "Something went wrong" }, { headers, status: 500 });
    }
}