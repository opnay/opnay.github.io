import './styles.css';

import React from 'react';
import { graphql } from 'gatsby';
import { FrontMatterData } from '../../../types/Markdown';
import { PageProps } from '../../../types/gatsby';
import Card from '../../atoms/Card';
import BlogLayout from '../BlogLayout';
import Disqus from '../../atoms/Disqus';
import SEO from '../../atoms/SEO';

type Data = {
  markdownRemark: {
    html: string;
    frontmatter: FrontMatterData;
  };
};

const BlogPost = (props: PageProps<Data>) => {
  const {
    data: { markdownRemark },
  } = props;
  const { title, category, date } = markdownRemark.frontmatter;

  return (
    <BlogLayout className={'post'}>
      <SEO title={title} article={markdownRemark.html} />
      <Card>
        <h1 className="title">{title}</h1>
        <p className="desc">
          <span>{category}</span>
          {' · '}
          <span>{date}</span>
        </p>
        <article
          className="article"
          dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
        />
        <Disqus />
      </Card>
    </BlogLayout>
  );
};

export default BlogPost;
export const query = graphql`
  query Posts($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "YYYY.MM.DD")
        category
      }
    }
  }
`;
