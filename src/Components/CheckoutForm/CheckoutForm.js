import { useState } from "react";
import "../CheckoutForm/CheckoutForm.css";

const CheckoutForm = ({ onConfirm }) =>{
    const [ nombre , setNombre ] = useState('')
    const [ telefono , setTelefono ] = useState('')
    const [ email , setEmail ] = useState('')

    const handleConfirmado = (event) =>{
        event.preventDefault()

        const userData = {
            nombre, telefono , email
        }

        onConfirm(userData)
    }

    return(
        <div className="contenedor">
            <form onSubmit={handleConfirmado} className="form">
                <div className="input-group">
                    <label >
                        Nombre
                        <input className="inputs" type="text" value={nombre} onChange={(target) => setNombre(target.value)}/>
                    </label>
                    <label >
                        Telefono
                        <input className="inputs" type="text" value={telefono} onChange={(target) => setTelefono(target.value)}/>
                    </label>
                    <label >
                        Email
                    <input className="inputs" type="email" value={email} onChange={(target) => setEmail(target.value)}/>
                    </label>
                    <div className="boton">
                        <button  type="submit" className="button" >Crear Orden </button>
                    </div>
                </div>
            </form>
        </div>
    )
}


export default CheckoutForm;