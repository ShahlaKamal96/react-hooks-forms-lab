import React, { useState } from "react";
import { v4 as uuid } from "uuid";


function ItemForm({ onItemFormSubmit }) {


  const [itemName, setItemName] = useState();
  const [itemCategory, setItemCategory] = useState("Produce");

  function handleNewItemName(e) {
    setItemName(e.target.value)
  }
  function handleNewItemCategory(e) {
    setItemCategory(e.target.value)
  }

  const element = {
    id: uuid(),
    name: itemName,
    category: itemCategory
  }


  return (
    <form className="NewItem" onSubmit={(e) => { e.preventDefault(); onItemFormSubmit(element); }}>
      <label>
        Name:
        <input type="text" name={element.name} onChange={handleNewItemName} />
      </label>

      <label>
        Category:
        <select name={element.category} onChange={handleNewItemCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form >
  );
}

export default ItemForm;
