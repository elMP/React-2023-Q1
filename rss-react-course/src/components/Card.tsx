import React from 'react';

import './Card.css';

export type CardProps = { title: string, author: string, illustrator: string, publishing: string, year: number, age: number, description: string, img: string };

class Card extends React.Component<CardProps> {

  render() {
    return (
      <li className='card-list__item'>
        <h3 className='card-list_title'>{this.props.title}</h3>
        <img className='card-list__image' src={this.props.img} alt="" />
        <div>Автор: {this.props.author}</div>
        <div>Художник: {this.props.illustrator}</div>
        <div>Издательство: {this.props.publishing}</div>
        <div>Год издания: {this.props.year}</div>
        <div>Возраст: {this.props.age}+</div>
        <div>Описание: {this.props.description}</div>
      </li>
    )
  }
}

export default Card;
