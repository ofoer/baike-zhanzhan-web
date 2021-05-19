import React from "react"
import Link from '../src/Link'
import { Typography, CardActionArea } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'

const CardEntry:React.FC<any>=({isLoading, item})=>{
  return (
    <div className={`w-full relative rounded-md overflow-hidden`}>
      {isLoading&&<Skeleton  variant="rect"  style={{paddingBottom: "56.38%"}} />}
      {!isLoading&&<div style={{paddingBottom: "56.38%"}} />}
      {!isLoading&&<CardActionArea className="absolute left-0 top-0 w-full h-full" component={Link} href={`/z/${item.id}`}>
        <img src={item.bn} alt={item.title} className="w-full h-full object-cover"/>
        <Typography className="absolute left-0 bottom-0 w-full  p-2 text-white" component="p" variant="button" noWrap>{item.short_name}</Typography>
      </CardActionArea>}
    </div>
    
  )
}

export default CardEntry
