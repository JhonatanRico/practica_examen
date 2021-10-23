import React from 'react'
import '../App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Movies (props) {

        return (
            <div className="Cartelera">
                <h4 style={{marginBottom:'5vmin' }}>Cartelera</h4>

                  {
                    props.cartelera.map((x,i)=>{
                      return (
                         <div className="Pelis" key={i}>
                        
                            <div  className="Caratulas">
                              <img style={{width:'70%'}}src={x.url} alt={x.nombre} />
                            </div>
                            
                            <div className="Datos">
                                <p>{x.nombre}</p>
                                <p>{x.idioma}</p>
                                <p>{x.clasificacion}</p>
                                <p>{x.duracion}</p>
                                <div className="Horarios">
                                  {x.horarios.map((h,ind)=><Button variant="dark" key={ind} onClick={()=>props.agregar(x,h)}style={{margin:'1vmin'}}>{h}</Button>)}
                                </div>
                            </div>
                          </div>)
                   
                    })
                  }
              
            </div>
        )

}