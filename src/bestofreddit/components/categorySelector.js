import React from "react";
import { useSelector } from "react-redux";
import { categoriesSelector } from "../../Store/categorySlice";

export default function CategorySelector(props){

  const categories=useSelector(categoriesSelector);

  return (
    <div>
      <label htmlFor='category'>Select a community:</label>
      <select name='category' className='custom-select' onChange={props.onChange}>
        {
          Object.values(categories).map(category=>{
            return (
              <option value={category.name} key={category.id}>{category.name}</option>
            )
          })
        }
      </select>
    </div>
  )
}
