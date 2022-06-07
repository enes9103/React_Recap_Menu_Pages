import { useState } from "react";
import { createContext } from "react";
import items from "../data/data"

export const MenuContext = createContext();                                                                 //Create context

const MenuContextProvider = (props) => {
    const allCategories = ["all"]                                                                          //all manü data içerisinde olmadığı için kendimiz oluşturduk. Altta mapte data içindeki categorileri buraya pushladık.
    items.map(item=>allCategories.indexOf(item.category)=== -1 ?allCategories.push(item.category):null)       // datada categoriler birden çok olduğu için sadece her meniden birer tane alması için yazdık. 
    // const uniqueCategories = [...new Set(items.map(item => item.category))]
    const [categories, setCategories] = useState(allCategories)
    const [menu, setMenu] = useState(items)

    const menuFilter = (param) => {
        if (param === "all") {
            setMenu(items)
        } else {
            setMenu(items.filter(item => item.category === param))
        }
    }
    return (
        <MenuContext.Provider value={{ menu, menuFilter, categories }}>
            {props.children}
        </MenuContext.Provider>
    )
}

export default MenuContextProvider;