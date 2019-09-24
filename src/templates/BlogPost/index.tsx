import './styles.css';

import React from 'react';
import { graphql } from 'gatsby';
import { FrontMatterData } from '../../types/Markdown';

type DefaultProps = {
  data: {
    markdownRemark: {
      html: string;
      frontmatter: FrontMatterData;
    };
  };
};
export default (props: DefaultProps) => {
  const {
    data: { markdownRemark },
  } = props;

  return (
    <div className="post">
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
    </div>
  );
};

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
