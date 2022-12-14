import React, { useEffect, useState } from 'react';
import LoggerTable from '../LoggerTable';
import Filter from '../Filter';
import { useRouter } from 'next/router';

import { filterRecords } from '../Filter/helpers/filtration';

const TABLES_COLUMNS = [
  'Log ID',
  'Application Type',
  'Application ID',
  'Action',
  'Action Details',
  'Data:Time'
];

const LoggerSearch = ({ logData }) => {
  const [filteredData, setFilteredData] = useState([]);
  const router = useRouter();
  const { asPath } = router;
  const searchObject = {};

  useEffect(() => {
    if (asPath.includes('?')) {
      const params = asPath.slice(asPath.indexOf('?') + 1).split('&');
      for (const query of params) {
        const [key, value] = query.split('=');
        searchObject[key] = value;
      }
      if (Object.keys(searchObject).length) {
        const filteredData = filterRecords(searchObject, logData, router);
        if (filteredData.length) {
          filterData(filteredData);
        }
      } else {
        filterData(filteredData);
      }
    } else {
      filterData([...logData]);
    }
  }, [logData]);

  const filterData = data => {
    setFilteredData(data);
  };

  return (
    <div>
      <Filter records={logData} filterData={filterData} />
      <LoggerTable records={filteredData} tableHeaders={TABLES_COLUMNS} />
    </div>
  );
};

export default LoggerSearch;
