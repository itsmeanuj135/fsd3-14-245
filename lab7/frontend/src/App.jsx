const b1 = {
  picUrl:"https://m.media-amazon.com/images/I/81t9cbIICUL._AC_UY327_FMwebp_QL65_.jpg",
  bname:"Design Pattern React",
  price:1190,
  quantity:10,
  rating:5.0,
};
const b2 = {
  picUrl:"https://m.media-amazon.com/images/I/71q9PRyBQuL._AC_UY327_FMwebp_QL65_.jpg",
  bname:"Modern Full Stack",
  price:2999,
  quantity:10,
  rating:4.8,
};
function Book(props){
  console.log(props);
  return (
    <div>
      <img
      src={props.book.picUrl}
      alt={props.book.bname}
      />
      <h1>{props.book.bname} </h1>
      <h2>Price:{props.book.price}</h2>
      <h3>quantity :{props.book.quantity}</h3>
      <h4>Rating:{props.book.rating}</h4>
 </div>
  );
}
export default function App() {
  return (
    <>
  <Book book={b1} />
  <h1>Anuj Pratap Singh</h1>;
  <Book book={b2} />
  <Book book = {b1} />
  <Book book = {b2} />
  </>

  );
}
