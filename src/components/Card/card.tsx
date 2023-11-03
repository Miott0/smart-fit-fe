import './card.scss';

import { DataResponseType } from "../../types";
import Image from "../Image";
import { ImageStatus } from "../../types";
import DOMPurify from "dompurify";

const Card  = (props : DataResponseType) => {
    const sanitizedContent = DOMPurify.sanitize(props.content || "");

    return(
        <div className="card">

            {
                props.opened
                ? <span className="open">Aberto</span>
                : <span className="close">Fechado</span>
            }

            <h3 className="cardTitle">{props.title}</h3>

            <div 
                className="cardAddress" 
                data-testid= {`card-addres-${props.id}`}
                dangerouslySetInnerHTML={{__html: sanitizedContent}}
            />

            {

                props.opened 
                ? (
                    <>
                        <div className="cardImages">
                            <Image type="mask" status={props.mask as ImageStatus} />
                            <Image type="towel" status={props.towel as ImageStatus} />
                            <Image type="fountain" status={props.fountain as ImageStatus} />
                            <Image type="locker_room" status={props.locker_room as ImageStatus} />
                        </div>

                        <div className="cardShedules">
                            {
                                props.schedules?.map((shedule, index) =>(
                                    <div>
                                        <h4 data-testid={`schedule-tittle-${index}`}>{shedule.weekdays}</h4>
                                        <p data-testid={`schedule-paragraph-${index}`}>{shedule.hour}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </>
                )
                :null
            }
        </div>
    );
};

export default Card;