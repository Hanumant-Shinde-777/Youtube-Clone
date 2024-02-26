import React from 'react'
import'./sidebarRow.css';

function SidebarRow({Icon, title}) {
  return (
    <div className="sidebarRow">
      <Icon />
      <h2> {title} </h2>
    </div>
  );
}

export default SidebarRow