import LoggerSearch from '../../../components/LoggerSearch';
import styles from './styles.module.scss';

const { loggerPageContainer } = styles;

const LoggerSearchPage = ({ logData }) => {
  return (
    <div className={loggerPageContainer}>
      <LoggerSearch logData={logData} />
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch('https://run.mocky.io/v3/a2fbc23e-069e-4ba5-954c-cd910986f40f');
  const data = await res.json();
  const {
    result: { auditLog }
  } = data;

  return { props: { logData: auditLog } };
}
export default LoggerSearchPage;
