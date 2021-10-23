import '../App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Ticket = (props) => {
    return ( 
        <div className="BoletosCine">
          {
            Object.keys(props.compra).length!==0?
            <div>
                <h4>Confirmacion de su Compra</h4>
                <div className="CompraBoletos">
                  <p>{props.compra.nombre}({props.compra.idioma})</p>
                  <p>Horario de funcion: {props.compra.horario}</p>
                  <p>Cantidad: <input type='number'  className="text-center" style={{width: '15vmin'}} value={props.compra.cantidad} min="1" max="10" onChange={e=>props.calcular(e.target.value,props.compra)}/></p>
                  <p>Total, (IVA incluido): ${(props.compra.total).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</p>
                  <div className="Botones">
                    <Button onClick={()=>props.eliminarCompra()}variant="danger">Cancelar</Button> 
                    <Button onClick={()=>props.comprar(props.compra)}variant="success">Comprar</Button> 
                  </div>
                </div> 
            </div>:
              <div className="DatosCompra">
                <p>Por favor selecciona tu horario de funcion</p>
              </div>

            }
          </div>
     );
}
 
export default Ticket;
