import React from "react"
import { Grid } from "@material-ui/core"
import { Skeleton } from '@material-ui/lab'
import { TopBannerProps, TopBannerItemProps } from "../interface/TopBanner"

const TopBanner:React.FC<TopBannerProps>=({ items, isLoading }) =>{
  return (
    <Grid container spacing={2} className="my-4">
      <Grid item xs={12} sm={12} md={5}>
        {isLoading&&<Skeleton variant="rect" style={{paddingBottom: "52.9%"}} />}
      </Grid>
      <Grid container xs={12} sm={12} item md={7} spacing={2}>
        {
          isLoading
            ? [0,1,2,3,4,5].map((it:number)=><Grid item key={it} xs={6} sm={6} md={4}><Skeleton variant="rect"  style={{paddingBottom: "56.38%"}} /></Grid>)
            : items.map((ite: TopBannerItemProps,idx:number)=> <Grid item key={idx} md={4}>asa{ite}</Grid>)
        }
      </Grid>
    </Grid>
  )
}

export default TopBanner