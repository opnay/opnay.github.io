import './styles.css';

import React from 'react';
import { graphql } from 'gatsby';
import { FrontMatterData } from '../../types/Markdown';
import { PageProps } from '../../types/gatsby';
import Layout from '../../components/atoms/Layout';
import Card from '../../components/atoms/Card';

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

  return (
    <Layout className={'post'}>
      <Card>
        <h1 className="title">{markdownRemark.frontmatter.title}</h1>
        <p className="desc">
          <span>{markdownRemark.frontmatter.category}</span>
          {' · '}
          <span>{markdownRemark.frontmatter.date}</span>
        </p>
        <article
          className="article"
          dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
        />
      </Card>
    </Layout>
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
