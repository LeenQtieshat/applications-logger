import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.scss';
import usePagination from '../../hooks/usePagination';
import { useEffect, useState } from 'react';
import Pagination from '../Pagination';

const { table, arrowContainer, tablePagination, nullField } = styles;

const LoggerTable = ({ records, tableHeaders }) => {
  const [selectedRecords, setSelectedRecords] = useState([]);
  const [currentLogs, setPage, itemsPerPage] = usePagination({
    items: selectedRecords,
    pageNumber: 1,
    itemsPerPageValue: 10
  });

  useEffect(() => {
    setSelectedRecords([...records]);
  }, [records]);

  const renderHeaders = () =>
    tableHeaders.map(header => {
      return (
        <th key={header}>
          {header}
          <span className={arrowContainer}>
            <FontAwesomeIcon icon={faArrowUp} size="sm" />
          </span>
        </th>
      );
    });

  const emptyFiled = <span className={nullField}>-/-</span>;

  const renderBody = () =>
    currentLogs.map((datum, idx) => {
      return (
        <tr key={idx}>
          <td data-label="Log ID">{datum?.logId || emptyFiled}</td>
          <td data-label="Application Type">{datum?.applicationType || emptyFiled}</td>
          <td data-label="Application ID">{datum?.applicationId || emptyFiled}</td>
          <td data-label="Action">{datum?.actionType || emptyFiled}</td>
          <td data-label="Action Details">{datum?.logInfo || emptyFiled}</td>
          <td data-label="Data:Time">{datum?.creationTimestamp || emptyFiled}</td>
        </tr>
      );
    });
  return (
    <>
      <table className={table}>
        <thead>
          <tr>{renderHeaders()}</tr>
        </thead>
        <tbody>{renderBody()}</tbody>
      </table>
      <div className={tablePagination}>
        <Pagination
          itemsPerPage={itemsPerPage}
          itemsLength={Math.ceil(selectedRecords.length / 10)}
          setPage={setPage}
          defaultPage={1}
        />
      </div>
    </>
  );
};

export default LoggerTable;
