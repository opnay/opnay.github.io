import './styles.css';

import React from 'react';
import { graphql } from 'gatsby';
import { AllMarkdownRemarkData } from '../../types/Markdown';
import Link from '../../components/atoms/Link';
import { PageProps } from '../../types/gatsby';
import BlogLayout from '../../components/templates/BlogLayout';

type Data = {
  allMarkdownRemark: AllMarkdownRemarkData;
};
const BlogPage = (props: PageProps<Data>) => {
  const {
    data: {
      allMarkdownRemark: { nodes },
    },
  } = props;

  const list = React.useMemo(() => {
    if (nodes.length <= 0) {
      return <div>No Such Posts. :(</div>;
    }

    return nodes.map((i) => {
      const slug = i.fields.slug;
      console.log(i);

      return (
        <Link key={slug} href={slug}>
          <p>{i.frontmatter.title}</p>
          <div>
            <span>{i.frontmatter.category}</span>·
            <span>{i.frontmatter.date}</span>
          </div>
        </Link>
      );
    });
  }, [nodes]);

  return (
    <BlogLayout>
      <div className={'content'}>{list}</div>
    </BlogLayout>
  );
};

export default BlogPage;
export const query = graphql`
  {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          category
          date(formatString: "YYYY.MM.DD")
          title
          tags
        }
        fields {
          slug
        }
        timeToRead
      }
      totalCount
    }
  }
`;
