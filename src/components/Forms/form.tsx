import './form.scss'
import useSearchContext from '../../hooks/useSearchContext';
import icon_hour from "../../assets/images/icon-hour.png";
import { useState } from 'react'

const Form = () => {


    const {
        closed,
        trainingPeriod,
        setTrainingPeriod,
        setClosed,
        numberOfUnits,
    } = useSearchContext();

    const [changeSelectedPeriod, setChangeSelectedPeriod] = useState(trainingPeriod);
    const [changeSelectedClose, setChangeSelectedClose] = useState(closed);

    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChangeSelectedPeriod(event.target.value);
    }

    const filteringGyms = () => {
        setTrainingPeriod(changeSelectedPeriod);
        setClosed(changeSelectedClose as boolean);
    }

    const handleClearFilters = () => {
        setTrainingPeriod("");
        setClosed(false);
        setChangeSelectedClose(false);
        setChangeSelectedPeriod("");
    }
    return (

        <div className="form-group">

            <div className="tittle-container">
                <img src={icon_hour} alt="" className="form-icon" />
                Horário
            </div>

            <h3>Qual periodo quer treinar? </h3>

            <div className="input-container">
                <input
                    type="radio"
                    name="training-period"
                    value="06h 12h"
                    id="morning"
                    checked={changeSelectedPeriod === "06h 12h"}
                    onChange={handleRadioChange}
                />
                <label htmlFor="morning">Manhã</label>
                <span>06:00 às 12:00</span>
            </div>

            <div className="input-container">
                <input
                    type="radio"
                    name="training-period"
                    value="12h 18h"
                    id="afternonn"
                    checked={changeSelectedPeriod === "12h 18h"}
                    onChange={handleRadioChange}
                />
                <label htmlFor="afternoon">Tarde</label>
                <span>12:01 às 18:00</span>
            </div>

            <div className="input-container">
                <input
                    type="radio"
                    name="training-period"
                    value="18h 21h"
                    id="evening"
                    checked={changeSelectedPeriod === "18h 21h"}
                    onChange={handleRadioChange}
                />
                <label htmlFor="night">Noite</label>
                <span>18:01 às 23:00</span>
            </div>

            <div className="checkbox-container">
                <div className="checkbox-wrapper">
                    <input
                        type="checkbox"
                        name="closed"
                        id="closed"
                        checked={changeSelectedClose as boolean}
                        onChange={() => setChangeSelectedClose((prev) => !prev)}
                    />
                    <label htmlFor="show-closed">Exibir unidades fechadas</label>
                </div>
                <span> Resultados encontrados: {numberOfUnits} </span>
            </div>

            <div className="btn-wrapper">
                <button className="btn btn-primary" onClick={filteringGyms}>
                    ENCONTRAR UNIDADE
                </button>
                <button className="btn btn-secondary" onClick={handleClearFilters}>
                    LIMPAR
                </button>
            </div>
        </div>
    )


}

export default Form;