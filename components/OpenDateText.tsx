import React from 'react'
import { Button, Grid } from '@material-ui/core'
import AccessTimeIcon from '@material-ui/icons/AccessTime'

const OpenDateText = (props:any) =>{
  const { items } = props
  return (
    <Grid container>
      {
        items.map((item:any) => {
          return (
            <Grid xs={6} md={3}>
              <Button
                startIcon={<AccessTimeIcon />}
              >
                {item}
              </Button>
            </Grid>
          )
        })
      }
      
    </Grid>
  )
}
export default OpenDateText