import { useState } from 'react';

export default function SyncInput() {

  const [text, setText] = useState('');

  const handleOnChange = (event) =>{
    setText(event.target.value)
  }

  return (
    <div style={{flexDirection: 'column'}}>
      <Input label="First input" text={text} saveChange={handleOnChange}/>
      <Input label="Second input" text={text} saveChange={handleOnChange}/>
    </div>
  );
}

const Input = ({ label, text, saveChange }) => {
  

  return (
    <div style={{margin: '5px'}}>
        <label style={{flexGrow: 1}}>{label}</label>
        <input
            value={text}
            onChange={(event) => saveChange(event)}
        />
    </div>
  );
}

