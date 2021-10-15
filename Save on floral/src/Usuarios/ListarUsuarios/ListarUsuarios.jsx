import React from 'react'
import "./ListarUsuario.css"

function ListarUsuarios() {
    return (
        <main >

            <div>
                <h3>LISTA DE USUARIOS </h3>
                <table  >

                    <thead>
                        <tr>
                            <th>Identificador del usuario</th>
                            <th>Nombre del usuario</th>
                            <th>Estado del usuario</th>
                            <th>Rol del usuario</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>12345</td>
                            <td>Usuario 1</td>
                            <td>Autorizado</td>
                            <td>Administrador</td>
                            <td>
                                <button type="button" class="btn btn-danger" >Eliminar usuario</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
    )
}

export default ListarUsuarios
