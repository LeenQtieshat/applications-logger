const filterFieldName = (query, arr, fieldName) => {
  return arr.filter(item => {
    return `${item?.[fieldName]}`.toLowerCase() == `${query}`?.toLowerCase().trim();
  });
};

const dateFiltration = (dateFrom, dateTo = dateFrom, data) => {
  if (!dateTo) dateTo = dateFrom;
  const from = new Date(`${dateFrom}`);
  const to = new Date(`${dateTo}`);
  const formattedFrom = `${from.getFullYear()}-${from.getMonth() + 1}-${from.getDate()}`;
  const formattedTo = `${to.getFullYear()}-${to.getMonth() + 1}-${to.getDate()}`;

  if (from > to) {
    return [];
  }

  const filteredData = data.filter(item => {
    const date = new Date(item.creationTimestamp);
    const formattedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

    return (
      new Date(formattedDate) >= new Date(formattedFrom) &&
      new Date(formattedDate) <= new Date(formattedTo)
    );
  });
  return filteredData;
};

export const filterRecords = (
  { applicationType, actionType, fromDate, toDate, logId, applicationId },
  records,
  router
) => {
  let syncUrl = '/Administration/logger-search?';
  let filteredData = [...records];
  if (fromDate) {
    syncUrl += `fromDate=${fromDate}`;
    if (!toDate) {
      syncUrl += `&toDate=${fromDate}`;
    } else {
      syncUrl += `&toDate=${toDate}`;
    }
    filteredData = dateFiltration(fromDate, toDate, filteredData);
  }

  if (applicationType) {
    syncUrl += `&applicationType=${applicationType}`;
    filteredData = filterFieldName(applicationType, filteredData, 'applicationType');
  }

  if (actionType) {
    syncUrl += `&actionType=${actionType}`;
    filteredData = filterFieldName(actionType, filteredData, 'actionType');
  }

  if (logId) {
    syncUrl += `&logId=${logId}`;
    filteredData = filterFieldName(logId, filteredData, 'logId');
  }

  if (applicationId) {
    syncUrl += `&applicationId=${applicationId}`;
    filteredData = filterFieldName(applicationId, filteredData, 'applicationId');
  }
  router.push(`${syncUrl}`, undefined, { shallow: true });

  return filteredData.length ? filteredData : [];
};
