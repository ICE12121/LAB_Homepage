import React from 'react';
import Sidebar from './Sidebar';

function Admin_homepage() {
// Define your sidebar items here, including sub-items
const sidebarItems = [
    { 
        name: 'Meeting Schedule', 
        path: '/Meeting_Schedule',
        subItems: [
          { name: 'Adding Schedule', path: '/Meeting_Schedule/Adding_Schedule' },
          { name: 'Delete Schedule', path: '/Meeting_Schedule/Delete_Schedule' },
          // more sub-items as needed
        ]
      },
    { 
        name: 'Check-in Control', 
        path: '/Check-in_Control',
        subItems: [
          { name: 'Check-in Configuration', path: '/home/check_Config' },
          { name: 'Check-in Time ', path: '/home/updates' },
          // more sub-items as needed
        ]
      },
      { 
        name: 'Task', 
        path: '/Meeting_Schedule',
        subItems: [
          { name: '', path: '/Meeting_Schedule/Adding_Schedule' },
          { name: 'Delete Schedule', path: '/Meeting_Schedule/Delete_Schedule' },
          // more sub-items as needed
        ]
      },
    { 
      name: 'User Management', 
      path: '/home',
      subItems: [
        { name: 'Adding User', path: '/home/overview' },
        { name: '', path: '/home/updates' },
        // more sub-items as needed
      ]
    },
    { 
      name: 'Setting', 
      path: '/dashboard',
      subItems: [
        { name: 'Changed', path: '/dashboard/analytics' },
        // more sub-items as needed
      ]
    },
    // more items as needed
  ];

  return (
    <div>
      {/* other components */}
      <Sidebar items={sidebarItems} />
      {/* other components */}
    </div>
//     <div id="wrapper">
//     {/* Sidebar */}
//     <div className="flex-shrink-0 p-3 bg-white" style={{width: '280px'}}> {/* Notice the style changes here */}
//         <a href="/" className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
//           {/* <svg className="bi me-2" width="30" height="24"><use xlink:href="#bootstrap"/></svg> */}
//           <span className="fs-5 fw-semibold">Collapsible</span>
//         </a>
//         <ul className="list-unstyled ps-0">
//     <li class="mb-1">
//       <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
//         Home
//       </button>
//       <div class="collapse show" id="home-collapse">
//         <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
//           <li><a href="#" class="link-dark rounded">Overview</a></li>
//           <li><a href="#" class="link-dark rounded">Updates</a></li>
//           <li><a href="#" class="link-dark rounded">Reports</a></li>
//         </ul>
//       </div>
//     </li>
//     <li class="mb-1">
//       <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
//         Dashboard
//       </button>
//       <div class="collapse" id="dashboard-collapse">
//         <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
//           <li><a href="#" class="link-dark rounded">Overview</a></li>
//           <li><a href="#" class="link-dark rounded">Weekly</a></li>
//           <li><a href="#" class="link-dark rounded">Monthly</a></li>
//           <li><a href="#" class="link-dark rounded">Annually</a></li>
//         </ul>
//       </div>
//     </li>
//     <li class="mb-1">
//       <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
//         Orders
//       </button>
//       <div class="collapse" id="orders-collapse">
//         <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
//           <li><a href="#" class="link-dark rounded">New</a></li>
//           <li><a href="#" class="link-dark rounded">Processed</a></li>
//           <li><a href="#" class="link-dark rounded">Shipped</a></li>
//           <li><a href="#" class="link-dark rounded">Returned</a></li>
//         </ul>
//       </div>
//     </li>
//     <li class="border-top my-3"></li>
//     <li class="mb-1">
//       <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
//         Account
//       </button>
//       <div class="collapse" id="account-collapse">
//         <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
//           <li><a href="#" class="link-dark rounded">New...</a></li>
//           <li><a href="#" class="link-dark rounded">Profile</a></li>
//           <li><a href="#" class="link-dark rounded">Settings</a></li>
//           <li><a href="#" class="link-dark rounded">Sign out</a></li>
//         </ul>
//       </div>
//     </li>
//   </ul>
// </div>
//     {/* End of Sidebar */}
// </div>

  );
}

export default Admin_homepage;