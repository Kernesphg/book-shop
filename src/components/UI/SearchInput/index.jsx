import React, { useCallback } from 'react';
import s from './SearchInput.module.scss';
import { setSearchValue } from '../../../redux/slices/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import debounce from 'lodash.debounce';

const SearchInput = () => {
  const dispatch = useDispatch();

  const [localSearchValue, setLocalSearchValue] = React.useState('');

  const updateSearchValue = useCallback(
    debounce((event) => {
      dispatch(setSearchValue(event));
    }, 500),
    [],
  );

  const onChangeInput = (event) => {
    setLocalSearchValue(event);
    updateSearchValue(event);
  };

  return (
    <div className={s.root}>
      <svg
        className={s.SearchSvg}
        width="800px"
        height="800px"
        viewBox="0 -0.5 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.5 10.7655C5.50003 8.01511 7.44296 5.64777 10.1405 5.1113C12.8381 4.57483 15.539 6.01866 16.5913 8.55977C17.6437 11.1009 16.7544 14.0315 14.4674 15.5593C12.1804 17.0871 9.13257 16.7866 7.188 14.8415C6.10716 13.7604 5.49998 12.2942 5.5 10.7655Z"
          stroke="#000000"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M17.029 16.5295L19.5 19.0005"
          stroke="#000000"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <input
        onChange={(event) => onChangeInput(event.target.value)}
        value={localSearchValue}
        className={s.searchInput}
        type="text"
        placeholder="Поиск..."
      />
    </div>
  );
};

export default SearchInput;
