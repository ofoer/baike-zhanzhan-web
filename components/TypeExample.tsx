import React from "react"
import { TypeExampleProps } from "../interface/TypeExample"

const TypeExample:React.FC<TypeExampleProps>=({title, actionRight})=>{
  return (
    <div className="type-example">
      <div className="flex items-center justify-between">
        <h2 className="my-0 text-3xl">
          {title}
        </h2>
        <div className="action-right">
          {actionRight}
        </div>
      </div>
    </div>
  )
}
export default TypeExample