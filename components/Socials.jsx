'use client'
import{RiYoutubeFill,RiLinkedinFill, RiGithubFill, RiFacebookBoxFill, RiInstagramFill, RiFacebookFill} from 'react-icons/ri'

import Link from 'next/link'

const icons = [
  {
    path: 'https://www.linkedin.com/in/raymond-king-setia-23680425b/',
    name: <RiLinkedinFill/>
  },
  {
    path: 'https://github.com/raymondkings',
    name: <RiGithubFill/>
  },
  {
    path: 'https://www.instagram.com/raymondkings_',
    name: <RiInstagramFill/>
  }
]

const Socials = ({containerStyles, iconStyles}) => {
  return <div className={`${containerStyles}`}>
    {icons.map((icon, index) => {
      return <Link href={icon.path} key={index}>
        <div className={`${iconStyles}`}>{icon.name}</div>
      </Link>
    })}
  </div>
  
}

export default Socials