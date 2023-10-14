import React from 'react';
import ContentLoader from 'react-content-loader';
import s from './BookBlock.module.scss';

const MyLoader = (props) => (
  <ContentLoader
    className={s.book_block}
    speed={2}
    width={200}
    height={513}
    viewBox="0 0 200 513"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="0" y="0" rx="0" ry="0" width="200" height="300" />
    <rect x="0" y="320" rx="0" ry="0" width="80" height="35" />
    <rect x="0" y="382" rx="0" ry="0" width="200" height="17" />
    <rect x="0" y="405" rx="0" ry="0" width="157" height="12" />
    <rect x="2" y="474" rx="17" ry="17" width="140" height="36" />
  </ContentLoader>
);

export default MyLoader;
