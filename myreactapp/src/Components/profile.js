import React from 'react'
import TOP_NAV from './top_nav'
function profile() {
  return (
    <>
    <div id="content">
    <TOP_NAV/>
                   <div className="midde_cont">
                      <div className="container-fluid">
                         <div className="row column_title">
                            <div className="col-md-12">
                               <div className="page_title">
                                  <h2>Profile</h2>
                               </div>
                            </div>
                         </div>
                         
                         <div className="row column1 social_media_section">
                              
                               {/* <!-- Profile  --> */}
                            <div className="col-md-4">
                                <div className="white_shd full margin_bottom_30">
                                <div className="full graph_head">
                                    <div className="heading1 margin_0">
                                        <h2>Your Profile </h2>
                                    </div>
                                </div>
                                <div className="table_section padding_infor_info">
                                    
                                        <form action="/profile/image" method="post" encType="multipart/form-data">
                                            <div className="form-group">
                                                <label for="img" className="col-md-12">
                                                    <center>
                                                        <img id="p_img" src="/uploads/" style={{height:'145px',width:'145px'}} className="rounded-circle" alt="description_of_image" />
                                                    </center>  
                                                </label>
                                            </div>
                                            <div className="form-group">
                                            <button className="btn btn-sm btn-success col-md-12 form-control"><i className="fa fa-upload"></i> upload </button>
                                                <input type="file"  name="img" id="img" hidden onChange={(event)=>{const img=URL.createObjectURL(event.target.files[0]);document.getElementById('p_img').src=img;}} />
                                            </div>
                                            
                                            
                                            <div className="form-group mt-3">
                                                <div className="h-5 text-dark text-center"><i className="fa fa-user"></i> Ashish</div>
                                                <div className="h-5 text-dark text-center"><i className="fa fa-envelope"></i>a@gmail.com</div>
                                                <div className="h-5 text-dark text-center"><i className="fa fa-phone"></i>8004691471</div>
                                            </div>


                                            
                                        </form>
                                
                                </div>
                                </div>
                            </div>
                            {/* <!-- /Profile  --> */}
                            {/* <!-- Details --> */}
                            <div className="col-md-8">
                                <div className="white_shd full margin_bottom_30">
                                <div className="full graph_head">
                                    <div className="heading1 margin_0">
                                        <h2>Your Details </h2>
                                    </div>
                                </div>
                                <div className="table_section padding_infor_info">
                                    
                                        <form action="/profile" method="POST">
                                        <div className="row">
                                            <div className="form-group col-md-4">
                                            <label> Name</label>
                                            <input type="text" placeholder="Name" id="name" name="name" className="form-control" defaultValue="" />
                                            </div>
                                        

                                        
                                            <div className="form-group col-md-4">
                                            <label>Email</label>
                                            <input type="email" placeholder="Email" id="email" name="email" className="form-control" defaultValue=""/>
                                            </div>
                                            <div className="form-group col-md-4">
                                            <label>Mobile</label>
                                            <input type="text" placeholder="mobile" id="mobile" name="mobile" className="form-control" defaultValue=""/>
                                            </div>

                                        
                                        
                                            <div className="form-group col-md-12">
                                            <label>Address</label>
                                            <textarea name="address" id="address" className="form-control"></textarea>
                                            </div>


                                            <div className="form-group col-md-12">
                                                <button className="btn btn-sm btn-success col-md-12">Submit</button>
                                            </div>
                                        </div>
                                        </form>
                                
                                </div>
                                </div>
                            </div>
                                {/* <!-- / Details --> */}
    
    
    
    
    
                                {/* <!-- Modal --> */}
                                    <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered" role="document">
                                        <div className="modal-content">
                                        <div className="modal-header bg-dark text-light">
                                            <h5 className="modal-title text-light" id="exampleModalLongTitle">Create New</h5>
                                            <button type="button" className="close text-danger" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <form action="" method="post">
                                                <div className="form-group">
                                                <label for="subject_name_txt">Subject Name</label>
                                                <input type="text" placeholder="Subject Name" id="subject_name_txt" name="subject_name_txt" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                <label for="subject_status_dpd">Status</label>
                                                <select  id="subject_status_dpd" name="subject_status_dpd" className="form-control">
                                                    <option defaultValue="1">Active</option>
                                                    <option defaultValue="0">Deactive</option>
                                                </select>
                                                </div>
                                                <button className="btn btn-sm btn-success col-md-12">Submit</button>
                                            </form>
                                        
                                        </div>
                                        <div className="modal-footer">
                                            
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    {/* <!--/ MODAL --> */}
    
                                    
    
                                    {/* <!-- Modal --> */}
                                    <div className="modal fade" id="exampleModalCenter2" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenter2Title" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered" role="document">
                                        <div className="modal-content">
                                        <div className="modal-header bg-dark text-light">
                                            <h5 className="modal-title  text-white" id="exampleModalLongTitle">Update </h5>
                                            <button type="button" className="close text-danger" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <form action="/master/subjects/update" method="post">
                                                <div className="form-group" hidden>
                                                <label for="id">Id</label>
                                                <input type="hidden"  id="edit_id" name="id" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                <label for="subject_name_txt">Subject Name</label>
                                                <input type="text" placeholder="Subject Name" id="edit_subject_name_txt" name="subject_name_txt" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                <label for="subject_status_dpd">Status</label>
                                                <select  id="edit_subject_status_dpd" name="subject_status_dpd" className="form-control">
                                                    <option defaultValue="1">Active</option>
                                                    <option defaultValue="0">Deactive</option>
                                                </select>
                                                </div>
                                                <button className="btn btn-sm btn-success col-md-12">Update</button>
                                            </form>
                                        </div>
                                        <div className="modal-footer">
                                        
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    {/* <!--/ MODAL --> */}
    
    
                         </div>
                      </div>
                   </div>
            </div>
        </>
  )
}

export default profile
