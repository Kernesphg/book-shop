import React from 'react';
import SliderButtons from './SliderButtons';
import BookBlock from '../../components/BookBlock';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/a11y';
import { useDispatch, useSelector } from 'react-redux';

const Slider = ({ items }) => {
  const { sliderBooks } = useSelector((state) => state.book);
  const [] = React.useState();
  const windowInnerWidth = window.innerWidth;
  console.log(windowInnerWidth);
  return (
    <>
      <Swiper
        modules={[Navigation, A11y, Pagination]}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: false }}
        spaceBetween={10}
        slidesPerView={5}>
        {sliderBooks
          .filter((item) => item.discount != 0)
          .map((item) => (
            <SwiperSlide>
              {' '}
              <BookBlock key={item.title} {...item} />
            </SwiperSlide>
          ))}

        {/* <SliderButtons /> */}
      </Swiper>
    </>
  );
};

export default Slider;
