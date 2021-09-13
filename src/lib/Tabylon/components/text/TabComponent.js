import React from 'react';
import { Box, TabLink, SubTitleText, TabContainer } from '../../tabylon.layout.js';
import { ArrowsExpand } from '@styled-icons/heroicons-outline/ArrowsExpand'


function TabComponent({item, theme}) {
    return (
        <TabContainer>
            {/* <Box theme={theme}>
                {theme.name === 'browser' && <ArrowsExpand size={24} />}
            </Box> */}
            <Box>
                <SubTitleText>{item.tabContent.subtitle}</SubTitleText>
            </Box>
            <Box>
                <TabLink>{item.tabContent.elOne}</TabLink>
                <TabLink>{item.tabContent.elTwo}</TabLink>
            </Box>
        </TabContainer>
    )
}

export default TabComponent;