import React from 'react'
import { useParams } from 'react-router-dom'

const UsuarioGenerico = () => {
    let params = useParams();
    console.log('params', params);
    return (
        <div>
            Pagina de {params.nombreUsuario}
        </div>
    )
}

export default UsuarioGenerico
