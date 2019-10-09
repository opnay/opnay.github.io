import './styles.css';

import React, { useEffect } from 'react';

type Props = {};

const useDisqus = (() => {
  if (typeof document !== 'undefined') {
    const script = document.createElement('script');
    const timestamp = new Date().getTime().toString();
    const disqusID = `disqus-${timestamp}`;

    return () => {
      useEffect(() => {
        if (!document.getElementById(disqusID)) {
          script.id = disqusID;
          script.src = 'https://opnay.disqus.com/embed.js';
          script.setAttribute('data-timestamp', timestamp);
          document.head.appendChild(script);
        } else {
          window['DISQUS'].reset({ reload: true });
        }
      }, []);
    };
  } else {
    return () => {
      useEffect(() => {
        console.error(`There's no document`);
      }, []);
    };
  }
})();

const Disqus: React.FC<Props> = () => {
  useDisqus();

  return <div id="disqus_thread" />;
};

export default Disqus;
