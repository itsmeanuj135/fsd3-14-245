import React from 'react'

const products = [
    {title: "Apple", id:1,isFruits:false},
    {title: "Banana", id:2,isFruits:false},
    {title: "Mango", id:3,isFruits:false},
    {title: "Carrot", id:4,isFruits:true},

];
 const ListItem = products.map((item) => (
    <li key ={item.id} className="fruits">{item.title}</li>
 ));
console.log(ListItem);

const Fruits = () => {
  return  <ul> {ListItem} </ul>;

};
export default Fruits