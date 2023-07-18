export default function UserProfile({params}:any){
    return(
        <div className='flex flex-col space-y-3 items-center justify-center min-h-screen py-2' >
            <h1 className="text-5xl font-bold" >Profile</h1>
            <p className="text-4xl " >User Profile 
            <span className="p-2 bg-orange-500 rounded ml-3 text-black font-bold text-3xl " >{params.id}</span>
            </p>
        </div>
    )
}