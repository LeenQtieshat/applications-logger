import { Poppins } from '@next/font/google';
import Layout from '../components/Layout';
import '../../styles/globals.scss';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500']
});
function MyApp({ Component, pageProps }) {
  return (
    <div className={`appContainer ${poppins.className}`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
