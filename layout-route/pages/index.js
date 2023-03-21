import Component from '../components/Component';
import Head from 'next/head';

const HomePage= () => {
  return(
    <>
      <Head>
        <title>Home | ...</title>
        <meta name='keywords' content='' />
        <meta name='description' content='' />
      </Head>
      <h1> Welcome a to Next.js!</h1>
      
      <Component />
      
    </>
  );
}

export default HomePage