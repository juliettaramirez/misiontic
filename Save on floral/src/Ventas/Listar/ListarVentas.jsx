import React from "react";
import "./ListarVenta.css";


function ListarVentas() {

    return (

        <main >
            
            <div>
            <h3>LISTA DE VENTAS </h3>
                <table  >
                
                    <thead>
                        <tr>
                            <th>Nombre del vendedor</th>
                            <th>Identificacion del cliente</th>
                            <th>Nombre Cliente</th>
                            <th>Id de la venta</th>
                            <th>Valor total venta</th>
                            <th>Fecha de la Venta</th>
                            <th>Id del producto</th>
                            <th>Cantidad del producto</th>
                            <th>Precio del producto</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Tiger Nixon</td>
                            <td>999999</td>
                            <td>Juan Diaz</td>
                            <td>001</td>
                            <td>100</td>
                            <td>10/06/1982</td>
                            <td>123</td>
                            <td>1</td>
                            <td>100</td>
                            
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
    )
}

export default ListarVentas;
