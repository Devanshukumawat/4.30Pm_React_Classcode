import myStyle from "./style.module.css"

function Style(){
    return(
        <>
            <div className={myStyle.main}>
                <h1 className="txt">Hello Class...!</h1>
                <button className={myStyle.btn_main}>More Info</button>
            </div>
        </>
    )
}

export default Style;