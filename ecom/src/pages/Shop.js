import React, { useState } from "react"
import ShopColloectionsWrapper from "../components/ShopColloectionsWrapper"
import SHOP_DATA from "../data/shopData"

export default function Shop() {
  const [shopData, setshopData] = useState(SHOP_DATA)
  return (
    <div>
      <h1>Shop</h1>
      {shopData.map(item => (
        <ShopColloectionsWrapper key={item.id} item={item} />
      ))}
    </div>
  )
}
