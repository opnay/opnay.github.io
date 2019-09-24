import './styles.css';

import React, { useMemo, useCallback, MouseEvent } from 'react';
import { navigate } from '@reach/router';

type Props = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

const isExternalHref = (href: string) => /^https?:\/\//g.test(href);

const Link: React.FC<Props> = (props: Props) => {
  const { children, className, onClick, href, ...buttonProps } = props;
  const cn = useMemo(() => ['link', className].join(' '), [className]);

  // Enable href
  const onClickHref = useCallback(
    (e: MouseEvent<HTMLAnchorElement>) => {
      if (!!onClick) {
        onClick(e);
      }

      // We use `navigate` of @reach/router
      // instead of anchor's href attribute for PWA.
      if (!isExternalHref(href)) {
        // Disable href function
        e.preventDefault();

        // Navigate to PWA page.
        navigate(href);
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
