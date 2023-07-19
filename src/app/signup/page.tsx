"use client" 
import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { toast } from 'react-hot-toast';

export default function page(){
 
    const router = useRouter();
    const [user,setUser] = React.useState({
        email:"",
        password:"",
        username:""
    })

    const [showbutton,setShowButton] = React.useState(false)

    const [loading,setLoading] = React.useState(false)

    React.useEffect(() => {
         if(user.email.length > 0 && user.username.length > 0 && user.password.length > 0){
            setShowButton(true)
         }
    },[user])

    const onSignUp = async function(){
         try {
            setLoading(true)
 
            const response = await axios.post("/api/users/signup",user)
            console.log("Sucess : ", response.data )
            router.push("/login")

         } catch (error : any) {
            console.log("SignUp failed",error.message);
            toast.error(`error.message`)
         } finally{
            setLoading(false);
         }

    }

    return(
        <div className='flex flex-col gap-1 items-center justify-center min-h-screen py-2 ' >
            <h1 className='text-3xl font-bold'>{loading ? "loading" : "SIGN_UP"}</h1>
            <hr/>
            <label htmlFor='username'>username</label>
            <input
            className=' input-field '
            required
            id='username'
            type='text'
            value={user.username}
            onChange={(e) => setUser({...user, username:e.target.value})}
            placeholder='username'
            />

            <label htmlFor='email'>email</label>
            <input
            className=' input-field '
            required
            id='email'
            type='email'
            value={user.email}
            onChange={(e) => setUser({...user, email:e.target.value})}
            placeholder='email'
            />

            <label htmlFor='password'>password</label>
            <input
            className=' input-field '
            id='password'
            type='password'
            value={user.password}
            onChange={(e) => setUser({...user, password:e.target.value})}
            placeholder='password'
            />
            
            <button
            onClick={onSignUp}
            className='p-2 mb-4 border hover:bg-slate-700 border-gray-200 focus:border-gray-700 focus:outline-none rounded-lg'
            > {!showbutton ? "No Sign Up" : " Sign Up" } </button>
            
            <Link href={'/login'} >Visit Login Page</Link>

        </div>
    )
}