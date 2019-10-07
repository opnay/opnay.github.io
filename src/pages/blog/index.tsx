import './styles.css';

import React from 'react';
import { graphql } from 'gatsby';
import { AllMarkdownRemarkData } from '../../types/Markdown';
import Link from '../../components/atoms/Link';
import { PageProps } from '../../types/gatsby';
import BlogLayout from '../../components/templates/BlogLayout';
import Card from '../../components/atoms/Card';

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

      return (
        <div key={slug} className={'item'}>
          {i.frontmatter.thumb !== '' && (
            <Link href={slug}>
              <img
                className={'thumb'}
                src={i.frontmatter.thumb}
                alt={'thumbnail'}
              />
            </Link>
          )}
          <div className={'info'}>
            <Link href={slug}>
              <h2>{i.frontmatter.title}</h2>
            </Link>
            <div>
              <Link className={'category'}>{i.frontmatter.category}</Link>
              {' · '}
              <span>{i.frontmatter.date}</span>
            </div>
          </div>
        </div>
      );
    });
  }, [nodes]);

  return (
    <BlogLayout>
      <Card className={'content'}>{list}</Card>
    </BlogLayout>
  );
};

export default BlogPage;
export const query = graphql`
  {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          thumb
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
