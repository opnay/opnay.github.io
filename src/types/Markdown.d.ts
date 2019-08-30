export type AllMarkdownRemarkData = {
  nodes: {
    frontmatter: FrontMatterData;
    fields: SlugData;
    timeToRead: number;
  }[];
};

export type SlugData = {
  slug: string;
};

export type FrontMatterData = {
  category: string;
  date: string;
  tags: string[];
  title: string;
};
