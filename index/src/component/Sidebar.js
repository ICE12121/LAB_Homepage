import React from 'react';
import '../css/css_dash_admin&student_page/sidebars.css'
import SidebarItem from './SidebarItem'; // Assuming SidebarItem is a separate component

const Sidebar = ({ items }) => {
  return (
<div className="flex-shrink-0 p-3 bg-white" style={{ width: '280px' }}>
      <a href="/" className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
        <span className="fs-5 fw-semibold">Interface</span>
      </a>
      <ul className="list-unstyled ps-0">
        {items.map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </ul>
      
    </div>
  );
};

export default Sidebar;
