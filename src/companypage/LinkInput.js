import React, { useState } from "react";
import './createpage.css'

function LinkInput() {
  const [link, setLink] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    const inputLink = event.target.value;
    const urlRegex = /^www\.[^\s]+\.[a-z]{2,3}$/i;
    setError(!urlRegex.test(inputLink));
    setError(!urlRegex.test(inputLink) && inputLink !== '');
    setLink(inputLink);
  };

  return (
    <div >
      <input type="text" onChange={handleChange} value={link} placeholder="Ссылка на ресурс"/>
      {error && <div className="error"
  
>
  Ссылка некорректна
</div>
}
    </div>
  );
}

export default LinkInput;
