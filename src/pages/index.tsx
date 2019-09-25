import './styles.css';

import React from 'react';
import Link from '../components/atoms/Link';
import Layout from '../components/atoms/Layout';

const MainPage = () => (
  <Layout>
    <div className={'main-page'}>
      <div className={'profile'}>
        <img src="/images/profile.png" alt="profile" />
        <p>OPNay</p>
      </div>
      <Link className={'desc'} href="/Working">
        🧰 현재 공사중입니다...
      </Link>
      <div className={'menu'}>
        <Link href="https://blog.opnay.com">Tistory</Link>
        <Link href="blog">Blog</Link>
        <Link href="https://github.com/opnay">Github</Link>
      </div>
    </div>
  </Layout>
);

export default MainPage;
