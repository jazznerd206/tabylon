import React, { Children } from 'react';
import { TabBar as TB } from '../tabylon.layout.js';

function TabBar({tabBarStyle, theme, children}) {
    return (
        <TB
            tabBarStyle={tabBarStyle}
            theme={theme}
        >
            {children}
        </TB>
    )
}

export default TabBar
