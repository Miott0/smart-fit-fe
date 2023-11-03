import './legend.scss'

import recomend_mask from "../../assets/images/recommended-mask.png";
import required_mask from "../../assets/images/required-mask.png";
import recomend_towel from "../../assets/images/recommended-towel.png";
import required_towel from "../../assets/images/required-towel.png";
import partial_fountain from "../../assets/images/partial-fountain.png"
import forbidden_fountain from "../../assets/images/forbidden-fountain.png";
import required_lockerroom from "../../assets/images/required-lockerroom.png";
import forbidden_lockerroom from "../../assets/images/forbidden-lockerroom.png";
import partial_lockerroom from "../../assets/images/partial-lockerroom.png";




const legend = () =>{
    
    return(

        <div className='legend'>
            
            <div className="legend-item">
                <h4 className="titte">Máscara</h4>

                
                <div className="legend-images">
                    <div className="legend-image">
                        <img src={required_mask} alt="" />
                        <p>Obrigatório</p>
                    </div>

                    <div className="legend-image">
                        <img src={recomend_mask} alt="" />
                        <p>Recomendado</p>
                    </div>
                </div>
                
            </div>

            <div className="legend-item">
                <h4 className="titte">Toalha</h4>

                <div className="legend-images">
                    <div className="legend-image">
                        <img src={required_towel} alt="" />
                        <p>Obrigatório</p>
                    </div>

                    <div className="legend-image">
                        <img src={recomend_towel} alt="" />
                        <p>Recomendado</p>
                    </div>
                </div>

            </div>

            <div className="legend-item">
                <h4 className="titte">Bebedouro</h4>

                
                <div className="legend-images">
                    <div className="legend-image">
                        <img src={partial_fountain} alt="" />
                        <p>Parcial</p>
                    </div>

                    <div className="legend-image">
                        <img src={forbidden_fountain} alt="" />
                        <p>Proibido</p>
                    </div>
                </div>
               
            </div>

            <div className="legend-item">
                <h4 className="titte">Vestiários</h4>

                
                <div className="legend-images">
                    <div className="legend-image">
                        <img src={required_lockerroom}alt="" />
                        <p>Liberado</p>
                    </div>

                    <div className="legend-image">
                        <img src={partial_lockerroom} alt="" />
                        <p>Parcial</p>
                    </div>

                    <div className="legend-image">
                        <img src={forbidden_lockerroom} alt="" />
                        <p>Fechado</p>
                    </div>

                </div>
                
            </div>
        </div>
    );
}

export default legend;

