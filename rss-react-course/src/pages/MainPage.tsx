import React from 'react';

import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Card from '../components/Card';

type Book = { id: number, title: string, author: string, illustrator: string, publishing: string, year: number, age: number, description: string, img: string };
const bookList: Book[] = [
  {
    id: 1, title: 'Яблочки-пятки', author: 'Орлова А.', illustrator: 'Колосова К.', publishing: 'Детское время', year: 2017, age: 0, description: 'стихи для самых маленьких', img: 'assets/b1.jpg'
  },
  {
    id: 2, title: 'Чик и Брики', author: 'Шеффлер А.', illustrator: 'Шеффлер А.', publishing: 'Clever', year: 2018, age: 1, description: 'маленькие истории от чистого сердца', img: 'assets/b2.jpg'
  },
  {
    id: 3, title: 'Хочу к маме', author: 'Дональдсон Д.', illustrator: 'Шеффлер А.', publishing: 'Машины творения', year: 2009, age: 1, description: 'мама потерялась', img: 'assets/b3.jpg'
  },
  {
    id: 4, title: 'Груффало', author: 'Дональдсон Д.', illustrator: 'Шеффлер А.', publishing: 'Машины творения', year: 2007, age: 0, description: 'очень интересная история', img: 'assets/b4.jpg'
  },
  {
    id: 5, title: 'Волшебник изумрудного города', author: 'Волков А.', illustrator: 'Владимирский', publishing: 'АСТ', year: 2020, age: 6, description: 'путешествие по дороге из желтого кирпича', img: 'assets/b5.jpg'
  },
  {
    id: 6, title: 'Доктор Айболит', author: 'Чуковский К.', illustrator: 'Чижиков В.', publishing: 'Лабиринт-пресс', year: 2011, age: 4, description: 'путешествие доброго доктора', img: 'assets/b6.jpg'
  },
  {
    id: 7, title: 'Сказки в картинках', author: 'Сутеев В.', illustrator: 'Сутеев В.', publishing: 'АСТ', year: 2018, age: 2, description: 'короткие истории в картинках', img: 'assets/b7.jpg'
  }
];

class MainPage extends React.Component {
  render() {
    return (
      <div className="container">
        <Header title="Children books list" />
        <main className='page-main'>
          <>
            <SearchBar />
            <ul className='card-list'>
              {
                bookList.map(el =>
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
                )
              }
            </ul>
          </>
        </main>

      </div>
    )
  }
}

export default MainPage;
