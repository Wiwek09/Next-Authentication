"use client"
import axios from "axios"
import Link from "next/link"
import React from "react"

export default function verifyEmailPage(){

    const [token,setToken] = React.useState("")
    const [verified,setVerified] = React.useState(false)
    const [error,setError] = React.useState(false)

    const verifyUserEmail = async ()  => {

        try {
            
        } catch (error:any) {
            setError(true)
        }

    }

} 