import React, { useState, useEffect } from 'react';
import Theme, { themes } from './utils/themes.js'
import PropTypes from 'prop-types';
import { TabBar, Tab, ActiveComponent } from './components/index.js';
import { Container, TriggerTitle } from './tabylon.layout.js';
import { ArrowsExpand } from '@styled-icons/heroicons-outline/ArrowsExpand'
import Title from './components/text/Title.js';
import TabComponent from './components/text/TabComponent.js';

function Tabylon({containerStyle, tabBarStyle, tabStyle, activeComponentStyle, data}) {

    const [ active, setActive ] = useState(data[0]);
    const [ theme, setTheme ] = useState(themes.browser);

    const activateTab = data => {
        setActive(data);
        let tabs = document.getElementsByClassName(`tab`);
        for (let i = 0; i < tabs.length; ++i) {
            if (tabs[i].id === data.name) {
                if (tabs[i].classList.contains('active')) return;
                else tabs[i].classList.add('active');

            } else {
                tabs[i].classList.remove('active');
            }
        }
    }

    useEffect(() => {
        setActive(data[0]);
        activateTab(data[0]);
    }, [])

    if (data === {}) return (
        <Container
            containerStyle={containerStyle}
            theme={theme}
        >
            Tabylon
        </Container>
    )
    else return (
    <Theme theme={theme}>
        <Container
            containerStyle={containerStyle}
            theme={theme}
        >
            <TabBar 
                theme={theme}
                tabBarStyle={tabBarStyle}
            >
                {data.map((item, index) => {
                    if (item.name === active.name && theme.name === 'browser') return (
                        <Tab 
                            theme={theme}
                            tabStyle={tabStyle}
                            item={item}
                            id={item.name}
                            key={`tab${index}`}
                            onClick={activateTab}
                        >
                            <TabComponent item={item} theme={theme}/>
                        </Tab>
                    )
                    else return (
                        <Tab 
                            theme={theme}
                            tabStyle={tabStyle}
                            item={item}
                            id={item.name}
                            key={`tab${index}`}
                            onClick={activateTab}
                        >
                            
                            {theme.name === 'browser' && <ArrowsExpand size={24} />}
                            <TriggerTitle 
                                tabStyle={tabStyle} 
                                className="text"
                            >
                                <Title size={tabStyle.fontSize}>{item.tabContent.subtitle}</Title>
                            </TriggerTitle>
                        </Tab>
                    )
                })}
            </TabBar>
            <ActiveComponent
                theme={theme}
                activeComponentStyle={activeComponentStyle}
                activeItem={active}
            />
        </Container>
    </Theme>
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
        height: '5em',
        width: '100%',
        justify: 'space-evenly',
        justifyBrowser: 'flex-start',
    },
    tabStyle: {
        spotlight: false,
        titleAlign: 'center',
        titleAlignActive: 'center',
        style: 'standard',
        grow: false,
        bcolor: 'rgba(255, 255, 255, 0.5)',
        acolor: 'rgba(255,255,255)',
        activeFontColor: 'rgba(0,0,0)',
    },
    activeComponentStyle: {
        bgcolor: 'rgba(255,255,255)',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    data: [
        {
            name: 'one', 
            tabContent: {
                subtitle: 'Weather',
                elOne: 'link here',
                elTwo: 'link here',

            },
            activeTabContent: '',
            data: 'content one'
        },
        {
            name: 'two', 
            tabContent: {
                subtitle: 'Finance',
                elOne: 'link here',
                elTwo: 'link here',

            },
            activeTabContent: '',
            data: 'content two'
        },
        {
            name: 'three', 
            tabContent: {
                subtitle: 'Golf',
                elOne: 'link here',
                elTwo: 'link here',

            },
            activeTabContent: '',
            data: 'content three'
        },
        {
            name: 'four', 
            tabContent: {
                subtitle: 'Random',
                elOne: 'link here',
                elTwo: 'link here',

            },
            activeTabContent: '',
            data: 'content four'
        },
        
    ]
}

export default Tabylon;