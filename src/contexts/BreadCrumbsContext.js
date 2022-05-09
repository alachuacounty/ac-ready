import React, { createContext, useEffect, useState } from 'react';
import BreadCrumbs from '../components/Branding/BreadCrumbs';

export const breadCrumbsContext = createContext({});

export default function BreadCrumbsContext({ children }) {
    const breadCrumbsDef = [{ crumb: 'ALACHUA COUNTY READY HOME', link: '/' }, { crumb: 'INCIDENTS', link: '/incidents' }];
    const [breadCrumbs, setBreadCrumbs] = useState([]);

    const pushBreadCrumbs = (nextCrumb) => {
        if (nextCrumb.crumb && nextCrumb.link) setBreadCrumbs(breadCrumbs.push({ crumb: nextCrumb.crumb, link: nextCrumb.link }));
        else setBreadCrumbs(breadCrumbsDef);
    };

    useEffect(() => {
        //setBreadCrumbs(breadCrumbsDef);
        //re-render when breadCrumbs change or pushBreadCrumbs is invoked
    }, [breadCrumbs]);

    return (
        <breadCrumbsContext.Provider
            value={{ breadCrumbs: breadCrumbs, pushBreadCrumbs: pushBreadCrumbs }}
        >
            {children}
        </breadCrumbsContext.Provider>
    );
}

