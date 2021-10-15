import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

function Navigation() {

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">Inicio</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Administracion de ventas
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><Link className="dropdown-item" to="/RegistroVenta">Registrar venta</Link></li>
                                <li><Link className="dropdown-item" to="/ListarVentas">Listar ventas</Link></li>
                                <li><Link className="dropdown-item" to="/ActualizarVentas">Buscar y actualizar ventas</Link></li>
                            </ul>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Administracion de productos
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><Link className="dropdown-item" to="/RegistroProducto">Registrar producto</Link></li>
                                <li><Link className="dropdown-item" to="/ListarProductos">Listar productos</Link></li>
                                <li><Link className="dropdown-item" to="/ActualizarProductos">Buscar y actualizar productos</Link></li>
                            </ul>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Gestion de usuarios
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><Link className="dropdown-item" to="/ListarUsuarios">Listar usuarios</Link></li>
                                <li><Link className="dropdown-item" to="/ActualizarUsuario">Actualizar usuarios</Link></li>
                            </ul>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>

    )

}

export default Navigation;
