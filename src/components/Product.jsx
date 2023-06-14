import React, { useState } from "react";
import "./Products.css";
import DATA from '../Data';
import { NavLink } from "react-router-dom";

export default function Product() {
const [data, setData] = useState(DATA);
const filter = (items) => {
const results = DATA.filter((newData) => {
return newData.category === items;
});
setData(results);
};
return (
<>
<h1 className="text-center" style={{ color: "#c4a7aa" }}>
{" "}
Latest Products{" "}
</h1>
<hr />
<div className="container mx-6">
<div className="row justify-content-center">
<div className="col-md-2">
<button
className="btn btn-outline-dark w-50 mb-1"
onClick={() => setData(DATA)}
>
All
</button>
</div>
<div className="col-md-2">
<button
className="btn btn-outline-dark w-50 mb-1"
onClick={() => filter("Chairs")}
>
Chairs
</button>
</div>
<div className="col-md-2">
<button
className="btn btn-outline-dark w-50 mb-1"
onClick={() => filter("Table Lamp")}
>
Lamps
</button>
</div>
<div className="col-md-2">
<button
className="btn btn-outline-dark w-50 mb-1"
onClick={() => filter("Sofas")}
>
Sofas
</button>
</div>
<div className="col-md-2">
<button
className="btn btn-outline-dark w-50 mb-1"
onClick={() => filter("Candles")}
>
Candles
</button>
</div>
</div>
</div>
<div className="col-md-9">
<div className="row">
{data.map((values) => {
const { id, title, price, image } = values;
return (
<>
<div className="col-md-4 mb-4" key={id}>
<div className="card">
<img className="card-img-top" src={image} alt="Card cap" />
<div className="card-body">
<h5 className="card-title">{title}</h5>
<h6>{price}</h6>
<p className="card-text">
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Fusce arcu erat, faucibus eu consequat vel, scelerisque
commodo arcu. Morbi cursus pretium purus, in
pellentesque dui sodales vel.
</p>
<NavLink to={`/products/${values.id}`} class="btn btn-outline-dark">Buy Now</NavLink>
</div>
</div>
</div>
</>
);
})}
</div>
</div>

</>
);
}