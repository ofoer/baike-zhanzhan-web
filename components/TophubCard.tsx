import React from 'react'
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import Avatars from './Avatars'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
// import Divider from '@material-ui/core/Divider'
import Paper from '@material-ui/core/Paper'



export interface Props{
  title: string,
  avatar: string,
}

function TophubCard({title, avatar}:Props){

  return (
    <Paper variant="outlined" >
      <Box px={1} pt={0}>
        <Box>
          <Box display="flex" alignItems="center" justifyContent="space-between">
            <Box display="flex" alignItems="center" flexGrow={1}>
              <Box mr={1}>
                <Avatars avatar={avatar} title={title}></Avatars>
              </Box>
              <Typography component="h3" variant="h6">
                {title}
              </Typography>
            </Box>
            <Box>
              <Tabs indicatorColor="primary" textColor="primary" value={0}  variant="fullWidth">
                <Tab label="热搜榜" style={{minWidth: "auto"}} />
              </Tabs>
            </Box>
          </Box>
          {/* <Divider /> */}
        </Box>
      </Box>
      <Box p={1} height="300px">
        Item One
      </Box>
    </Paper>
  )
}
export default TophubCard