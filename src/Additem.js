import React from 'react'
import { FaPlus } from 'react-icons/fa'

export const Additem = ({newItem,setNewItem,setNew,handleSubmit}) => {
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor='addItem'> Add Item</label>
        <input
           autoFocus
           id='addItem'
           type="text"
           placeholder='Add Item'
           required
           value={newItem}    
           onChange={setNew}
        />
        <button
           type = 'submit'
           aria-label = 'Add Item'
        >
            <FaPlus/>
        </button>
    </form>
  )
}
export default Additem
