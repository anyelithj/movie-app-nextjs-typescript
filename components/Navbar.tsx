import React from 'react'

const Navbar = () => {
  return (
    <div>
      <header className={`${isScrolled && 'bg-[#141414]'}`}>
            <div className="flex items-center space-x-2 md:space-x-10"> 
                <img
                src="https://rb.gy/ulxxee"
                width={100}
                height={100}
                className="cursor-pointer object-contain"
                />
                <ul className="hidden space-x-4 md:flex">
                    <li className="headerLink">Login</li>
                </ul>
            </div>
            <div className="flex items-center space-x-4 text-sm font-light">
                <HiOutlineSearch className="hidden h-6 w-6 sm:inline"/>
                <p className="hidden lg:inline">kids</p>
                <HiOutlineBell className="hidden h-6 w-6 sm:inline"/>
                {/* <Link href="/account"> */}
                    <img
                        onClick={logout}
                        src="https://rb.gy/g1pwyx"
                        alt=""
                        className="cursor-pointer rounded"
                    />
                {/* </Link> */}
            </div>
        </header>
    </div>
  )
}

export default Navbar
