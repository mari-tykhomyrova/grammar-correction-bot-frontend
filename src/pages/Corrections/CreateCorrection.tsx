import React, { useState } from 'react';

export const CreateCorrection = () => {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    };
    fetch(`${process.env.REACT_APP_API_URL}corrections`, requestOptions)
      .then(res => res.json())
      .then(
        (result) => console.log('success'),
        (error) => console.log('error'),
      );
  }

  return (
    <div className="correction-card">
      <div className='label'>Enter text you want to check</div>
      <input
        className="input-text"
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <input className="btn-submit" type="submit" value="Submit" onClick={handleSubmit}/>
    </div>
  );
};
