import {connect} from '@/dbConfig/dbConfig';
import User from '@/models/userModel';
import { NextRequest,NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

connect()

export async function POST(request:NextRequest){
    try {
        const reqBody = await request.json();
        const {email,password} = reqBody
        console.log(reqBody)

        //Check if user already exist
        const user = await User.findOne({email})
        if(!user){
            return NextResponse.json({error:"User doesn't exist"},{status:400})
        }
        console.log("User Exist")

        const checkValidPassword = await bcryptjs.compare(password,user.password)

        if(!checkValidPassword){
            return NextResponse.json({error:"Invalid Password"},{status:400})
        }

        //Create token data
        const tokenData = {
            id:user._id,
            username:user.username,
            email:user.email
        }

        //Create token
        const token = await jwt.sign(tokenData,process.env.TOKEN_SECRET!, {expiresIn:'1d'})

        const response =  NextResponse.json({
            messgae:"Login Successful",
            success:true
        })

        response.cookies.set("token",token,{httpOnly:true})

        return response;

    } catch (error) {
        return NextResponse.json({error:"Error while connecting"},{status:404})
    }
}