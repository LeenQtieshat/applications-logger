import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationRounded({ count, setPage, defaultPage }) {
  const handleChange = (_, value) => {
    setPage(value);
  };

  return (
    <Stack spacing={3}>
      <Pagination count={count} shape="rounded" defaultPage={defaultPage} onChange={handleChange} />
    </Stack>
  );
}
