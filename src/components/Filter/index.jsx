import React, { useState } from 'react';
import useForm from '../../hooks/useForm';
import { useRouter } from 'next/router';
import styles from './styles.module.scss';
import { filterRecords } from '../Filter/helpers/filtration';

const { formContainer, filterContainer } = styles;

function Filter({ records, filterData }) {
  const router = useRouter();
  const [values, onInputChange] = useForm();

  const onFormSubmit = e => {
    e.preventDefault();
    const filteredData = filterRecords(values, records, router);
    if (filteredData.length) {
      filterData(filteredData);
    } else {
      filterData([]);
    }
  };
  return (
    <div className={filterContainer}>
      <form onSubmit={onFormSubmit} className={formContainer}>
        <div>
          <label>Log ID</label>
          <input type="text" placeholder="e.g. 21984" name="logId" onChange={onInputChange} />
        </div>

        <div>
          <label>Action type</label>
          <select name="actionType" onChange={onInputChange} value={values?.actionType}>
            <option value="" defaultValue hidden></option>
            <option value="">Clear</option>
            {records.map(item => (
              <option key={item?.logId} value={item?.actionType}>
                {item?.actionType}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Application type</label>
          <select name="applicationType" onChange={onInputChange} value={values?.applicationType}>
            <option value="" defaultValue hidden></option>
            <option value="">Clear</option>
            {records
              .filter(item => !!item?.applicationType)
              .map(item => (
                <option key={item?.logId} value={item?.applicationType}>
                  {item?.applicationType}{' '}
                </option>
              ))}
          </select>
        </div>

        <div>
          <label>From Date</label>
          <input
            type="text"
            name="fromDate"
            placeholder="Select date"
            onFocus={e => (e.target.type = 'date')}
            onChange={onInputChange}
          />
        </div>

        <div>
          <label>To Date</label>
          <input
            type="text"
            name="toDate"
            placeholder="Select date"
            onFocus={e => (e.target.type = 'date')}
            onChange={onInputChange}
          />
        </div>

        <div>
          <label>Application ID</label>
          <input
            name="applicationId"
            type="text"
            placeholder="e.g. 219841/2021"
            onChange={onInputChange}
          />
        </div>
      </form>

      <button onClick={onFormSubmit}>Search Logger</button>
    </div>
  );
}

export default Filter;
