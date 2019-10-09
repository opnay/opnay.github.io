import './styles.css';

import React, { useMemo } from 'react';
import Layout from '../../atoms/Layout';
import BlogHeader from '../../organisms/BlogHeader';
import { BlogContextProvider } from '../../../utils/context/BlogContext';

type Props = {
  children?: React.ReactNode;
  className?: string;
};

const BlogLayout: React.FC<Props> = (props) => {
  const { children, className } = props;
  const layoutClass = useMemo(() => ['blog', className].join(' '), [className]);

  return (
    <BlogContextProvider>
      <Layout className={layoutClass}>
        <BlogHeader />
        {children}
      </Layout>
    </BlogContextProvider>
  );
};

export default BlogLayout;
