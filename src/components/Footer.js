import React from "react"
import { DivFooter, CosmozetaDoFooter, FormaDePagamento, RedesSociais, FaleConosco,
BaixeOApp } from '../style';
import visa from '../img/visa.png'
import mastercard from '../img/mastercard.jpg'
import elo from '../img/elo.png'
import pix from '../img/pix.png'
import twitter from '../img/twitter.png'
import instagram from '../img/instagram.png'
import facebook from '../img/facebook.jpg'
import whatsapp from '../img/whatsapp.png'
import googleplay from '../img/google-play.png'
import app_store from '../img/app-store.png'


function Footer() {
    return (
        <DivFooter>
            <CosmozetaDoFooter>
                <h3>CosmoZeta</h3>
                <div>
                <p>Rua 9 de Janeiro, 123</p>
                <p>Conjunto 028</p>
                <p>Liberdade</p>
                <p>CNPJ 01.329.134/0001-20</p>
                </div>
            </CosmozetaDoFooter>

            <FormaDePagamento>
                <h3>Formas de pagamento</h3>
                <div>
                <img src={visa} />
                <img src={mastercard} />
                <img src={elo}/>
                <img src={pix}/>
                </div>
            </FormaDePagamento>

            <RedesSociais>
                <h3>Redes Sociais</h3>
                <div>
                <img src={twitter}/>
                <img src={facebook}/>
                <img src={instagram}/>
                <img src={whatsapp} />
                </div>
            </RedesSociais>

            <FaleConosco>
                <h3>Fale conosco</h3>
                <div>
                <p>+55 11 99999-8888</p>
                <p>contato@cosmozeta.com</p>
                </div>
            </FaleConosco>

            <BaixeOApp>
                <h3>Baixe o App</h3>
                <div>
                <img src={app_store} />
                <img src={googleplay} />
                </div>
            </BaixeOApp>

    </DivFooter>
)
}

export default Footer