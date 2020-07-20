import React from "react"
import Slide from '@material-ui/core/Slide'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'

interface Props {
  children: React.ReactElement
}
  
function HideOnScroll(props: Props) {
    const { children } = props
    const trigger = useScrollTrigger()

    return (
        <Slide appear={false} direction="down" in={!trigger}>
        {children}
        </Slide>
    );
}

export default HideOnScroll