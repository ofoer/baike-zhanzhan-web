import React from "react"
import Link from '../src/Link'
import AppBar from '@material-ui/core/AppBar'
import { Tab, Tabs } from "@material-ui/core"
import HideOnScroll from "./HideOnScroll"
import { TopTab } from "../interface/TopTab"

interface TopTabsProps {
  items: Array<TopTab>
}


const TopTabs:React.FC<TopTabsProps> = ({ items })=>{
    const value = 0
    const handleChange = () =>{
      
    }
    return (  
      <HideOnScroll>
        <AppBar position="sticky" color="default" className="shadow-none">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
            >
              {items?.map((item:TopTab, idx:number)=>(
                  <Tab className="no-underline hover:no-underline" href="/industry/[industry]" as={`/industry/${item.key}`} component={Link} key={idx} label={item.title} />
                )
              )}
              
            </Tabs>
        </AppBar>
      </HideOnScroll>
    )
}
export default TopTabs