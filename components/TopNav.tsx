import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Avatar from '@material-ui/core/Avatar'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Slide from '@material-ui/core/Slide'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import { Tab, Tabs } from "@material-ui/core"

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function TopNav(props: Props) {
  return (
    <>
      <AppBar position="static" color="default" className="shadow-none">
        <Toolbar>
          <IconButton edge="start" className="mr-4"color="inherit" aria-label="menu">
            <img src="https://file.ipadown.com/tophub/assets/images/logo.png" style={{width: "32px",height:"32px"}}/>
          </IconButton>
          <Typography variant="h5" component="h1">
            展展
          </Typography>
          <div className="flex-grow px-10 py-2">
            {/* <TextField id="outlined-basic" label="搜索" fullWidth variant="filled" /> */}
          </div>
          <IconButton className="mr-4">
            <NotificationsIcon />
          </IconButton>
          <Avatar alt="Cindy Baker" src="https://file.ipadown.com/tophub/assets/images/noavatar.png" />
        </Toolbar>
      </AppBar>
    
      <HideOnScroll {...props}>
        <AppBar position="sticky" color="default" className="shadow-none">
          <Tabs
            value={0}
            indicatorColor="primary"
            textColor="primary"
            centered
            style={{backgroundColor: "#f5f5f5"}}
            >
            <Tab label="推荐" />
            <Tab label="艺术" />
            <Tab label="医疗保健" />
          </Tabs>
        </AppBar>
      </HideOnScroll>
    </>
  );
}