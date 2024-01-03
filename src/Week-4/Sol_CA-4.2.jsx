
export default function ClickToAlert() {

    function handle(e) {
        alert(`Hey! you clicked : ${e.target.id}`)
    }

    const topStyle = {
        width:'50%',
        margin:' 10% auto'
    }

    const Style= {
        display: 'flex',
        justifyContent: 'space-evenly'
    }

    const borderStyle = {
        border:'2px solid black'
    }
    return(
        <div style={topStyle}>
            <div style={Style} className="textWay">
                <div  className="textDiv">
                    <p id="divTag-1" onClick={handle}>I am DIV</p>
                </div>
                <div className="textSpan">
                    <span id="spanTag-1" onClick={handle}>I am SPAN</span>
                </div>
                <div className="textButton">
                    <input id="buttonTag-1" onClick={handle} type="button" value="I am Button" />
                </div>
                <div className="textLink">
                    <a id="linkTag<a>1</a>" onClick={handle} href="htts://">I am LINK</a>
                </div>
            </div>
            <div style={Style} className="buttonWay">
                <div className="buttonDiv">
                    <div style={borderStyle} id="divTag-2" onClick={handle} className="">I am DIV</div>
                </div>
                <div className="buttonSpan">
                    <span style={borderStyle} id="spanTag-2" onClick={handle}>I am SPAN</span>
                </div>
                <div className="buttonButton">
                    <p style={borderStyle} id="buttonTag-2" onClick={handle}>I am Button</p>
                </div>
                <div className="buttonLink">
                    <a style={borderStyle} href="." id="linkTag<a></a>" onClick={handle} >I am LINK</a>
                </div>
            </div>
        </div>
    )
}