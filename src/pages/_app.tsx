/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-props-no-spreading */

import { AppProps } from 'next/app';
import { wrapper } from '../lib/store'; // Ensure you have the correct path

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(MyApp);
