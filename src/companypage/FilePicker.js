import React, { useRef, useState } from "react";
import './createpage.css'


const FilePicker = () => {
  const fileInputRef = useRef(null); 
  const [selectedImage, setSelectedImage] = useState(null); 
  const [error, setError] = useState(false);

  const handleDivClick = () => {
    fileInputRef.current.click(); 
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    
    if (file.size > 10000000) {
      setError(true);
      setSelectedImage(null);
    } else {
      setError(false);
      setSelectedImage(file);
    }
  };

  return (
    <div>
      <div className="loadimg"
        onClick={handleDivClick}
        
      >
        {selectedImage ? (
          <img
          className="downimg"
            src={URL.createObjectURL(selectedImage)}
            alt="Выбранное изображение"
           
          />
        ) : (
          "+"
        )}
      </div>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: "none" }} 
      />
      {error && <div className="error2">Загруженный файл весит больше 10 мб</div>}
    </div>
  );
};

export default FilePicker;
