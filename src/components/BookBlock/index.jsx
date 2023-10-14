import React from 'react';
import s from './BookBlock.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setAddedBook } from '../../redux/slices/cartSlice';
import { Link } from 'react-router-dom';

const BookBlock = ({ id, title, image, authors, price, discount }) => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart.books.find((item) => item.id === id));
  const addedCount = cartItem ? cartItem.count : '0';
  const onAddBook = () => {
    const discountPrice = price - (price / 100) * discount;
    const addedBook = {
      id,
      title,
      image,
      authors,
      price,
      discount,
      discountPrice,
      count: 0,
    };
    dispatch(setAddedBook(addedBook));
  };

  return (
    <div className={s.book_block}>
      <div className={s.main}>
        <Link to={`/books/${id}`}>
          <img className={s.image} src={image} alt="book" />
          {discount > 0 ? (
            <div className={s.price}>
              <span>{price - (price / 100) * discount} ₽</span> <strong>{price} ₽</strong>
            </div>
          ) : (
            <div className={s.price}>{price} ₽</div>
          )}

          <h4 className={s.title}>{title}</h4>
          <h5 className={s.author}>{authors}</h5>
        </Link>
      </div>

      <div className={s.bottom}>
        <button onClick={onAddBook} className={s.button_add}>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          <i>{addedCount}</i>
        </button>
      </div>
    </div>
  );
};

export default BookBlock;
