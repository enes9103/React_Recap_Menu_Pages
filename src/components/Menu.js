import React, { useContext } from 'react'
import { MenuContext } from '../context/MenuContext'

const Menu = () => {
  const {menu} = useContext(MenuContext)
  return (
    <div className="section-center">
      {
        menu.map((menuItem,index)=>{
          const {title,url,name,price,category} = menuItem
          return (
            <article key={index} className='menu-item'>
                <img src={url} alt={title} className='photo' />
                <div className='item-info'>
                  <header>
                    <h4>{name}</h4>
                    <h4 className='price'>${price}</h4>
                  </header>
                  <small>{category.toUpperCase()}</small>          
                  <p className='item-text'>{title}</p>
                </div>
              </article>
          )
        })
      }
    </div>
  )
}

export default Menu