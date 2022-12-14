import React, { memo } from 'react';
import styles from './styles.module.scss';
import PaginationRounded from '../PaginationRounded';

const { pagination } = styles;

const Pagination = ({ setPage, paginationClassName, itemsLength, defaultPage }) => {
  return (
    <nav>
      <ul className={`${pagination} ${paginationClassName}`}>
        <PaginationRounded count={itemsLength} setPage={setPage} defaultPage={defaultPage} />
      </ul>
    </nav>
  );
};

export default memo(Pagination);
