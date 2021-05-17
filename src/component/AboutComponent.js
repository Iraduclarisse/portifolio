import react from 'react';
import './index.css';
import clarisse from "../assets/imagess/clarisse.jpg";

const AboutComponent =()=>{
    return(
<div className="about-container">
    <div className="about">About</div>
    <div class="row">
  <div class="column">{<img src={clarisse}  
    alt="about-image" className="about-image"/>}</div>
  <div class="column">I am IRADUKUNDA Clarisse; i studied computer science in 
secondary school where I studied how to design an interactive website by 
using html and css, and also i learnt how to develop backend/serverside script
<dl>
  <dt>birth day</dt>
  <dd>25/05/700</dd>
  <dt>phone</dt>
  <dd>+250781256712/+250726560274</dd>
  <dt>email</dt>
  <dd>iraduclarisse51@gmail.com/iraduclarisse70@yahoo.com</dd>

  <dt>City</dt>
  <dd>Kigali/Rwanda</dd>
</dl>  
</div>
</div>


<div className="fact">Fact</div>
</div>

    )}
    export default AboutComponent; 
