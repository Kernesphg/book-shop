import React from 'react';
import s from './Categories.module.scss';
import { setCategoryType } from '../../redux/slices/filterSlice';
import { useDispatch, useSelector } from 'react-redux';

const Categories = () => {
  const categories = ['Все', 'Фэнтези', 'Детектив', 'Фантастика', 'Драмма'];
  const dispatch = useDispatch();
  const { categoryType } = useSelector((state) => state.filter);

  const onClickCategory = (category) => {
    dispatch(setCategoryType(category));
    console.log(category);
  };

  return (
    <div className={s.categories}>
      <ul>
        {categories.map((category) => (
          <li
            className={categoryType === category ? `${s.active}` : ''}
            onClick={() => onClickCategory(category)}
            key={category}
            value={category}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
