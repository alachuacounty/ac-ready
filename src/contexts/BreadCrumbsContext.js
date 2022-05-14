import React, { createContext, useState } from 'react';

export const breadCrumbsContext = createContext([]);

const breadCrumbsDef = [
  { crumb: 'ALACHUA COUNTY READY HOME', link: '/' },
  { crumb: 'INCIDENTS', link: '/incidents' },
];

export default function BreadCrumbsContext({ children }) {
  const [breadCrumbs, setBreadCrumbs] = useState(breadCrumbsDef);

  const pushBreadCrumbs = (nextCrumb) => {
    if (nextCrumb.crumb && nextCrumb.link)
      setBreadCrumbs([...breadCrumbs, nextCrumb]);
    else setBreadCrumbs(breadCrumbsDef);
  };

  return (
    <breadCrumbsContext.Provider
      value={{ breadCrumbs: breadCrumbs, pushBreadCrumbs: pushBreadCrumbs }}
    >
      {children}
    </breadCrumbsContext.Provider>
  );
}
