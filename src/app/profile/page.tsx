"use client"
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function profilePage(){

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
    return(
        <div className='flex flex-col gap-1 items-center justify-center min-h-screen py-2' >
            <h1>Profile</h1>
            <p>This is Profile Section</p>
            <hr className="h-3" />
            <button onClick={logout} className="p-2 font-bold tracking-widest bg-violet-700 rounded-lg hover:scale-105 transition ease-in-out duration-500 hover:text-black" ><span className="duration-0 hover:scale-0 transition-none" >LogOut</span></button>
        </div>
    )
}