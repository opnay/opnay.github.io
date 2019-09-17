import React from 'react';
import { graphql } from 'gatsby';

type DefaultProps = {
  data: {
    markdownRemark: {
      html: string;
    };
  };
};
export default (props: DefaultProps) => {
  const {
    data: { markdownRemark },
  } = props;

  return (
    <div>
      <article dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
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
      }
    }
  }
`;
