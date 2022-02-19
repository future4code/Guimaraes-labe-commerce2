import React from "react"
import { DivHeader, CometaLogo} from '../style';
import lupa from "../img/lupa.png"
import cometa from "../img/cometa.png"

function Header() {
    return (
        <DivHeader>
            <CometaLogo src={cometa} />
            <h1>CosmoZeta</h1>
                <div>
                {/* <input type="text" placeholder="Busca"/>
                <img src={lupa} /> */}
            </div>
        </DivHeader>
)
}

export default Header