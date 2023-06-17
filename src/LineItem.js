import React from 'react'
import { FaTrashAlt } from "react-icons/fa";

export const LineItem = ({item,handleCheck,deleteItem}) => {
  return (
    <li className="item" key={item.id}>
            <input
                type= "checkbox"
                onChange={()=>handleCheck(item.id)}
                checked = {item.checked}

            />
            <label 
            style={(item.checked)?
            {textDecoration: 'line-through'}:null} onDoubleClick={()=>handleCheck(item.id)}>{item.item}</label>
            <FaTrashAlt role="button" onClick={() => deleteItem(item.id)} tabindex="0"/>
          </li>
  )
}
export default LineItem
