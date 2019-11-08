import React from 'react';
import ReactAdsense from 'react-adsense';

const scriptId = 'adsense-script';

type Props = {};
const Adsense: React.FC<Props> = () => {
  React.useEffect(() => {
    let script = document.getElementById(scriptId);
    if (!script) {
      script = document.createElement('script');
      script.setAttribute('async', '');
      script.id = scriptId;
      script.setAttribute(
        'src',
        'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
      );
      document.head.append(script);
    }
  }, []);

  return <ReactAdsense.Google client="ca-pub-2339446308971759" />;
};

export default Adsense;
