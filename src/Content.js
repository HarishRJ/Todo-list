import React from 'react'
import ItemsList  from "./ItemsList"

export const Content = ({items,handleCheck,deleteItem}) => {
    
  return (
    <main>
      {(items.length)? (
        <ItemsList
          items = {items}
          handleCheck={handleCheck}
          deleteItem={deleteItem}
        />
        ):(
        <p> Your List is Empty </p>
        )
        }
    </main>
  )
}

export default Content
