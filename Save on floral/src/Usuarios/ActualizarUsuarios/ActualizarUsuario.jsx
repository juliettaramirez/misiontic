import React from 'react'

function ActualizarUsuario() {
    return (
        <section className="form-register">
      <h3>ACTUALIZAR USUARIOS</h3>
      <div>
        <label>Identificador usuario</label>
        <input className="controls" type="number" name="identificadorProducto" id=""
          placeholder="Ingrese el identificador del usuario" />
      </div>
      
      <p>
        <button type="button" className="btn btn-success">Consultar Registro usuarios</button>
      </p>

      <div>
        <label>Rol de usuario</label>
        <input className="controls" type="number" name="identificadorProducto" id=""
          placeholder="Ingrese el rol del usuario" />
      </div>

      <div>
        <label>Estado de usuario</label>
        <input className="controls" type="number" name="identificadorProducto" id=""
          placeholder="Ingrese el estado del usuario" />
      </div>

      <p>
        <button type="button" className="btn btn-success btn-lg" >Guardar cambios</button>
      </p>
    </section>
    )
}

export default ActualizarUsuario
