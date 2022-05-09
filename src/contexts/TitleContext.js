import React, { createContext, useEffect, useState } from 'react';

export const titleContext = createContext({});

export default function TitleContext({ children }) {
  const [pageTitle, setPageTitle] = useState('ACR');
  const [pageHeading, setPageHeading] = useState('Incidents');

  const updatePageTitle = (title) => {
    if (title) setPageTitle(title);
    else setPageTitle('ACR');
  };

  const updatePageHeading = (heading) => {
    if (heading) setPageHeading(heading);
    else setPageHeading('Incidents');
  };

  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  return (
    <titleContext.Provider
      value={{
        pageTitle: pageTitle,
        updatePageTitle: updatePageTitle,
        pageHeading: pageHeading,
        updatePageHeading: updatePageHeading,
      }}
    >
      {children}
    </titleContext.Provider>
  );
}
