import React from "react";
import { useHarperDB } from "use-harperdb"

function Pelicula(){
    // Llamada a hook use-harperdb

    const [data, loading, error, refresh] = useHarperDB(
        {
            query: {
                operation:'sql',
                sql: "select * from coleccion.pelicula"
            },
            interval: 40000  // 40 segundos
        }
    );

    // renderizado cuando está cargando la data
    if(loading){
        return(<div>Cargando...</div>)
    }

    // Renderizado en caso de obtener la data
    if(data){

        // Acá obtiene una película de forma aleatoria en báse al índice del array
        const aleatorio = Math.floor(Math.random()*6+1);

        return(<div className="carga">
            {/* Portada */}
            <div className="portada-pelicula">
                <div className="info-arriba">
                    <h2 className="titulo">{data[aleatorio].title}</h2>
                    <div className="circulo">
                        <div className="ratings">
                            <span className="mitad-grande">{data[aleatorio].rating}</span>/<span className="mitad-pequena">10</span>
                        </div>
                    </div>
                </div>
                <div className="info-soporte">
                    <span className="año">{data[aleatorio].date}</span> -
                    <span className="duracion"> Duración {data[aleatorio].hours}h:{data[aleatorio].minutes}m</span>
                </div>
            </div>

            <div className="imagen">
                <img alt="Portada Pelicula" src={data[aleatorio].cover} />
            </div>

            <div className="generos">
                <ul className="generos-pelicula">
                    {data[aleatorio].genres.map((genero,index)=>{
                        return(
                            <li key={index}><span className="generos-pelicula-item">{genero}</span></li>
                        )
                    })}
                </ul>
            </div>

            <div className="info-abajo">
                <p>{data[aleatorio].description}</p>

                <hr />
                <p className="autores">Escritores:
                    {data[aleatorio].writers.map((escritores,index) =>{
                        return(
                            <span key={index} className="escritores">{escritores}</span>
                            )
                        } )}
                </p>
                <p className="autores">Director/es:
                    {data[aleatorio].directors.map((directores,index)=>{
                        return(
                            <span key={index} className="directores">{directores}</span>
                        )
                    })}
                </p>
                <hr />
                <div className="btn-accion">
                    <a className="btn-visita-pelicula" href={data[aleatorio].website}>Mira en IDBM</a>
                    <a className="btn-generar-pelicula" href="" onClick={refresh}>Otra Pelicula</a>
                </div>
            </div>
        </div>)
    }

    // Renderizado en caso de error de conexión
    if(error){
        return(<div className="">Lo sentimos, no encontramos la información {error}</div>)
    }
}

export default Pelicula;
