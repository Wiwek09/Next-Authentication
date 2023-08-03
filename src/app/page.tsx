// import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen  ' >
    <h1 className='' >This is the learning project of full stack app building with next js. Our tutor is <span className='font-bold text-green-400 spacing-2 ' > Hitech Chaudhary</span></h1>
    <hr/>
    <div className='flex space-x-6 mt-9 ' >
      <Link href={'/login'} className='p-3 bg-slate-600 rounded-xl hover:bg-slate-800 cursor-pointer '>Login</Link>
      <Link href={'/signup'} className='p-3 bg-slate-600 rounded-xl hover:bg-slate-800 cursor-pointer' >SignUp</Link>
    </div>
    </div>
  )
}
