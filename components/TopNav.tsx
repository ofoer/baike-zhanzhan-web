import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Avatar from '@material-ui/core/Avatar'
import NotificationsIcon from '@material-ui/icons/Notifications'
// import ImportContactsIcon from '@material-ui/icons/ImportContacts'

export default function TopNav() {
  return (
    <>
      <AppBar position="static" color="default" className="shadow-none">
        <Toolbar>
          <IconButton edge="start" className="mr-3"color="inherit" aria-label="menu">
            <img src="/assets/images/bk_yz_logo.svg" style={{width: "42px",height:"42px"}}/>
          </IconButton>
          <Typography variant="h5"  component="h1">
            云展
          </Typography>
          <div className="flex-grow px-10 py-2">
            {/* <TextField id="outlined-basic" label="搜索" fullWidth variant="filled" /> */}
          </div>
          {/* <IconButton className="mr-4" title="职场词典">
            <ImportContactsIcon />
          </IconButton> */}
          {/* <IconButton className="mr-4" title="消息">
            <NotificationsIcon />
          </IconButton>
          <Avatar alt="Cindy Baker" src="https://file.ipadown.com/tophub/assets/images/noavatar.png" /> */}
        </Toolbar>
      </AppBar>
    </>
  );
}