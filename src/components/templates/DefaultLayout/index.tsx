import React, { Fragment } from 'react';
import SEO, { SEOProps } from '../../atoms/SEO';

type Props = SEOProps & {
  children?: React.ReactNode;
};

const DefaultLayout: React.FC<Props> = (props) => {
  const { children, ...seoProps } = props;
  return (
    <Fragment>
      <SEO {...seoProps} />
      {children}
    </Fragment>
  );
};

export default DefaultLayout;
