import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Product from './Product';



const divStyle = {
display: 'flex',
alignItems: 'center',
justifyContent: 'center',
backgroundSize: 'cover',
height: '400px',
// width:'auto'
}
const slideImages = [
{
url: './assets/images/home/sofas.jpg'

},
{
url:'./assets/images/home/decors.jpg'

},
{
url: './assets/images/home/style.jpg',

},
];

export default function Home() {

return (
<div className="slide-container">
<Slide>
{slideImages.map((slideImage, index)=> (
<div key={index}>
<div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>

</div>
</div>
))}
</Slide>
<Product />
</div>

)


}