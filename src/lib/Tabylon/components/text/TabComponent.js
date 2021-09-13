import React from 'react';
import { Box, TabLink, SubTitleText, TabContainer } from '../../tabylon.layout.js';
import { ArrowsExpand } from '@styled-icons/heroicons-outline/ArrowsExpand'


function TabComponent({item, theme, id, tabStyle}) {

    console.log(`theme.name`, tabStyle)
    if (item === undefined) return null;
    else if (theme === undefined) return null;
    else return (
        <TabContainer className="tab" id={id} tabStyle={tabStyle}>
            <Box>
                <SubTitleText>{item.tabContent.subtitle}</SubTitleText>
            </Box>
            {theme.name === 'browser' && 
             <Box>
                <TabLink item={item}>{item.activeTabContent.elOne.title}</TabLink>
                <TabLink item={item}>{item.activeTabContent.elTwo.title}</TabLink>
            </Box>}
           
        </TabContainer>
    )
}

export default TabComponent;