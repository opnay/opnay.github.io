import React, { useMemo, useState } from 'react';

export const BlogContext = React.createContext(undefined);

const useHeader = () => {
  const [header, setHeader] = useState({
    title: 'Blog',
    src: '/',
  });

  return useMemo(
    () => ({
      set title(s: string) {
        setHeader({ ...header, title: s });
      },
      get title() {
        return header.title;
      },

      get src() {
        return header.src;
      },
      set src(s: string) {
        setHeader({ ...header, title: s });
      },
    }),
    [header, setHeader]
  );
};

type Props = {
  children?: React.ReactNode;
};

export const BlogContextProvider: React.FC<Props> = (props) => {
  const { children } = props;
  const header = useHeader();

  const ctx = useMemo(() => {
    return [header];
  }, []);

  return <BlogContext.Provider value={ctx}>{children}</BlogContext.Provider>;
};
