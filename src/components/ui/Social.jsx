import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from 'react-icons/fa'

const socials = [
    {icon: <FaGithub/>, path:''},
    {icon: <FaLinkedinIn/>, path:''},
    {icon: <FaYoutube/>, path:''},
    {icon: <FaTwitter/>, path:''}
]

const Social = ({containerStyles, iconStyles}) => {
    return (
        <div className={containerStyles}>
            {socials.map((items, index)=>{
                return <Link
                key={index}
                href={items.path}
                className={iconStyles}
                >{items.icon}
                </Link>
            })}
        </div>
    )
}

export default Social