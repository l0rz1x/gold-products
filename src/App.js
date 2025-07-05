import { SlArrowRight,SlArrowLeft } from "react-icons/sl";

import { useRef, useState } from 'react';
import './App.css';
import products from './products.json'


function App() {
  const [selected, setSelected] = useState("");
  const containerRef = useRef(null);// ne icin kullanildigini anla
 // font kullanimini ogren cok onemli
  const scrollLeft = () => {
    const width = containerRef.current.offsetWidth;
    containerRef.current.scrollBy({ left: -width * 0.265, behavior: 'smooth' });
  };

  const scrollRight = () => {
    const width = containerRef.current.offsetWidth;
    containerRef.current.scrollBy({ left: width * 0.265 , behavior: 'smooth' });
  };
  return (
    <div className="App">
      {/* the page title field */}
      <div className='title'>
        <h1>Product List</h1>
      </div>
      {/* a product container to displat products */}
      <div className='products-con' ref={containerRef}>
        {products.map((item, index) => {
          const price = (item.popularityScore + 1) * item.weight * 107.294;
        return(
        <div className='products'
        key={index}
        >
        <div className='img-Con'>
        <img className='img' src={item.images.yellow} />
        </div>
        <div className='prdct-title-con'>
          <p className='prdct-Name'>{item.name}</p>
        </div>
        <div className='prdct-price-con'>
          <p className='prdct-price'>{price.toFixed(2)}$
            {/* calculate the prive as they provide */}
            </p> 
        </div>
        <div className='prdct-color-con'>
          <button className="gold color-btn" onClick={() => console.log("gold")}></button>
          <button className="white color-btn" onClick={() => console.log("white")}></button>
          <button className="rose color-btn" onClick={() => console.log("rose")}></button>
          {/* add here a choisable color options */}
        </div>
        <div className='prdct-color-name-con'>
          <p className='prdct-color-name'>yellow gold</p>
        </div>
        <div className='prdct-rating-con'>
          {/* add here a star rating system */}
          {/* find how to do a good rating system */}
        </div>
      
      </div>
      
      )
        })}
          
          
        </div>
        <div>
        <button className='prev' onClick={scrollLeft}>
          <SlArrowLeft />
        </button>
        <button className='next' onClick={scrollRight}>
          <SlArrowRight /> 
        </button>
      </div>
    </div>
  );
};

export default App;
