import './styles.css';

import React from 'react';
import { graphql } from 'gatsby';
import { FrontMatterData } from '../../../types/Markdown';
import { PageProps } from '../../../types/gatsby';
import Card from '../../atoms/Card';
import BlogLayout from '../BlogLayout';
import Disqus from '../../atoms/Disqus';
import { Location } from '@reach/router';
import Adsense from '../../atoms/Adsense';

type Data = {
  location: Location;
  markdownRemark: {
    html: string;
    frontmatter: FrontMatterData;
  };
};

const BlogPost = (props: PageProps<Data>) => {
  const { location, data } = props;
  const { markdownRemark } = data;
  const { title, category, date } = markdownRemark.frontmatter;

  return (
    <BlogLayout
      className={'post'}
      title={title}
      article={markdownRemark.html}
      pathname={location.pathname}
    >
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
        <div className={'adsense'}>
          <Adsense />
        </div>
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
