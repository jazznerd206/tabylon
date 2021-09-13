import React, { useState, useEffect } from 'react'
import { Trigger } from '../tabylon.layout.js'
import PropTypes from 'prop-types';



function Tab({item, id, onClick, tabStyle, theme, children}) {
    return (
        <Trigger
            theme={theme}
            className='tab'
            item={item}
            id={id}
            onClick={() => onClick(item)}
            tabStyle={tabStyle}
        >
            
            {children}
        </Trigger>
    )
}

Tab.propTypes = {
    item: PropTypes.object,
    id: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string
}

Tab.defaultProps = {
}

export default Tab
