import './styles.css';

import React, { useMemo } from 'react';

type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  children: React.ReactNode;
};

const Card: React.FC<Props> = (props) => {
  const { children, className, ...divProps } = props;
  const cn = useMemo(() => ['card', className].join(' '), [className]);

  return (
    <div {...divProps} className={cn}>
      {children}
    </div>
  );
};

export default Card;
