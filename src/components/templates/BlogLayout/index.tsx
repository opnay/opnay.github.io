import './styles.css';

import React, { useMemo } from 'react';
import Layout from '../../atoms/Layout';
import BlogHeader from '../../organisms/BlogHeader';
import { BlogContextProvider } from '../../../utils/context/BlogContext';
import DefaultLayout from '../DefaultLayout';
import { SEOProps } from '../../atoms/SEO';

type Props = SEOProps & {
  children?: React.ReactNode;
  className?: string;
};

const BlogLayout: React.FC<Props> = (props) => {
  const { children, className, ...seoProps } = props;
  const layoutClass = useMemo(() => ['blog', className].join(' '), [className]);

  return (
    <DefaultLayout {...seoProps}>
      <BlogContextProvider>
        <Layout className={layoutClass}>
          <BlogHeader />
          {children}
        </Layout>
      </BlogContextProvider>
    </DefaultLayout>
  );
};

export default BlogLayout;
