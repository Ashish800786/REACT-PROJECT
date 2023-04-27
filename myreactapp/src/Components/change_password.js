import React from 'react'

function change_password() {
  return (
    <>
    <div id="content">
                   <div className="midde_cont">
                      <div className="container-fluid">
                         <div className="row column_title">
                            <div className="col-md-12">
                               <div className="page_title">
                                  <h2>Change Password</h2>
                               </div>
                            </div>
                         </div>
                         
                         <div className="row column1 social_media_section">
                               {/* <!-- table section --> */}
                               <div className="col-md-6 mx-auto">
                                    <div className="white_shd full margin_bottom_30">
                                    <div className="full graph_head">
                                        
                                        
                                    </div>
                                    <div className="table_section padding_infor_info">
                                        
                                            <form action="" className="needs-validation" novalidate method="POST">
                                            <div className="row">
                                                <div className="form-group col-md-12 ">
                                                <label className="col-md-12 text-center h5" for="old_password">Old Password</label>
                                                <div className="input-group">
                                                    <input type="password" placeholder="Old Password" id="old_password" name="old_password" className="form-control text-center is-valid" />
                                                    <button type="button" className="btn btn-white "  onclick="passeord_show_hide('op_eye_open','op_eye_close','old_password')" id="op_eye_open" ><i className="fa fa-eye text-secondary"></i></button>
                                                    <button type="button" className="btn btn-white "  onclick="passeord_show_hide('op_eye_open','op_eye_close','old_password')" id="op_eye_close" ><i className="fa fa-eye-slash text-secondary"></i></button>
                                                </div>
                                                <div className=" text-center valid-feedback">correct</div>
                                                </div>


                                                <div className="form-group col-md-12 ">
                                                <label className="col-md-12 text-center h5" for="new_password">New Password</label>
                                                <div className="input-group">
                                                    <input type="password" placeholder="New Password" id="new_password" name="new_password" className="form-control text-center is-invalid" />
                                                    <button type="button" className="btn btn-white " onclick="passeord_show_hide('np_eye_open','np_eye_close','new_password')" id="np_eye_open" ><i className="fa fa-eye text-secondary"></i></button>
                                                    <button type="button" className="btn btn-white " onclick="passeord_show_hide('np_eye_open','np_eye_close','new_password')" id="np_eye_close" ><i className="fa fa-eye-slash text-secondary"></i></button>
                                                </div>
                                                <div className="text-center invalid-feedback">incorrect</div>
                                                </div>


                                                <div className="form-group col-md-12 ">
                                                <label className="col-md-12 text-center h5" for="confirm_password">Confirm Password</label>
                                                <div className="input-group">
                                                    <input type="password" placeholder="Confirm Password" id="confirm_password" name="confirm_password" className="form-control text-center" required />
                                                    <button type="button" className="btn btn-white " onclick="passeord_show_hide('cp_eye_open','cp_eye_close','confirm_password')" id="cp_eye_open"><i className="fa fa-eye text-secondary"></i></button>    
                                                    <button type="button" className="btn btn-white " onclick="passeord_show_hide('cp_eye_open','cp_eye_close','confirm_password')" id="cp_eye_close"><i className="fa fa-eye-slash text-secondary"></i></button>    
                                                </div>
                                                <div className="valid-tooltip">
                                                    Looks good!
                                                </div>
                                                </div>


                                                <div className="form-group col-md-12">
                                                    <button className="btn btn-sm btn-success col-md-12">Submit</button>
                                                    {/* <!-- <div className="btn btn-sm btn-success col-md-12">Submit</div> --> */}
                                                </div>

                                            </div>
                                        </form>
                                    </div>
                                    </div>
                                </div>
    
    
    
    
    
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
                                                    <option value="1">Active</option>
                                                    <option value="0">Deactive</option>
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
                                                    <option value="1">Active</option>
                                                    <option value="0">Deactive</option>
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

export default change_password