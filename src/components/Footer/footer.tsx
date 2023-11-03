import './footer.scss'
import logo from '../../assets/images/logo.svg'

const footer = ()=>{
    return(

        <div className='footer'>
            <img  src={logo} alt="logo" />
            <p>Todos os direitos reservados - 2023</p>
        </div>
    );
}

export default footer;