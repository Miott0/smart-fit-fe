import './header.scss'
import logo from '../../assets/images/logo.svg'


const Header = () => {
  
    return (
      <header>

        <div className="logo-container">
          <img src={logo} alt="logo" />
          
        </div>

        <div className="text-container">
          <div className="heading">
            <h1>REABERTURA <br />SMART FIT</h1>
            <span className='heading-border'></span>
          </div>
          <p>O horário de funcionamento das nossas unidades está seguindo os decretos de cada município. Por isso, confira aqui se a sua unidade está aberta e as medidas de segurança que estamos seguindo.</p>
        </div>

      </header>
    )
 
}

export default Header;