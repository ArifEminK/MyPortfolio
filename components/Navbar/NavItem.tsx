import Link from "next/link";
import React from 'react'


interface NavItemProps{
    href:string;
    title:string;
}
const NavItem = ({href, title}:NavItemProps) => {
  return (
    <Link href={href} className='block py-2 pl-3 text-xl text-mycolor-700 hover:text-white/80'>
        {title}
    </Link>
)
}

export default NavItem