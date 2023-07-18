"use client"
import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {axios} from 'axios';

export default function page(){
 
    const [user,setUser] = React.useState({
        email:"",
        password:"",
    })

    const onLogin = async function(){

    }

    return(
        <div className='flex flex-col gap-1 items-center justify-center min-h-screen py-2 ' >
            <h1 className='text-3xl font-bold'>LOGIN</h1>
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
            > Login Here </button>
            
            <Link href={'/signup'} >Visit Sign Up Page</Link>

        </div>
    )
}