"use client"
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import {useState} from 'react'
import Link from "next/link";

export default function profilePage(){

    const [data,setData] = useState("")

    const router = useRouter()

    const logout = async () =>{
        try {
            await axios.get('/api/users/logout')
            toast.success('LogOut Successful')
            router.push('/login')
        } catch (error:any) {
            console.log(error.message);
            
            toast.error(error.message)
        }
    }

    const getUserDetail = async () =>{
        try{
           const res = await axios.get('/api/users/me')
           console.log(res.data)
           setData(res.data.data._id);
        }
        catch(error:any){
           console.log(`Error yar : ${error}`)
        }
        
    } 

    return(
        <div className='flex flex-col gap-1 items-center justify-center min-h-screen py-2' >
            <h1>Profile</h1>
            <p>This is Profile Section</p>
            <h2 className="underline underline-offset-8 " >{data == "" ? "Nothing" : <Link href={`/profile/${data}`}>{data}</Link>}</h2>
            <hr className="h-3" />
            <button onClick={logout} className="p-2 font-bold tracking-widest bg-violet-700 rounded-lg hover:scale-105 transition ease-in-out duration-500 hover:text-black" ><span className="duration-0 hover:scale-0 transition-none" >LogOut</span></button>
            <br/>
            <button onClick={getUserDetail} className="p-2 font-bold tracking-widest bg-green-700 rounded-lg hover:scale-105 transition ease-in-out duration-500 hover:text-black" ><span className="duration-0 hover:scale-0 transition-none" >Get User Details</span></button>
        </div>
    )
}

