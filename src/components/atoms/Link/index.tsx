import './styles.css';

import React, { useMemo, useCallback } from 'react';
import { navigate } from '@reach/router';

type Props = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

const Link: React.FC<Props> = (props: Props) => {
  const { children, className, onClick, href, ...buttonProps } = props;
  const cn = useMemo(() => ['link', className].join(' '), [className]);

  // Enable href
  const onClickHref = useCallback(
    (e) => {
      if (!!onClick) {
        onClick(e);
      }

      if (!!href) {
        navigate(href);

        // We use `navigate` of @reach/router
        // instead of anchor's href attributes for PWA.
        return false;
      }
    },
    [onClick, href, navigate]
  );

  return (
    <a className={cn} onClick={onClickHref} href={href} {...buttonProps}>
      {children}
    </a>
  );
};

export default Link;
