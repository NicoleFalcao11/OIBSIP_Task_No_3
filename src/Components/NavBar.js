
import React from "react";


function NavBar() {
    return (
        <div class="navbar">
    <div class="title">To Do</div>
    <div class="nav-links">
      <a href="/">Add Tasks</a>
      
      <div class="dropdown">
        <a href="/myTasks">My Tasks</a>
        <div class="dropdown-content">
          <a href="/pending">Pending Tasks</a>
          <a href="/complete">Completed Tasks</a>
        </div>
      </div>
    </div>
  </div>
    );
}
export default NavBar;
