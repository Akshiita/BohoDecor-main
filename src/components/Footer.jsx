import React from 'react';
import './footer.css';
import { NavLink } from 'react-router-dom';

function Footer() {
return (
<div className="footer">
<div className="quick-links">
<ul>
<li><NavLink to="/">Home</NavLink></li>
<li><NavLink to="/about">About</NavLink></li>
<li><NavLink to="/products">Product</NavLink></li>
<li><NavLink to="/contact">Contact Us</NavLink></li>

</ul>
</div>
<div className="social-links">
<ul>
<li><a href="/"><i className="fa fa-facebook"></i></a></li>
<li><a href="/"><i className="fa fa-twitter"></i></a></li>
<li><a href="/"><i className="fa fa-instagram"></i></a></li>
<li><a href="/"><i className="fa fa-linkedin"></i></a></li>
</ul>
</div>
<div className="copy-right">
<p>Made By Akshita </p>
</div>
</div>
);
}

export default Footer;