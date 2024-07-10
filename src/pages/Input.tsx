//import React, { useState } from 'react';

type PropsType = {
    nameInput: string
    typeInput: string
    inputClass: string
    value: string
    onChangeValue: (e: React.ChangeEvent<HTMLInputElement>) => void
}



function Input({nameInput, typeInput, onChangeValue, inputClass, value} : PropsType) {

//const [value, setValue] = useState('')

  return (
    <input type={typeInput} name={nameInput} className={inputClass} onChange={onChangeValue} value={value}>
    </input>
  );
}

export default Input;