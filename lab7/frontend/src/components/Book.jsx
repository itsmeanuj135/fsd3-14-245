export default function Book(props){
  console.log(props);
  const{ bname,price,quantity,rating,picUrl } = props.book;
  const qtyStyle = {
    fontSize:"20px",
    color:"blue",
    textAlign:"center",
    backgroundColor:"yellow",
    padding:"10px",
  };

  return (
    <div className="book" >
      <img
      src={picUrl}
      alt={bname}
      />
      <h1>{bname} </h1>
      <h2>Price:{price}</h2>
      <h3 style={qtyStyle}>quantity :{quantity}</h3> 
      <h4 style ={{ color: "red", textAlign: "center" }}>Rating:{rating}</h4>
      <button>BUY NOW</button>
 </div>
  );
}