import React from "react"

export default function ShopColloectionsWrapper(props) {
  return (
    <div>
      <h1>{props.item.title}</h1>
      <h1>{props.item.id}</h1>
      <div>
        {props.item.items
          .filter((item, x) => x < 6)
          .map(item => (
            <h1 key={item.id}>{item.name}</h1>
          ))}
      </div>
    </div>
  )
}
