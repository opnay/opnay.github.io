import './styles.css';

import React, { useMemo } from 'react';

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button: React.FC<Props> = (props: Props) => {
  const { children, className, ...buttonProps } = props;
  const cn = useMemo(() => ['button', className].join(' '), [className]);

  return (
    <button className={cn} {...buttonProps}>
      {children}
    </button>
  );
};

export default Button;
