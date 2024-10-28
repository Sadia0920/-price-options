import { useState } from "react";
import Route from "./Route";
import { IoMdMenu,IoMdClose } from "react-icons/io";

export default function Navbar() {
    
    const [open,setOpen]=useState(false)
    const routes = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Profile", path: "/profile" },
        { id: 4, name: "Settings", path: "/settings" },
        { id: 5, name: "Contact", path: "/contact" }
      ];

  return (
    <nav className="w-10/12 mx-auto py-10">
        <div className="text-3xl md:hidden" onClick={()=>setOpen(!open)}>
            {
                open === true?<IoMdClose></IoMdClose>:<IoMdMenu ></IoMdMenu>
            }
        </div>
      <ul className={`md:flex bg-gray-400 md:bg-transparent rounded-lg p-2 absolute md:static ${open?'':'hidden'}`}>
      {/* <ul className={`md:flex md:static absolute duration-1000 ${open?'top-18':'-top-60'}`}> */}
      {
        routes.map(route => <Route 
            route={route} 
            key={route.id}
            ></Route>)
       }
      </ul>
    </nav>
  )
}
