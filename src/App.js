import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import StarRating from "./components/starRating";
import { useRef, useState, useEffect } from "react";
import "./App.css";
import products from "./products.json";
import GoldPrice from "./components/goldPrice";
function App() {
  // calculating current page width for scroll amount
  const containerRef = useRef(null);
  const [productWidth, setProductWidth] = useState(0);
  useEffect(() => {
    if (containerRef.current && containerRef.current.firstChild) {
      setProductWidth(containerRef.current.firstChild.offsetWidth + 16);
    }
  }, [products]);

  // function for the left button
  const scrollLeft = () => {
    containerRef.current.scrollBy({
      left: -productWidth - 20,
      behavior: "smooth",
    });
  };

  // function for the right button
  const scrollRight = () => {
    containerRef.current.scrollBy({
      left: productWidth + 20,
      behavior: "smooth",
    });
  };
  // setting selected color for color buttons
  const colorOptions = ["yellow", "white", "rose"];
  const [selected, setSelected] = useState({});
  const handleColorChange = (productIndex, color) => {
    setSelected((prev) => ({
      ...prev,
      [productIndex]: color,
    }));
  };

  const goldPrice = GoldPrice();
  return (
    <div className="App">
      {/* the page title field */}
      <div className="title">
        <h1>Product List</h1>
      </div>

      {/* a product container to display products */}
      <div className="products-con" ref={containerRef}>
        {products.map((item, index) => {
          const price = (item.popularityScore + 1) * item.weight * goldPrice; //popularity score + 1 * weight * price of gold in US
          const selectedColor = selected[index] || "yellow";
          const imageSrc = item.images[selectedColor];
          return (
            <div className="products" key={index}>
              <div className="img-Con">
                <img
                  className="img"
                  src={imageSrc}
                  alt={`${item.name} - ${selectedColor}`}
                />
              </div>
              <p className="prdct-name">{item.name}</p>

              <p className="prdct-price">${price.toFixed(2)} USD</p>

              <div className="prdct-color-con">
                {colorOptions.map((color) => (
                  <button
                    key={color}
                    className={`color-btn ${color}`}
                    onClick={() => handleColorChange(index, color)}
                    style={{
                      width: "25px",
                      height: "25px",
                      borderRadius: "50%",
                      backgroundColor: color,
                      border:
                        (selected[index] || "yellow") === color
                          ? "2px solid black"
                          : "1px solid #ccc",
                      cursor: "pointer",
                      margin: "5px",
                    }}
                  />
                ))}
              </div>
              <p className="prdct-color-name">
                {selectedColor.charAt(0).toUpperCase() + selectedColor.slice(1)}{" "}
                Gold
              </p>

              <div className="prdct-rating-con">
                <StarRating rating={item.popularityScore} />
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <button className="prev" onClick={scrollLeft}>
          <SlArrowLeft />
        </button>
        <button className="next" onClick={scrollRight}>
          <SlArrowRight />
        </button>
      </div>
    </div>
  );
}

export default App;
