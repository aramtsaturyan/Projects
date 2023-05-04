import React, { useState } from "react";
import './createpage.css'


const Range = () => {
  const [rangeValue, setRangeValue] = useState(0); 
  const [textValue, setTextValue] = useState(0); 

  const handleRangeChange = (event) => {
    
    const newValue = parseInt(event.target.value);
    
    setRangeValue(newValue);
    
    setTextValue((newValue * 100));
  };

  const handleTextChange = (event) => {
    setTextValue(event.target.value);
  };

  return (
    <div className="calcState">
      <div>
      <input
        type="text"
        value={textValue}
        onChange={handleTextChange}
      />
      <input
        type="range"
        value={rangeValue}
        onChange={handleRangeChange} 
      />
      </div>
      
      <div>
      <p className="price">{textValue * 3}</p>
      </div>
      
      
    </div>
  );
};

export default Range;
