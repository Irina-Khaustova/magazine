import React, { useState } from 'react';
import Input from './Input';

function Form() {

const [valueSet, setValueSet] = useState({valueName: '', valueEmail: '', valuePassword: '', valueRepeatPassword: ''});

const handleChangeValue  = (e: React.ChangeEvent<HTMLInputElement>) => {
  console.log(e.currentTarget)
  const {name, value} = e.currentTarget
  setValueSet((prev) => ({...prev, [name]: value}))
  console.log(125, e.currentTarget.value, valueSet)
}

const handlesubmit = (e: React.FormEvent) => {

}

console.log(valueSet)


  return (
    <form onSubmit={handlesubmit} className="form">
      <Input typeInput='text' nameInput='valueName' inputClass='' onChangeValue={handleChangeValue} value={valueSet.valueName}></Input> 
      <Input typeInput='email' nameInput='valueEmail' inputClass='' onChangeValue={handleChangeValue} value={valueSet.valueEmail}></Input>  
      <Input typeInput='text' nameInput='valuePassword' inputClass='' onChangeValue={handleChangeValue} value={valueSet.valuePassword}></Input> 
      <Input typeInput='text' nameInput='valueRepeatPassword' inputClass='' onChangeValue={handleChangeValue} value={valueSet.valueRepeatPassword}></Input>
      <input type='submit'className='form-button' value='Зарегистрироваться'></input>
    </form>
  );
}

export default Form;