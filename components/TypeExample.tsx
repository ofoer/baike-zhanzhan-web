import React from "react"
import CardEntry from "../components/CardEntry"
import { TypeExampleProps } from "../interface/TypeExample"
import { EntryProps } from "../interface/CardEntry"

const TypeExample:React.FC<TypeExampleProps>=({title, actionRight, items, isLoading})=>{
  return (
    <div className="type-example">
      <div className="flex items-center justify-between mb-2">
        <h2 className="my-0 text-3xl">
          <b className="w-1 h-5 mr-2 bg-primary inline-block align-middle rounded"></b>
          <span className="align-middle">{title}</span>
        </h2>
        <div className="action-right">
          {actionRight}
        </div>
      </div>
      <ul className="md:flex flex-wrap md:flex-no-wrap card-entries list-none pl-0">
        {items.map((it:EntryProps,idx:number)=><CardEntry  item={it} key={idx} className="md:w-1/5 mb-4 md:nb-0 md:mr-4" isLoading={isLoading} />)}
      </ul>
    </div>
  )
}
export default TypeExample