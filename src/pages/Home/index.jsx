import React from 'react';
import Categories from '../../components/Categories';
import BookBlock from '../../components/BookBlock';
import Sort from '../../components/Sort';
import Skeleton from '../../components/BookBlock/Sceleton';
import Slider from '../../components/Slider';
import { fetchBooks } from '../../redux/slices/booksSlice';
import s from './Home.module.scss';
import Pagination from '../../components/UI/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

const Home = () => {
  const { categoryType, sortTypeObj, orderType, searchValue } = useSelector(
    (state) => state.filter,
  );
  const { books, loadingStatus, pageCount } = useSelector((state) => state.book);
  const dispatch = useDispatch();
  const [currentItems, setCurrentItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const getBooks = async () => {
    return dispatch(fetchBooks({ categoryType, sortTypeObj, orderType, searchValue }));
  };

  React.useEffect(() => {
    getBooks();
  }, [categoryType, sortTypeObj, orderType, searchValue, currentPage]);

  React.useEffect(() => {
    const lastBookIndex = currentPage * 10;
    const firstBookIndex = lastBookIndex - 10;
    if (pageCount === 1) {
      setCurrentPage(1);
    }
    setCurrentItems(books.slice(firstBookIndex, lastBookIndex));
    console.log('сработал');
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }, [books]);

  return (
    <div>
      <div className={s.top}>
        <Categories />
        <Sort />
      </div>
      <div className={s.top_content}>
        <h2>Каталог</h2>
      </div>

      <div className={s.content}>
        {loadingStatus === 'error' ? (
          <div className={s.error}>
            <span>\(o_o)/</span>
            <h2>Ошибка подключения</h2>
            <p>
              К сожалению, не удалось установить подключение. Пожалуйста, попробуйте еще раз позже.
            </p>
          </div>
        ) : loadingStatus === 'loading' ? (
          [...Array(10).keys()].map((el) => <Skeleton key={el} />)
        ) : (
          currentItems
            .filter((book) => {
              return book.title.toLowerCase().includes(searchValue.toLowerCase());
            })
            .map((item) => <BookBlock key={item.id} {...item} />)
        )}
      </div>
      {loadingStatus === 'success' && (
        <>
          <div>
            <Pagination
              setCurrentPage={(page) => setCurrentPage(page)}
              currentPage={currentPage}
              pageCount={pageCount}
            />
          </div>
          <div className={s.slider}>
            <div className={s.top_content}>
              <h2>Сейчас со скидкой</h2>
            </div>
            <Slider items={books} />
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
