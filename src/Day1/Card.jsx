import Profile from "./media/1691224446516 (1).jpeg"
import "./card.css"

function Card(){
    return(
        <>
            <div className="main_card_div">
                <img src={Profile} alt="" className="card_img"/>
                <h1 className="card_heading">Card Title</h1>
                <p className="card_desc">Card Description</p>
                <button className="card_btn">More Info..</button>
            </div>
        </>
    )
}

export default Card;