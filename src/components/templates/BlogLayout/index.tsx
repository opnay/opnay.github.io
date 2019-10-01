import './styles.css';

import React, { useMemo } from 'react';
import Layout from '../../atoms/Layout';
import BlogHeader from '../../organisms/BlogHeader';

type Props = {
  children?: React.ReactNode;
  className?: string;

  title?: string;
};

const BlogLayout: React.FC<Props> = (props) => {
  const { children, className, title } = props;
  const layoutClass = useMemo(() => ['blog', className].join(' '), [className]);

  return (
    <Layout className={layoutClass}>
      <BlogHeader title={title} />
      {children}
    </Layout>
  );
};

export default BlogLayout;
