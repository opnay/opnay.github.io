import './index.css';

import React from 'react';
import Button from '../components/atoms/Button';

export default () => (
  <div className={'main-page'}>
    <div className={'profile'}>
      <img src="/images/profile.png" alt="profile" />
      <p>OPNay</p>
    </div>
    <Button className={'desc'} href="/Working">
      🧰 현재 공사중입니다...
    </Button>
    <div className={'menu'}>
      <Button href="blog">Blog</Button>
      <Button href="https://github.com/opnay">Github</Button>
    </div>
  </div>
);
