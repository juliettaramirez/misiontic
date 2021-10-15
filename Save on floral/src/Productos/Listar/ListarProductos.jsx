import React from "react";
import "./ListarProducto.css";


function ListarProductos() {

    return (

        <main >
            
            <div>
            <h3>LISTA DE PRODUCTOS </h3>
                <table  >
                
                    <thead>
                        <tr>
                            <th>Identificador del producto</th>
                            <th>Descripción del producto</th>
                            <th>Valor del producto</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>95356</td>
                            <td>Celular</td>       
                            <td>1000000</td>
                            <td>
                                <button type="button" class="btn btn-danger" >Eliminar producto</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
    )
}

export default ListarProductos;
