import React from "react"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import Chip from "@material-ui/core/Chip"
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import {NavData} from "../constant/NAVS_FRONT"
export interface Props{
	title: string,
	navs: Array<NavData>
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      '& > *': {
				marginRight: theme.spacing(0.5),
				marginBottom: theme.spacing(0.5)
      },
    },
  }),
);

const NavCard=({ title, navs }:Props)=>{
  const classes = useStyles()
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h6" component="h3">
          {title}
        </Typography>
				<Box py={2} className={classes.root}>
					{navs.map((item,idx:number) =><Chip key={idx} variant="outlined" avatar={item.icon} label={item.name}  />)}
				</Box>
      </CardContent>
    </Card>
  )
}

export default NavCard