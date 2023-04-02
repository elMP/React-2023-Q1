import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import Header from '../components/Header';
import { Book } from './MainPage';
import Card from '../components/Card';

function AddBook() {
  const { register, handleSubmit, reset } = useForm();

  const [cardList, addBooktoList] = useState<Book[]>([]);

  const OnSubmit = handleSubmit((data) => {
    const newBook: Book = {
      id: cardList.length,
      title: data.title || '',
      author: data.author || '',
      illustrator: data.illustrator || '',
      publishing: data.publishing || '',
      year: Number(data.year.substring(0, 4)) || 0,
      age: data.age,
      description: '',
      img: data.img[0] ? URL.createObjectURL(data.img[0] as Blob) : '',
      mustRead: data.checkbox,
    };

    addBooktoList((cardList) => [...cardList, newBook]);
    reset();
  });

  return (
    <div className="container">
      <Header title="Add a new book" />
      <form className="new-book-form" onSubmit={OnSubmit}>
        <label>
          Title:
          <input type="text" {...register('title')} />
        </label>
        <label>
          Author:
          <input type="text" {...register('author')} />
        </label>
        <label>
          Illustrator:
          <input type="text" {...register('illustrator')} />
        </label>
        <label>
          Publishing
          <select defaultValue="" {...register('publishing')}>
            <option value="" disabled>
              Select publishing
            </option>
            <option value="Clever-Media">Clever-Media</option>
            <option value="АСТ">АСТ</option>
            <option value="Росмэн">Росмэн</option>
            <option value="Махаон">Махаон</option>
            <option value="Энас-книга">Энас-книга</option>
            <option value="Машинки творения">Машинки творения</option>
          </select>
        </label>
        <label>
          Publishing date:
          <input type="date" {...register('year')} />
        </label>
        <label>
          Book photo:
          <input type="file" {...register('img')} />
        </label>
        <div className="age">
          <p>Age:</p>
          <label>
            <input type="radio" value="1" {...register('age')} />
            1 - 3 <br />
          </label>
          <label>
            <input type="radio" value="3" {...register('age')} />
            3 - 6 <br />
          </label>
          <label>
            <input type="radio" value="6" {...register('age')} />
            6 - 11 <br />
          </label>
          <label>
            <input type="radio" value="12" {...register('age')} />
            12+ <br />
          </label>
        </div>
        <label className="mustread">
          <input type="checkbox" {...register('checkbox')} />
          Must read
          <br />
        </label>
        <button type="submit">Add</button>
      </form>

      <ul className="card-list">
        {cardList.map((el) => (
          <Card
            key={el.id}
            title={el.title}
            author={el.author}
            illustrator={el.illustrator}
            publishing={el.publishing}
            year={el.year}
            age={el.age}
            description={el.description}
            img={el.img}
            mustread={el.mustRead}
          />
        ))}
      </ul>
    </div>
  );
}

export default AddBook;
