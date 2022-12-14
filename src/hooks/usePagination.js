import { useState, useCallback } from 'react';

function usePagination({ items, pageNumber, itemsPerPageValue }) {
  const [currentPage, setCurrentPage] = useState(pageNumber || 1);
  const [itemsPerPage, setItemsPerPage] = useState(itemsPerPageValue || 2);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const setPage = useCallback(pageNumber => setCurrentPage(pageNumber), []);
  return [currentItems, setPage, itemsPerPage];
}

export default usePagination;
