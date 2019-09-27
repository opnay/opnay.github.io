import './styles.css';
import './prism.css';

import React, { useMemo } from 'react';

type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = (props) => {
  const { children, className, ...divProps } = props;
  const cn = useMemo(() => ['layout', className].join(' '), [className]);

  return (
    <div {...divProps} className={cn}>
      {children}
    </div>
  );
};

export default Layout;
