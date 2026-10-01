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
  const{ bname,price,quantity,rating,picUrl } = props.book;
  return (
    <div className="book" >
      <img
      src={picUrl}
      alt={bname}
      />
      <h1>{bname} </h1>
      <h2>Price:{price}</h2>
      <h3>quantity :{quantity}</h3>
      <h4>Rating:{rating}</h4>
      <button>BUY NOW</button>
 </div>
  );
}
export default function App() {
  return (
    <>
  
  <h1>Online Book Store</h1>;
  <div className="container">
  <Book book={b1} />
  <Book book={b2} />
  <Book book = {b1} />
  <Book book = {b2} />
  </div>
  </>

  );
}
