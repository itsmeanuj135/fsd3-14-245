import React from 'react'

const products = [
    {title: "Apple", id:1,isFruits:true},
    {title: "Banana", id:2,isFruits:true},
    {title: "Potato", id:3,isFruits:false},
    {title: "Cabbage", id:4,isFruits:false},

];
 const ListItem = products.map((item) => (
    <li key ={item.id} style={{color: item.isFruits ? "red" : "green"}}>

        {item.title}
        </li>
 ));
console.log(ListItem);

const Fruits = () => {
  return  <ul> {ListItem} </ul>;

};
export default Fruits