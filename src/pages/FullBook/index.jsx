import axios from 'axios';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import s from './FullBook.module.scss';
import { setAddedBook } from '../../redux/slices/cartSlice';
import { useDispatch } from 'react-redux';

const FullBook = () => {
  const { id } = useParams();
  const [book, setBook] = React.useState([]);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const fetchBook = async () => {
      try {
        const { data } = await axios.get('https://651fcfd4906e276284c38cd5.mockapi.io/items/' + id);
        setBook(data);
      } catch (error) {
        alert(error);
      }
    };
    fetchBook();
  }, []);

  return (
    <div>
      <Link className={s.button_back} to="/">
        <svg
          width="17px"
          height="17px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z"
            fill="white"
          />
        </svg>
        назад
      </Link>
      <div className={s.book_card}>
        <div className={s.book_block}>
          <img src={book.image} alt="book" />
          <div className={s.main_info}>
            <h4 className={s.title}>{book.title}</h4>
            <h5 className={s.author}>{book.authors}</h5>
          </div>
        </div>
        <div className={s.order_registration}>
          <p>Цена:</p>
          <div className={s.price_info}>
            {book.discount > 0 ? (
              <div className={s.price}>
                <span>{book.price - (book.price / 100) * book.discount} ₽</span>{' '}
                <strong>{book.price} ₽</strong>
              </div>
            ) : (
              <div className={s.price}>{book.price} ₽</div>
            )}
          </div>

          <button
            onClick={() =>
              dispatch(
                setAddedBook({
                  id,
                  title: book.title,
                  price: book.price,
                  image: book.image,
                  authors: book.authors,
                  discount: book.discount,
                  discountPrice: book.price - (book.price / 100) * book.discount,
                  count: 0,
                }),
              )
            }
            className={s.button_add}>
            Добавить
          </button>
        </div>
      </div>
    </div>
  );
};

export default FullBook;
