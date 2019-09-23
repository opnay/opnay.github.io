import './styles.css';

import React from 'react';
import { graphql } from 'gatsby';
import { AllMarkdownRemarkData } from '../../types/Markdown';
import Link from '../../components/atoms/Link';

type HeaderProps = {
  title?: string;
};
const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const { title = 'Blog' } = props;

  return (
    <div className={'header'}>
      <div className={'content'}>
        <img className={'profile'} src="/images/profile.png" alt="Profile" />
        <h1>{title}</h1>
      </div>
    </div>
  );
};

type DefaultProps = {
  data: {
    allMarkdownRemark: AllMarkdownRemarkData;
  };
};
export default (props: DefaultProps) => {
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
    <div className={'blog'}>
      <Header />
      <div className={'content'}>{list}</div>
    </div>
  );
};

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
