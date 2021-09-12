import React, { useState, useEffect } from 'react';
import Theme, { themes } from './utils/themes.js'
import PropTypes from 'prop-types';
import { TabBar, Tab, ActiveComponent } from './components/index.js';
import { Container } from './tabylon.layout.js';
import { getLocation } from './utils/getLocation.js';


function Tabylon({containerStyle, tabBarStyle, tabStyle, activeComponentStyle, data}) {

    const [ active, setActive ] = useState(data[0]);
    const [ theme, useTheme ] = useState(themes.light);

    const activateTab = data => {
        setActive(data);
        let tabs = document.getElementsByClassName(`tab`);
        for (let i = 0; i < tabs.length; ++i) {
            if (tabs[i].id === data.name) {
                if (tabs[i].classList.contains('active')) return;
                else tabs[i].classList.add('active');
                // if (tabStyle.spotlight === true) {
                //     getLocation(tabs[i]);
                // }
            } else {
                tabs[i].classList.remove('active');
            }
        }
    }

    useEffect(() => {
        setActive(data[0]);
        activateTab(data[0]);
    }, [])

    useEffect(() => {
        console.log(`active`, active);
    }, [active])

    if (data === {}) return (
        <Container
            containerStyle={containerStyle}
            theme={theme}
        >
            Tabylon
        </Container>
    )
    else return (
        <Container
            containerStyle={containerStyle}
            theme={theme}
        >
            <TabBar 
                theme={theme}
                tabBarStyle={tabBarStyle}
            >
                {data.map((item, index) => {
                    return (
                        <Tab 
                            theme={theme}
                            tabStyle={tabStyle}
                            item={item}
                            id={item.name}
                            key={`tab${index}`}
                            onClick={activateTab}
                        />
                    )
                })}
            </TabBar>
            <ActiveComponent
                theme={theme}
                activeComponentStyle={activeComponentStyle}
                activeItem={active}
            />
        </Container>
    )
}

Tabylon.propTypes = {
    containerStyle: PropTypes.object,
    tabBarStyle: PropTypes.object,
    tabStyle: PropTypes.object,
    activeComponentStyle: PropTypes.object,
    data: PropTypes.array
}

Tabylon.defaultProps = {
    containerStyle: {
        bgcolor: 'rgba(0,0,0)',
        fcolor: 'rgba(255,255,255)',
        dcolor: 'rgba(255,255,255,.5)',
        border: true
    },
    tabBarStyle: {
        height: '10vh',
        width: '100%',
        justify: 'space-evenly',
        justifyBrowser: 'flex-start',
    },
    tabStyle: {
        spotlight: false,
        titleAlign: 'center',
        titleAlignActive: 'flex-start',
        style: 'standard',
        grow: false,
        bcolor: 'rgba(255, 255, 255, 0.5)',
        acolor: 'rgba(255,255,255)',
        activeFontColor: 'rgba(0,0,0)'
    },
    activeComponentStyle: {
        bgcolor: 'rgba(255,255,255)',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    data: [
        {name: 'one', data: 'content one'},
        {name: 'two', data: 'content two'},
        {name: 'three', data: 'content three'},
    ]
}

export default Tabylon;