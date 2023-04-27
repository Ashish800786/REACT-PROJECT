import React from 'react'
import TOP_NAV from './top_nav'
function products() {
  return (
    <>
<div id="content">
<TOP_NAV/>
               <div className="midde_cont">
                  <div className="container-fluid">
                     <div className="row column_title">
                        <div className="col-md-12">
                           <div className="page_title">
                              <h2>Products</h2>
                           </div>
                        </div>
                     </div>
                     
                     <div className="row column1 social_media_section">
                           {/* <!-- table section --> */}
                            <div className="col-md-12">
                                <div className="white_shd full margin_bottom_30">
                                <div className="full graph_head">
                                    <div className="heading1 margin_0">
                                        <button className="btn btn-success" data-toggle="modal" data-target="#exampleModalCenter"><i className=" fa fa-plus"></i> Create New</button>
                                    </div>
                                    <span className="badges badges-light float-right border pl-2 pr-2 rounded border-warning  text-dark m-1">PDF</span>
                                    <span className="badges badges-light float-right border pl-2 pr-2 rounded border-success text-dark m-1 ">EXS</span>
                                </div>
                                <div className="table_section padding_infor_info">
                                    <div className="table-responsive-sm">
                                        <table className="table table-dark table-striped">
                                            <thead style={{verticalAlign: 'middle'}} className="text-center">
                                                <tr>
                                                    <th>History</th>
                                                    <th>Record Status</th>
                                                    <th>Created/Updated By</th>
                                                    <th>Product</th>
                                                    <th>Status</th>
                                                    <th colspan="2">Action</th>
                                                    <th>Created At</th>
                                                    <th>Updated At</th>
                                                </tr>
                                            </thead>
                                            <tbody className="text-center" style={{verticalAlign:'middle'}} >
                                                    <tr>
                                                        <td>
                                                            <a href="/master/subjects/history/<%= value._id %>" ><i className="fa fa-history text-primary"></i></a>
                                                        </td>
                                                        
                                                        <td>
                                                            <span className="badge badge-success">Created</span>
                                                            <span className="badge badge-warning">Updated</span>
                                                            <span className="badge badge-danger">Deleted</span>
                                                            <span className="badge" style={{backgroundColor: 'darkorange'}}>Restored</span>
                                                            <span className="badge " style={{backgroundColor: 'blueviolet'}}>Status Changed</span>
                                                        </td>

                                                        <td><i className="fa fa-user"></i> Ashish</td>
                                                        
                                                        <td>Mobile</td>
                                                        
                                                        <td>
                                                            <a href="/master/subjects/status/<%= value._id %>" >
                                                            
                                                                <i className="fa fa-check text-success"></i>
                                                        
                                                                <i className="fa fa-times text-danger"></i>
                                                            
                                                        </a>
                                                        </td>
                                                        
                                                        <td><i className="fa fa-edit text-warning" data-toggle="modal" data-target="#exampleModalCenter2" onclick="edit_data('<%= value._id %>','<%= value.name %>','<%= value.status %>')"></i></td>
                                                        
                                                        <td>
                                                            
                                                            
                                                                <a href="/master/subjects/restore/<%= value._id %>" >
                                                                <i className="fa fa-recycle text-success"></i>
                                                                </a>
                                                                
                                                                <a href="/master/subjects/delete/<%= value._id %>" >
                                                                <i className="fa fa-trash text-danger"></i>
                                                                </a>
                                                        
                                                        </td>
                                                        
                                                        <td>
                                                            <i className="fa fa-calendar text-danger"></i> 23 April 2023
                                                            <br/>
                                                            <i className="fa fa-clock-o text-danger"></i> 00:00:00 AM
                                                        </td>
                                                        
                                                        <td>
                                                            <i className="fa fa-calendar text-danger"></i>  23 April 2023
                                                            <br/>
                                                            <i className="fa fa-clock-o text-danger"></i> 00:00:00 AM
                                                        </td>
                                                        
                                                    </tr>
                                            
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                </div>
                            </div>
                            {/* <!-- table section --> */}





                            {/* <!-- Modal --> */}
                                <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
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
                                <div className="modal fade" id="exampleModalCenter2" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenter2Title" aria-hidden="true">
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

export default products