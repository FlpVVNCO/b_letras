import {useState} from 'react';

const Formulario = ({setBusquedaLetra}) => {

    const [busqueda, setBusqueda] = useState({
        artista: '',
        cancion: ''
    });
    const [error, setError] = useState(false);


    const {artista, cancion} = busqueda;

    // Funcion para los input y poder leer el contenido

    const actualizarState = e =>{
        setBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    // consultar las apis
    const buscarInformacion = e =>{
        e.preventDefault();

        if (artista.trim() === '' || cancion.trim() === '') {
            setError(!error);
            return;
        } //else if (artista.trim()=== '' || cancion.trim() === '') {}

        // todo bien pasar al componente principal
        setError(false)
        setBusquedaLetra(busqueda);
    }

    return (
    <div>
        <div className="bg-info">
        {error ? <p className='alert alert-danger text-center p-2'>Todos los campos son obligatorios</p> : null}
            <div className="container">
                <div className="row">
                    <form 
                        onSubmit={buscarInformacion}
                        className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                    >
                        <fieldset>
                            <legend className='text-center'> Buscador Letras de Canciones </legend>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Artista</label>
                                        <input 
                                            type="text" 
                                            className='form-control'
                                            name='artista'
                                            onChange={actualizarState}
                                            placeholder='Nombre Artista'
                                            value={artista}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                            <label>Canción</label>
                                            <input 
                                                type="text" 
                                                className='form-control'
                                                name='cancion'
                                                onChange={actualizarState}
                                                placeholder='Nombre Canción'
                                                value={cancion}
                                            />
                                    </div>
                                </div>
                            </div>
                        
                            <button 
                                type='submit'
                                className='btn btn-primary float-right'
                            >
                                Buscar
                            </button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
};

export default Formulario;
