import './styles.css';

import React from 'react';
import Link from '../../atoms/Link';

type Props = {
  title?: string;
};
const BlogHeader: React.FC<Props> = (props) => {
  const { title = 'Blog' } = props;

  return (
    <div className={'blog-header'}>
      <div className={'content'}>
        <Link href={'/'} className={'profile'}>
          <img src="/images/profile.png" alt="Profile" />
          <span className={'name'}>{title}</span>
        </Link>
        <div className={'shortcut'}>
          <Link href={'https://facebook.com/opnay'}>
            <img
              alt="facebook"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgIDxwYXRoIGZpbGw9IndoaXRlIiBkPSJNMTcsMlYySDE3VjZIMTVDMTQuMzEsNiAxNCw2LjgxIDE0LDcuNVYxMEgxNEwxNywxMFYxNEgxNFYyMkgxMFYxNEg3VjEwSDEwVjZBNCw0IDAgMCwxIDE0LDJIMTdaIi8+Cjwvc3ZnPg=="
            />
          </Link>
          <Link href={'https://twitter.com/opnay_dev'}>
            <img
              alt="twitter"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgIDxwYXRoIGZpbGw9IndoaXRlIiBkPSJNMjIuNDYsNkMyMS42OSw2LjM1IDIwLjg2LDYuNTggMjAsNi42OUMyMC44OCw2LjE2IDIxLjU2LDUuMzIgMjEuODgsNC4zMUMyMS4wNSw0LjgxIDIwLjEzLDUuMTYgMTkuMTYsNS4zNkMxOC4zNyw0LjUgMTcuMjYsNCAxNiw0QzEzLjY1LDQgMTEuNzMsNS45MiAxMS43Myw4LjI5QzExLjczLDguNjMgMTEuNzcsOC45NiAxMS44NCw5LjI3QzguMjgsOS4wOSA1LjExLDcuMzggMyw0Ljc5QzIuNjMsNS40MiAyLjQyLDYuMTYgMi40Miw2Ljk0QzIuNDIsOC40MyAzLjE3LDkuNzUgNC4zMywxMC41QzMuNjIsMTAuNSAyLjk2LDEwLjMgMi4zOCwxMEMyLjM4LDEwIDIuMzgsMTAgMi4zOCwxMC4wM0MyLjM4LDEyLjExIDMuODYsMTMuODUgNS44MiwxNC4yNEM1LjQ2LDE0LjM0IDUuMDgsMTQuMzkgNC42OSwxNC4zOUM0LjQyLDE0LjM5IDQuMTUsMTQuMzYgMy44OSwxNC4zMUM0LjQzLDE2IDYsMTcuMjYgNy44OSwxNy4yOUM2LjQzLDE4LjQ1IDQuNTgsMTkuMTMgMi41NiwxOS4xM0MyLjIyLDE5LjEzIDEuODgsMTkuMTEgMS41NCwxOS4wN0MzLjQ0LDIwLjI5IDUuNywyMSA4LjEyLDIxQzE2LDIxIDIwLjMzLDE0LjQ2IDIwLjMzLDguNzlDMjAuMzMsOC42IDIwLjMzLDguNDIgMjAuMzIsOC4yM0MyMS4xNiw3LjYzIDIxLjg4LDYuODcgMjIuNDYsNloiLz4KPC9zdmc+"
            />
          </Link>
          <Link href={'https://github.com/opnay'}>
            <img
              alt="github"
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIwLjM4IDguMTc1OThDMjAuNTQgNy43NzU5OCAyMS4wNiA2LjE4NTk4IDIwLjIxIDQuMDM1OThDMjAuMjEgNC4wMzU5OCAxOC45IDMuNjQ1OTggMTUuOTEgNS42NDU5OEMxNC42NiA1LjMxNTk4IDEzLjMzIDUuMjY1OTggMTIgNS4yNjU5OEMxMC42OCA1LjI2NTk4IDkuMzQgNS4zMTU5OCA4LjA5IDUuNjQ1OThDNS4xIDMuNjE1OTggMy43OSA0LjAzNTk4IDMuNzkgNC4wMzU5OEMyLjk0IDYuMTg1OTggMy40NiA3Ljc3NTk4IDMuNjMgOC4xNzU5OEMyLjYxIDkuMjY1OTggMiAxMC42NDYgMiAxMi4zNjZDMiAxOC44MDYgNi4xNiAyMC4yNTYgMTIgMjAuMjU2QzE3Ljc5IDIwLjI1NiAyMiAxOC44MDYgMjIgMTIuMzY2QzIyIDEwLjY0NiAyMS4zOSA5LjI2NTk4IDIwLjM4IDguMTc1OThaTTEyIDE5LjAyNkM3Ljg4IDE5LjAyNiA0LjUzIDE4LjgzNiA0LjUzIDE0LjgzNkM0LjUzIDEzLjg4NiA1IDEyLjk4NiA1LjggMTIuMjU2QzcuMTQgMTEuMDI2IDkuNDMgMTEuNjc2IDEyIDExLjY3NkMxNC41OSAxMS42NzYgMTYuODUgMTEuMDI2IDE4LjIgMTIuMjU2QzE5IDEyLjk4NiAxOS41IDEzLjg3NiAxOS41IDE0LjgzNkMxOS41IDE4LjgyNiAxNi4xMyAxOS4wMjYgMTIgMTkuMDI2Wk04Ljg2IDEyLjc2NkM4LjA0IDEyLjc2NiA3LjM2IDEzLjc2NiA3LjM2IDE0Ljk4NkM3LjM2IDE2LjIxNiA4LjA0IDE3LjIyNiA4Ljg2IDE3LjIyNkM5LjY5IDE3LjIyNiAxMC4zNiAxNi4yMjYgMTAuMzYgMTQuOTg2QzEwLjM2IDEzLjc1NiA5LjY5IDEyLjc2NiA4Ljg2IDEyLjc2NlpNMTUuMTQgMTIuNzY2QzE0LjMxIDEyLjc2NiAxMy42NCAxMy43NTYgMTMuNjQgMTQuOTg2QzEzLjY0IDE2LjIyNiAxNC4zMSAxNy4yMjYgMTUuMTQgMTcuMjI2QzE1Ljk2IDE3LjIyNiAxNi42NCAxNi4yMjYgMTYuNjQgMTQuOTg2QzE2LjY0IDEzLjc1NiAxNiAxMi43NjYgMTUuMTQgMTIuNzY2WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg=="
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
