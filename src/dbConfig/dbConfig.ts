import mongoose from "mongoose";

export  async function  connect() {
  
    try{
       mongoose.connect(process.env.MONGO_URL!)
       const connection = mongoose.connection

       connection.on('connected', () => {
         console.log('MongoDB Connected Successfully')
       })

       connection.on('erro' ,(err) => {
         console.log("Not Connected due to " + err + " Error" )
         process.exit()
       } )

    }catch(error){
       console.log("Error")
       console.log(error)
    }

}