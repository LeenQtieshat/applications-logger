const formatPath = path => path[0].toUpperCase() + path.replaceAll('-', ' ').slice(1);

const formatLinks = (pathname, index) => {
  const temp = pathname.split('/');

  temp.length = index + 1;

  return !!temp.join('/') ? temp.join('/') : '/';
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  formatPath,
  formatLinks
};
