import React from 'react';
import { NavLink } from 'react-router-dom';
import GoBackButton from '../../components/GoBackButton';

const ModMenu = () => {
    return (
        <div>
            <div className="text-center" >
                <div className="list-group">
                    <div className='border-bottom'>
                        <div className="row align-items-center">
                            <div className="col-auto">
                                <GoBackButton />
                            </div>
                            <div className="col mb-1">
                                <NavLink to="/dashboard/mod" className="link">
                                    <h4 className="mb-0 me-0 me-md-5 text-center">Moderator Panel</h4>
                                </NavLink>
                            </div>
                            <div className="col-auto mb-1">
                                <button className='btn d-md-none' data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" >
                                    <i className="fa-solid fa-bars"> </i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='d-md-collapse show rounded' id="collapseExample">
                        <NavLink to="/dashboard/mod/create-notice" className="list-group-item list-group-item-action">
                            Create Notice
                        </NavLink>
                        <NavLink to="/dashboard/mod/create-link" className="list-group-item list-group-item-action">
                            Content Links
                        </NavLink>
                        <NavLink to="/dashboard/mod/create-result" className="list-group-item list-group-item-action">
                            Publish Results
                        </NavLink>
                        <NavLink to="/dashboard/student" className="list-group-item list-group-item-action">
                            Demo Students
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModMenu;