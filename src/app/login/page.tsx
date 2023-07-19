"use client"
import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { toast } from 'react-hot-toast';

export default function page(){
 
    const router = useRouter()
    const [user,setUser] = React.useState({
        email:"",
        password:"",
    })

    const [disableButton,setDisableButton] = React.useState(false)

    const [loading,setLoading] = React.useState(false)

    const onLogin = async function(){
       try {
          setLoading(true)
      
          const response = await axios.post("/api/users/login",user);
          console.log("Login Successful",response.data)
          toast.success("Login Sucess")
          router.push("/profile");

       } catch (error:any) {
           console.log(`Login Failed : Error ${error.message}`)
           toast.error(error.message)
       } finally{
           setLoading(false);
       }
    }

    React.useEffect(() => {
       if(user.email.length > 0 && user.password.length > 0 ){
          setDisableButton(true);
       }else{
        setDisableButton(false);
       }
    },[user])

    return(
        <div className='flex flex-col gap-1 items-center justify-center min-h-screen py-2 ' >
            <h1 className='text-3xl font-bold'>{loading ? "loading"  : "Login" }</h1>
            <hr/>
            <label htmlFor='email'>email</label>
            <input
            className=' input-field '
            id='email'
            type='text'
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
            onClick={onLogin}
            className='p-2 mb-4 border hover:bg-slate-700 border-gray-200 focus:border-gray-700 focus:outline-none rounded-lg'
            > { !disableButton ? " No Login"  : "Login Here" } </button>
            
            <Link href={'/signup'} >Visit Sign Up Page</Link>

        </div>
    )
}