import React from 'react';
import s from './Sort.module.scss';
import { setSortType, setOrderType } from '../../redux/slices/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
const Sort = () => {
  const sortOptions = [
    { name: 'популярности', sortType: 'rating' },
    { name: 'цене', sortType: 'price' },
    { name: 'алфавиту', sortType: 'title' },
  ];
  const [popapOpened, setPopapOpened] = React.useState(false);
  const dispatch = useDispatch();
  const { sortTypeObj, orderType } = useSelector((state) => state.filter);

  const onClickSort = (option) => {
    dispatch(setSortType(option));
    setPopapOpened(!popapOpened);
  };

  return (
    <div className={s.sort}>
      <div className={s.label}>
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={() => setPopapOpened(!popapOpened)}>{sortTypeObj.name}</span>
        <button onClick={() => dispatch(setOrderType(!orderType))} className={s.order}>
          {orderType ? '↓↑' : '↑↓'}
        </button>
      </div>
      {popapOpened && (
        <div className={s.popup}>
          <ul>
            {sortOptions.map((option) => (
              <li onClick={() => onClickSort(option)} key={option.sortType} value={option.sortType}>
                {option.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
