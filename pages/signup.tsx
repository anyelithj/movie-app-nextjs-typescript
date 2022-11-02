import React, { useState } from 'react'

const signup = () => {
 
    const [data, setData] = useState({
        email: '',
        password: '',
      })
    
  const handleSignup = async (e: any) => {
    e.preventDefault()

    try {
    //   await signup(data.email, data.password)
    } catch (err) {
      console.log(err)
    }

    console.log(data)
  }

  return (
      <form onSubmit={handleSignup} className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14">
        <h1 className="text-4xl font-semibold">Sing In</h1>
        <div className="space-y-4">
            <label className="inline-block w-full">
                <input type="email" placeholder="Email" className="input" value={data.email} required
                onChange={(e: any) =>
                  setData({
                    ...data,
                    email: e.target.value,
                  })
                }
                />
                {/* {errors.email && <span className="p-1 text-[13px] font-light text-orange-500">Please enter a valid email.</span>} */}
            </label>
            <label className="inline-block w-full">
                <input type="password" placeholder="Password" className="input" value={data.password} required 
                onChange={(e: any) =>
                  setData({
                    ...data,
                    password: e.target.value,
                  })
                }
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
  )
}

export default signup
