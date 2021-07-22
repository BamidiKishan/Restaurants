import React, { useState } from "react";
import "./style.css";
import Menu from './menuApi.jsx';
import MenuCard from "./ManuCard";
import Navbar from "./Navbar";

const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
]

console.log(uniqueList);

const Resturant = () => {
    const [menuData, setmenuData] = useState(Menu);

    const filterItem = (category) => {
      const updateList = Menu.filter((curElem) => {
        return curElem.category === category;
      });

      setmenuData(updateList);
    }

    return (
      <>
      <Navbar filterItem = {filterItem}/>
      <MenuCard menuData={menuData}/>
      {/* <img src="" alt="" /> */}
      </>
    );
  }
  export default Resturant;
  