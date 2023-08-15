import nodemailer from 'nodemailer'
import User from '@/models/userModel'
import bcryptjs from 'bcryptjs'
// const nodemailer = require('nodemailer')

export const sendEmail = async ({email,emailType,userId}:any) => {
 try {
    //Create a hashed token
    const hashedToken = await bcryptjs.hash(userId.toString(),10)

    if(emailType === "VERIFY"){
        await User.findByIdAndUpdate(userId,{
            verifyToken:hashedToken,
            verifyTokenExpiry:Date.now() + 3600000
        })
    }else if(emailType === "RESET"){
        await User.findByIdAndUpdate(userId,{
            forgotPasswordToken:hashedToken,
            forgotPasswordTokenExpiry:Date.now() + 3600000
        })
    }

    const transporter = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: process.env.USER_AUTH,
          pass: process.env.USER_PASS
        }
      });

    const mailOptions = {
        from : 'bibekwiwek54@gmail.com', //sender
        to:email, //receiver
        subject:emailType === "VERIFY" ? "Verify Your Email" : "Rest Your Password",
        html:`<p>Click <a href="${process.env.DOMAIN}/verifyEmail?token=${hashedToken}">here</a></> to ${emailType === "VERIFY" ? "Verify Your Email" : "Rest Your Password"} or copy and paste the link below in your browser. <br/> ${process.env.DOMAIN}/verifyemail?token=${hashedToken} </p>` 
    }

    const mailResponse = await transporter.sendMail(mailOptions)
    return mailResponse;

 } catch (error:any) {
    throw new Error(error.message)
 }   
 
}