import React from 'react'
import { Link } from 'react-router-dom'
function side_nav() {
  return (
    <>

{/* <!-- Sidebar  --> */}
            <nav id="sidebar">
               <div className="sidebar_blog_1">
                  <div className="sidebar-header">
                     <div className="logo_section">
                        <Link to="/"><img className="logo_icon img-responsive" src="/images/logo/logo_icon.png" alt="#" /></Link>
                     </div>
                  </div>
                  <div className="sidebar_user_info">
                     <div className="icon_setting"></div>
                     <div className="user_profle_side">
                        <div className="user_img"><img className="img-responsive" src="/images/layout_img/user_img.jpg" alt="#" /></div>
                        <div className="user_info">
                           <h6>John David</h6>
                           <p><span className="online_animation"></span> Online</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="sidebar_blog_2">
                  <h4>General</h4>
                  <ul className="list-unstyled components">
                     <li className="active">
                        <a href="#dashboard" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><i className="fa fa-dashboard yellow_color"></i> <span>Dashboard</span></a>
                        <ul className="collapse list-unstyled" id="dashboard">
                           <li>
                              <Link to="/"> <span>Default Dashboard</span></Link>
                           </li>
                          
                        </ul>
                     </li>
                    
                     <li>
                        <a href="#element" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><i className="fa fa-diamond purple_color"></i> <span>Masters</span></a>
                        <ul className="collapse list-unstyled" id="element">
                           <li><Link to="/master/products"> <span> <i className="fa fa-circle "></i>Products</span></Link></li>
                           <li><Link to="/master/categories"> <span><i className="fa fa-list "></i> Category</span></Link></li>
                           <li><Link to="/master/roles"> <span><i className="fa fa-circle "></i>Roles</span></Link></li>
                           <li><Link to="/master/users"> <span><i className="fa fa-users "></i>Users</span></Link></li>
                        </ul>
                     </li>
                
                    
                     <li className="active">
                        <a href="#additional_page" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><i className="fa fa-cog yellow_color"></i> <span>Settings</span></a>
                        <ul className="collapse list-unstyled" id="additional_page">
                           <li>
                              <Link to="/users/profile"> <span><i className="fa fa-user"></i>Profile</span></Link>
                           </li>
                           <li>
                              <Link to="/users/change-password"> <span> <i className="fa fa-lock "></i>Change Password</span></Link>
                           </li>
                           <li>
                              <Link to="/logout">  <span><i className="fa fa-sign-out "></i>Logout</span></Link>
                           </li>
                          
                        </ul>
                     </li>
                     {/* <li><Link href="map.html"><i className="fa fa-map purple_color2"></i> <span>Map</span></Link></li>
                     <li><Link href="charts.html"><i className="fa fa-bar-chart-o green_color"></i> <span>Charts</span></Link></li>
                     <li><Link href="settings.html"><i className="fa fa-cog yellow_color"></i> <span>Settings</span></Link></li> */}
                  </ul>
               </div>
            </nav>
            
            {/* <!-- end sidebar --> */}
      
    </>
  )
}

export default side_nav
