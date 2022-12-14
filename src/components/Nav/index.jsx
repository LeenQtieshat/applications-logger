import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { useRouter } from 'next/router';
import paths from './helpers/paths';
import Link from 'next/link';

const { pagesNavigator, active } = styles;
const { formatLinks, formatPath } = paths;

function Nav() {
  const { pathname } = useRouter();
  const activeIndex = pathname.split('/').length - 1;
  const [tabs, setTabs] = useState([]);

  useEffect(() => {
    if (pathname == '/') {
      setTabs(['Home']);
    } else {
      const pathsArray = pathname.split('/');
      const tabsLabels = pathsArray.map(path => <>{!path ? <>Home</> : formatPath(path)} </>);

      setTabs(tabsLabels);
    }
  }, [pathname]);

  const renderTabs = tabs.map((path, index) => (
    <React.Fragment key={index}>
      <li>
        <Link
          className={index == activeIndex ? active : ''}
          href={`${formatLinks(pathname, index)}`}
        >
          {path}
        </Link>
      </li>
      <div>
        {!(index + 1 == tabs.length) && (
          <svg width="16" height="16" viewBox="0 0 24 24" focusable="false">
            <path d="M9.71 18.71l-1.42-1.42 5.3-5.29-5.3-5.29 1.42-1.42 6.7 6.71z"></path>
          </svg>
        )}
      </div>
    </React.Fragment>
  ));
  return <ul className={pagesNavigator}>{renderTabs}</ul>;
}

export default Nav;
