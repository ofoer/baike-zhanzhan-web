import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar'

export interface Props{
  title: string,
  avatar: string,
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }),
);

function Avatars({title, avatar}:Props){
  const classes = useStyles()
  return <Avatar className={classes.small}  src={avatar} alt={title} />
  
}
export default Avatars