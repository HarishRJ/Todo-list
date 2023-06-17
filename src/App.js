import Header from "./Header"
import Content from "./Content"
import Footer from "./Footer"
import { useState } from 'react';
import { Additem } from "./Additem";
import {SearchItem} from "./SearchItem"
function App() {
  const [items,setItems] = useState(JSON.parse(localStorage.getItem('todo_list')));

  const [newItem, setNewItem] = useState('')
  function setNew(e){
    setNewItem(e.target.value)
  }

  const [search,setSearch]= useState('')

  const addItem = (item) => {
    const id=items.length ? items[items.length-1].id + 1:1;
    const addNewItem={id,checked:false,item}
    const listItems=[...items, addNewItem]
    setItems(listItems)
    localStorage.setItem("todo_list",JSON.stringify(listItems))
  }

  const deleteItem = (id)=>{
    const listItems = items.filter((item) =>
    item.id!==id)
    setItems(listItems)
    localStorage.setItem("todo_list",JSON.stringify(listItems))
  }

  const handleCheck =(id) => {
    const listItems = items.map((item) => 
    item.id===id ? {...item,checked:!item.checked} : item)
    setItems(listItems)
    localStorage.setItem("todo_list",JSON.stringify(listItems))
  }
    
 const handleSubmit=(e) => {
  e.preventDefault()
  if(!newItem) return;
  console.log('submitted')
  addItem(newItem)
  setNewItem('')
 }

  return (
    <div className="App">
      <Header /*title="vela list"*//>
      <Additem
      newItem = {newItem}
      setNewItem={setNewItem}
      setNew={setNew}
      handleSubmit={handleSubmit}
      />
      <SearchItem
      search={search}
      setSearch={setSearch}
      />
      <Content
      items = {items.filter(item=>(item.item).toLowerCase().includes(search.toLocaleLowerCase()))}
      setItems={setItems}
      handleCheck={handleCheck}
      deleteItem={deleteItem}
      />
      <Footer
       length = {items.length}
      />
      
    </div>
  );
}

export default App;
