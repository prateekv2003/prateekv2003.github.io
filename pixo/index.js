import ReactDom from 'react-dom'
import './index.css'
import App from './src/App'


ReactDom.render(<App/>, document.querySelector("#root"));

// For parallax effect on home-hero-bg.
const parallax = document.getElementsByClassName("parallax-effect");

window.addEventListener("scroll", function(){
    let offset = window.scrollY;
    parallax.item(0).style.backgroundPositionY = offset * -0.2 + "px";
})