import React from "react";
import "./ProfileStyles.css"

function Profile() {

    return (

        <div className="container">
            <div className="container emp-profile">
                <form method="post">
                    <div className="row">
                        
                        <div className="col-md-6">
                            <div className="profile-head">
                                <h5>
                                    Usuario
                                </h5>

                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab"
                                            aria-controls="home" aria-selected="true">Perfil
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>

                    <div className="col-md-8">
                        <div className="tab-content profile-tab" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Id de usuario</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>12345</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Nombre</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>Usuario 1</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Email</label>
                                    </div>
                                <div className="col-md-6">
                                        <p>Usuario1@gmail.com</p>
                                    </div>
                                </div>
                                
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Rol</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>Administrador</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Estado</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>Autorizado</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </form>
            </div>
        </div>


    )

}

export default Profile;
