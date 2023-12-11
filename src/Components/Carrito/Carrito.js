import { BsFillCartFill } from "react-icons/bs";


const Carrito = () =>{
    return <>
        <div>
            <BsFillCartFill className='icon is-normal has-text-info'/>
            <span className="numCart has-text-warning">3</span>
        </div>
    </>
}

export default Carrito;