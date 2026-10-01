import Book from "./components/Book";

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
