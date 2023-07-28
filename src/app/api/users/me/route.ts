import { getDataFromToken } from "@/helpers/getDataFromToken";
import { NextResponse,NextRequest } from "next/server";
import User from "@/models/userModel";
import { connect } from "@/dbConfig/dbConfig";

connect()

export async function GET(request:NextRequest){
    try {
        const userId = await getDataFromToken(request)
        User.findOne({_id:})
    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:404})
    }
}
