import React from 'react';

import Header from '../components/Header';
import { Book } from './MainPage';
import Card from '../components/Card';

export type NewBookData = {
  title: React.RefObject<HTMLInputElement>;
  author: React.RefObject<HTMLInputElement>;
  illustrator: React.RefObject<HTMLInputElement>;
  publishing: React.RefObject<HTMLSelectElement>;
  year: React.RefObject<HTMLInputElement>;
  age: React.RefObject<HTMLInputElement>;
  description: React.RefObject<HTMLTextAreaElement>;
  img: React.RefObject<HTMLInputElement>;
};

type FormState = {
  newBookData: NewBookData;
  cardList: Book[];
};

class AddBook extends React.Component {
  state: FormState = {
    newBookData: {
      title: React.createRef(),
      author: React.createRef(),
      illustrator: React.createRef(),
      publishing: React.createRef(),
      year: React.createRef(),
      age: React.createRef(),
      description: React.createRef(),
      img: React.createRef(),
    },
    cardList: [],
  };

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log(this.state.newBookData.publishing.current?.value.substring(0, 4));
    console.log(this.state.newBookData.year.current?.value);
    console.log(this.state.newBookData.img.current?.value);

    const newBook: Book = {
      id: this.state.cardList.length,
      title: this.state.newBookData.title.current?.value || '',
      author: this.state.newBookData.author.current?.value || '',
      illustrator: this.state.newBookData.illustrator.current?.value || '',
      publishing: this.state.newBookData.publishing.current?.value || '',
      year: Number(this.state.newBookData.year.current?.value.substring(0, 4)) || 0,
      age: 2,
      description: '',
      img: this.state.newBookData.img.current?.files![0]
        ? URL.createObjectURL(this.state.newBookData.img.current?.files[0] as Blob)
        : '',
    };

    this.setState({ ...this.state, cardList: [...this.state.cardList, newBook] });

    event.currentTarget.reset();
  }

  render() {
    return (
      <div className="container">
        <Header title="Add a new book" />
        <form className="new-book-form" onSubmit={this.handleSubmit.bind(this)}>
          <label>
            Title:
            <input type="text" ref={this.state.newBookData.title} />
          </label>
          <label>
            Author:
            <input type="text" ref={this.state.newBookData.author} />
          </label>
          <label>
            Illustrator:
            <input type="text" ref={this.state.newBookData.illustrator} />
          </label>
          <label>
            Publishing
            <select defaultValue="" ref={this.state.newBookData.publishing}>
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
            <input type="date" ref={this.state.newBookData.year} />
          </label>
          <label>
            Book photo:
            <input type="file" ref={this.state.newBookData.img} />
          </label>
          <button type="submit">Add</button>
        </form>

        <ul className="card-list">
          {this.state.cardList.map((el) => (
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
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default AddBook;
