import React, { useContext } from 'react'
import { MenuContext } from '../context/MenuContext'


const Category = () => {
const  {categories, menuFilter} = useContext(MenuContext)
  return (
    <div className="btn-container">
        {
            categories.map((item,index)=>{
                return (
                    <button
                    type="button"
                    className='filter-btn'
                    key={index}
                    onClick={()=>menuFilter(item)}
                    >
                        {item}
                    </button>
                )
            })
        }
    </div>
  )
}

export default Category