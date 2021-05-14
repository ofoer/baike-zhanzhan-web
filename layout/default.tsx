import React from 'react'
import TopNav from "../components/TopNav"
const LayoutDefault:React.FC<any> = (props) =>{
  return (
    <>
      <TopNav />
      {props.children}
    </>
  )
}
export default LayoutDefault