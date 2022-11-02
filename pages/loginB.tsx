import Head from "next/head"
import Image from "next/image"
import { useRouter } from "next/router"
import { useState } from "react"
import { useAuth } from '../context/AuthContext'



function Login() {
    const router = useRouter()
    const { user, login } = useAuth()
    const [data, setData] = useState({
      email: '',
      password: '',
    })
  
    const handleLogin = async (e: any) => {
      e.preventDefault()
  
      console.log(user)
      try {
        login(data.email, data.password)
        await login
        router.push('/dashboard')
      } catch (err) {
        console.log(err)
      }
    }
    // const handleOnChange =(e:any) => {
    //     setData({
    //       ...data,
    //       email: e.target.value,
    //       password: e.target.value,
    //     })
    //   }

    return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
        <Head>
            <title>Netflix</title>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <Image
        src="https://rb.gy/p2hphi"
        layout="fill"
        className="-z-10 !hidden opacity-60 sm:!inline"
        objectFit="cover"
        />
        <img
        src="https://rb.gy/ulxxee"
        className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
        width={150}
        height={150}
      />
      <form onSubmit={handleLogin} className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14">
        <h1 className="text-4xl font-semibold">Sing In</h1>
        <div className="space-y-4">
            <label className="inline-block w-full">
                <input type="email" placeholder="Email" className="input"  name='email'
                onChange={(e: any) =>
                  setData({
                    ...data,
                    email: e.target.value,
                  })
                }
                value={data.email} required
                // onChange={handleOnChange}      
                />
                {/* {errors.email && <span className="p-1 text-[13px] font-light text-orange-500">Please enter a valid email.</span>} */}
            </label>
            <label className="inline-block w-full">
                <input type="password" placeholder="Password" className="input" name='password' 
                onChange={(e: any) =>
                  setData({
                    ...data,
                    password: e.target.value,
                  })
                }
                value={data.password} required
                //  onChange={handleOnChange}
                />
                {/* {errors.password && <span className="p-1 text-[13px] font-light text-orange-500">Your password must contain between 4 and 60 characters.</span>} */}
            </label>
        </div>
        <button className="w-full rounded bg-[#e50914] py-3 font-semibold">Sign In</button>
        <div className="text-[gray]">
            New to Netflix?
            <button type="submit" className="text-white hover:underline">Sign up now</button>
        </div>
      </form>
    </div>)
}
export default Login