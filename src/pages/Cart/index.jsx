import React from 'react';
import EmptyCart from '../../components/EmptyCart';
import { useDispatch, useSelector } from 'react-redux';
import s from './Cart.module.scss';
import { setMinusBook, setAddedBook, removeBook, clearCart } from '../../redux/slices/cartSlice';
const Cart = () => {
  const { books, totalCount, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  if (!books.length) {
    return <EmptyCart />;
  }

  return (
    <div>
      <div className={s.top_content}>
        <h2>Корзина</h2>
        <span onClick={() => dispatch(clearCart())}>
          <svg
            className={s.delete_button}
            width="25px"
            height="25px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M18 6L17.1991 18.0129C17.129 19.065 17.0939 19.5911 16.8667 19.99C16.6666 20.3412 16.3648 20.6235 16.0011 20.7998C15.588 21 15.0607 21 14.0062 21H9.99377C8.93927 21 8.41202 21 7.99889 20.7998C7.63517 20.6235 7.33339 20.3412 7.13332 19.99C6.90607 19.5911 6.871 19.065 6.80086 18.0129L6 6M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M14 10V17M10 10V17"
              stroke="rgb(38, 96, 171)"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Очистить корзину
        </span>
      </div>

      <div className={s.cart}>
        <div className={s.books_list}>
          {books.map(({ id, title, image, authors, price, discount, count }, index) => (
            <div className={s.book_block} key={id}>
              <img src={image} alt="book" />
              <div className={s.book_info}>
                <div className={s.main_info}>
                  <h4 className={s.title}>{title}</h4>
                  <h5 className={s.author}>{authors}</h5>
                </div>
                <div className={s.business_info}>
                  <div className={s.counter}>
                    <button
                      className={count === 1 ? `${s.disable}` : ''}
                      onClick={() => dispatch(setMinusBook({ id }))}>
                      -
                    </button>
                    <span>{count}</span>
                    <button onClick={() => dispatch(setAddedBook({ id }))}>+</button>
                  </div>
                  <div className={s.price_info}>
                    {discount > 0 ? (
                      <div className={s.price}>
                        <span>{price - (price / 100) * discount} ₽</span> <strong>{price} ₽</strong>
                      </div>
                    ) : (
                      <div className={s.price}>{price} ₽</div>
                    )}
                  </div>
                </div>
              </div>

              <svg
                className={s.delete_button}
                onClick={() => dispatch(removeBook({ id }))}
                width="25px"
                height="25px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18 6L17.1991 18.0129C17.129 19.065 17.0939 19.5911 16.8667 19.99C16.6666 20.3412 16.3648 20.6235 16.0011 20.7998C15.588 21 15.0607 21 14.0062 21H9.99377C8.93927 21 8.41202 21 7.99889 20.7998C7.63517 20.6235 7.33339 20.3412 7.13332 19.99C6.90607 19.5911 6.871 19.065 6.80086 18.0129L6 6M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M14 10V17M10 10V17"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          ))}
        </div>
        <div className={s.order_registration}>
          <div className={s.info}>
            <p>{totalCount} шт.</p>
            <p>{Math.floor(totalPrice)} ₽</p>
          </div>

          <button className={s.button_add}>перейти к оформлению</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
