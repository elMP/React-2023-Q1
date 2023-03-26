import { CardProps } from 'components/Card';
import React from 'react';

import Header from '../components/Header';

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
  cardList: CardProps[];
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
    console.log(this.state.newBookData.title.current?.value);
    event.preventDefault();
    event.currentTarget.reset();
  }

  render() {
    return (
      <div className="container">
        <Header title="Add a new book" />
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" ref={this.state.newBookData.title} />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default AddBook;
