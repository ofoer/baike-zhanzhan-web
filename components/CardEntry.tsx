import React from "react"
import Link from '../src/Link'
import { Typography, CardActionArea } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'
import { CardEntryProps } from "../interface/CardEntry"

const CardEntry:React.FC<CardEntryProps>=({isLoading, className, item})=>{
  return (
    <li className={`${className} relative rounded overflow-hidden`}>
      {isLoading&&<Skeleton  variant="rect"  style={{paddingBottom: "56.38%"}} />}
      {!isLoading&&<div style={{paddingBottom: "56.38%"}} />}
      {!isLoading&&<CardActionArea className="absolute left-0 top-0 w-full h-full" component={Link} href={`/v?vid=${item.title}&industry=`}>
        <img src={item.bn} alt={item.title} className="w-full h-full object-cover"/>
        <Typography className="absolute left-0 bottom-0 w-full  p-2 text-white" component="p" variant="button" noWrap>{item.title}</Typography>
      </CardActionArea>}
    </li>
    
  )
}

export default CardEntry