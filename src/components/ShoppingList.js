import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchProduct, setSearchProduct] = useState("");
  const [newArray, setNewArray] = useState(items);
  console.log(newArray)
  function handleCategoryChange(event) {
    setSearchProduct("")
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(e) {
    setSearchProduct(e.target.value)

  }

  function addElement(element) {
    setNewArray([...newArray, element])
  }

  const itemsToDisplay = newArray.filter((item) => {
    if (!searchProduct.length) {
      if (selectedCategory === "All") { return true; }

      else {
        return item.category === selectedCategory;
      }
    }
    else {

      return (item.name).toLowerCase().includes(searchProduct.toLowerCase())

    }

  });
  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={addElement} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} search={searchProduct} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
