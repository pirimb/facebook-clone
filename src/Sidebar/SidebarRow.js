import React from 'react'
import './SidebarRow.css'
import { IconButton, Avatar } from '@material-ui/core';

function SidebarRow({Icon, title, src}) {
    return (
        <div className="sidebarRow">
            {src && <Avatar src={src} />}
            {Icon && <Icon />}
            <h4>{title}</h4>
        </div>
    );
}

export default SidebarRow
