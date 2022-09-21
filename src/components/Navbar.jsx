import { Link } from "react-router-dom"
import { useState } from "react"

// icons
import * as Fi from 'react-icons/fi'
import * as Hi from 'react-icons/hi'

const Navbar = () => {

  const Navdata = [
    {
      title: 'About Me',
      path: '/'
    },
    {
      title: 'My Works',
      path: '/works'
    },
    {
      title: 'Let\'s Connect',
      path: '/contact'
    }
  ]

  const [nav, setNav] = useState(false)

  return (
    <>
      <div className='w-full flex px-4 py-2 items-center xs:px-[30%] md:px-[50%] justify-between'>

        {/* title bar */}
        <div className='text-xl font-semibold'>
          <Link to='/' className="flex items-center"><p className="mr-[5px]"><Hi.HiCode size={24}/></p><p>Gelo</p></Link>
        </div>

        {/* nav menu */}
        <div className="xs:hidden">
          <p onClick={() => nav ? setNav(false) : setNav(true)} 
          className={
          nav 
          ? "cursor-pointer p-2 bg-[#228245] bg-opacity-50 outline-1 outline-white outline rounded-md" 
          : "cursor-pointer p-2 bg-gray-900 outline-1 outline-white outline rounded-md"
          }><Fi.FiMenu size={20}/></p>
        </div>

        {/* nav links for larger screens */}
        <div className="xs:flex w-full justify-end hidden">
          <div className="xs:flex w-[50%] justify-evenly hidden">
            {Navdata.map(el => (
              <Link key={el.title} className="transition-all hover:text-[#228245]" to={el.path}>{el.title}</Link>
            ))}
          </div>
        </div>
      </div>

      {/* nav links for smaller */}
          <div 
            className=
            {
              nav 
              ? "xs:hidden transition-all opacity-100 duration-500 z-[100] absolute right-2 w-[180px] h-[148px] bg-gray-900 outline-1 outline-white outline rounded-md overflow-hidden"
              : "transition-all opacity-0 duration-500 z-[100] absolute right-2 w-[0px] h-[0px] bg-gray-900 outline-1 outline-white outline rounded-md overflow-hidden text-[0px]"
            }
          >
            <div className="flex flex-col items-center justify-around h-full lg:hidden">
              {Navdata.map(el => (
                <Link key={el.title} onClick={() => setNav(false)} to={el.path} className="active:bg-[#228245] w-full flex justify-center items-center h-full ">
                  {el.title}
                </Link>
              ))}
            </div>
          </div>
    </>
  )
}

export default Navbar