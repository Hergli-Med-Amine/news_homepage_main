import React from 'react'
import logo from './images/logo.svg'
import iconmenu from './images/icon-menu.svg'
import iconmenuclosed from './images/icon-menu-close.svg'
import { useState } from 'react'

export default function Navbar() {
  
  const [btnState, setBtnState ] = useState(false)
  function handlemenubutton() {
    setBtnState(btnState => !btnState);
    const navsidebar = document.getElementById("sidenav")
    if (btnState===true){
      navsidebar.classList.add("hidden")
      navsidebar.classList.remove("flex")
    }
    else {
      navsidebar.classList.remove("hidden")
      navsidebar.classList.add("flex")
    }
  }
  let toggleClassCheck = btnState ? ' active'+'hidden': '';

  return (
    <div className="flex flex-row justify-between align-middle w-3/4 
    h-9 mb-10 laptop:mb-0 laptop:mt-10 laptop:relative">
      <div className="navbar-icon">
        <img className="h-9 mt-10 laptop:mt-0" src={logo} />
      </div>
      <div id="sidenav" className={` navbar-ul laptop:translate-x-0 
      hidden fixed right-0 h-full w-1/3 
      bg-Off-white flex-col justify-center shadow-all items-start
      pl-14 laptop:pl-0 font-bold laptop:font-normal z-10
      laptop:flex laptop:flex-row laptop:absolute laptop:shadow-none 
      laptop:justify-end list-none gap-10 laptop:items-center`}>
        <img className="laptop:hidden fixed w-full max-w-[32px] top-10 right-10 hover:cursor-pointer" 
        src={iconmenuclosed}
        onClick={handlemenubutton}
        />
        <li className="text-gray-500"><a>Home</a></li>
        <li className="text-gray-500"><a>New</a></li>
        <li className="text-gray-500"><a>Popular</a></li>
        <li className="text-gray-500"><a>Trending</a></li>
        <li className="text-gray-500"><a>Categorie</a></li>
      </div>
      <img onClick={handlemenubutton} id="icon-image" className={`hover:cursor-pointer 
      laptop:hidden h-9 mt-10 w-14 items-center 
      justify-center pt-2 pb-1 ${toggleClassCheck}`}
      src={iconmenu} 
      />
    </div>
  )
}
