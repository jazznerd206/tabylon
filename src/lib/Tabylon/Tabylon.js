import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import { Tab, ActiveComponent } from './components/index';
import { Container, TabBar } from './tabylon.layout';
import { withTheme } from 'styled-components';


function Tabylon({containerStyle, tabBarStyle, tabStyle, activeComponentStyle, data}) {

    const [ active, setActive ] = useState({});

    const activateTab = data => {
        let tabs = document.getElementsByClassName(`tab`);
        for (let i = 0; i < tabs.length; ++i) {
            if (tabs[i].id === data.name) {
                tabs[i].classList.toggle('active');
            } else {
                tabs[i].classList.remove('active');
            }
        }
        setActive(data);
    }

    useEffect(() => {
        activateTab(data[0])
    }, [])

    if (data === {}) return (
        <Container
            containerStyle={containerStyle}
        >
            Tabylon
        </Container>
    )
    else return (
        <Container
            containerStyle={containerStyle}
        >
            <TabBar 
                tabBarStyle={tabBarStyle}
            >
                {data.map((item, index) => {
                    return (
                        <Tab 
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
        dcolor: 'rgba(255,255,255,.5)'
    },
    tabBarStyle: {
        height: '10vh',
        width: '100%',
    },
    tabStyle: {
        titleAlign: 'center',
        titleAlignActive: 'flex-start',
        style: 'standard',
        grow: false,
        bcolor: 'rgba(255, 255, 255, 0.5)',
        acolor: 'rgba(255,255,255)',
    },
    activeComponentStyle: {
        bgcolor: 'rgba(255,255,255)',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    data: [
        {name: 'one', data: 'content one'},
        {name: 'two', data: 'content two'},
        {name: 'three', data: 'content three'},
    ]
}

export default Tabylon;