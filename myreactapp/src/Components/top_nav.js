import {Link} from 'react-router-dom'
import React from 'react'

function top_nav() {
  return (
    <>
        {/* <div id="content"> */}
               <div className="topbar">
                  <nav className="navbar navbar-expand-lg navbar-light">
                     <div className="full">
                        <button type="button" id="sidebarCollapse" className="sidebar_toggle"><i className="fa fa-bars"></i></button>
                        <div className="logo_section">
                           <Link to="/"><img className="img-responsive" src="/images/logo/logo.png" alt="" /></Link>
                        </div>
                        <div className="right_topbar">
                           <div className="icon_info">
                              <ul>
                                 <li><Link to="/"><i className="fa fa-bell-o"></i><span className="badge">2</span></Link></li>
                                 <li><Link to="/"><i className="fa fa-question-circle"></i></Link></li>
                                 <li><Link to="/"><i className="fa fa-envelope-o"></i><span className="badge">3</span></Link></li>
                              </ul>
                              <ul className="user_profile_dd">
                                 <li>
                                    <Link className="dropdown-toggle" data-toggle="dropdown" to='nor'><img className="img-responsive rounded-circle" src="/images/layout_img/user_img.jpg" alt="" /><span className="name_user">John David</span></Link>
                                    <div className="dropdown-menu">
                                       <Link className="dropdown-item" to="/profile">My Profile</Link>
                                       <Link className="dropdown-item" to="/change-password">Change Password</Link>
                                       <Link className="dropdown-item" to="/Help">Help</Link>
                                       <Link className="dropdown-item" to="/logout"><span>Log Out</span> <i className="fa fa-sign-out"></i></Link>
                                    </div>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </nav>
               </div>
        {/* </div> */}
           
    </>
  )
}

export default top_nav
