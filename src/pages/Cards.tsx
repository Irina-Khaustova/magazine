import React, { useState } from 'react';
import { useGetUsersQuery } from '../api/MyApi';

function Cards() {

interface UsersTypes {
    page?: Number
    per_page?: Number
    total?: Number
    total_pages?: Number
    data?: []
}

const { data: UsersData, error, isLoading} = useGetUsersQuery(2);

const [cards, setCards] = useState<UsersTypes | null>(null);

const handleChangeValue  = (e: React.ChangeEvent<HTMLInputElement>) => {
  
}

const handlesubmit = (e: React.FormEvent) => {

}

console.log()


  return (
    <div  className="cards">
      <div className='cards__header'> 
        <h2>Наша команда</h2>
        <div className='cards__header__text'></div>
      </div> 
      {cards?.data?.map(elem => (<div className='cards__header__text'></div>))}
      <div className='cards__header__button'></div>
    </div>
  );
}

export default Cards;