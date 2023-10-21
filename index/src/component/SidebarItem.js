import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SidebarItem = ({ item }) => {
  const [collapsed, setCollapsed] = useState(true);

  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <li className="mb-1">
      <button className="btn btn-toggle align-items-center rounded" onClick={handleCollapse}>
        {item.name}
      </button>

      {/* Submenu items, they will be shown if the main item is clicked */}
      {item.subItems && !collapsed && (
        <div className="mt-2 pl-4">
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            {item.subItems.map((subItem, index) => (
              <li key={index}>
                <Link to={subItem.path} className="link-dark rounded">
                  {subItem.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

export default SidebarItem;
