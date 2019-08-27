import './styles.css';

import React, { useMemo, useCallback } from 'react';
import { navigate } from '@reach/router';

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  href?: string;
};

const Button: React.FC<Props> = (props: Props) => {
  const { children, className, onClick, href, ...buttonProps } = props;
  const cn = useMemo(() => ['button', className].join(' '), [className]);

  // Enable href
  const onClickHref = useCallback(
    (e) => {
      if (!!onClick) {
        onClick(e);
      }

      if (!!href) {
        navigate(href);
      }
    },
    [onClick, href, navigate]
  );

  return (
    <button className={cn} onClick={onClickHref} {...buttonProps}>
      {children}
    </button>
  );
};

export default Button;
