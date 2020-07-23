import React from "react"
import { Skeleton } from '@material-ui/lab'
import { TopBannerProps } from "../interface/TopBanner"
import CardEntry from "../components/CardEntry"

const TopBanner:React.FC<TopBannerProps>=({ items, isLoading, rightItems }) =>{
  const fir = rightItems.slice(0,3)
  const sec = rightItems.slice(3,6)
  console.log(items)
  return (
    <div className="md:flex my-4">
      <div className="md:w-2/5 md:mr-4">
        {!isLoading&&<Skeleton variant="rect" style={{paddingBottom: "56.9%"}} />}
      </div>
      <div className="md:w-3/5 hidden md:block">
        <ul className="flex flex card-entries list-none pl-0 my-0 mb-4">
          {fir.map((it,idx)=><CardEntry item={it} key={idx} className="md:w-1/3 mr-4" isLoading={isLoading} />)}
        </ul>
        <ul className="flex flex card-entries list-none pl-0 my-0">
          {sec.map((it,idx)=><CardEntry item={it} key={idx} className="md:w-1/3 mr-4" isLoading={isLoading} />)}
        </ul>
      </div>
    </div>
  )
}

export default TopBanner