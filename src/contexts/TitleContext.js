import React, { createContext, useEffect, useState } from 'react';

export const titleContext = createContext({});

export default function TitleContext({ children }) {
  const [pageTitle, setPageTitle] = useState('ACR');

  const updatePageTitle = (title) => {
    if (title) setPageTitle(title);
    else setPageTitle('ACR');
  };

  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  return (
    <titleContext.Provider
      value={{ pageTitle: pageTitle, updatePageTitle: updatePageTitle }}
    >
      {children}
    </titleContext.Provider>
  );
}
