import Profile from "./media/1691224446516 (1).jpeg"
import "./card.css"

function Card(props){
    const {name,desc}  =props
    return(
        <>
            <div className="main">
                <img src={Profile} alt="" className="card_img"/>
                <h1 className="card_heading">{name}</h1>
                <p className="card_desc">{desc}</p>
                <button className="card_btn">More Info..</button>
            </div>
        </>
    )
}

export default Card;