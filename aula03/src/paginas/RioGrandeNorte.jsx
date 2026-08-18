import { Link } from "react-router-dom";

export default function RioGrandeNorte()
{
    return(
        <div>
            <h1>Estado do Rio Grande do Norte</h1>

            <div className="conteudo">

                <img src="/RN.png" />

                <p>
                O Rio Grande do Norte é um estado localizado na região Nordeste do Brasil,
                conhecido por suas belas praias, dunas e paisagens naturais. Sua capital é
                Natal, uma cidade bastante visitada por turistas e famosa por suas praias,
                pelo Forte dos Reis Magos e pelo Morro do Careca. O estado também se destaca
                por lugares como Pipa e Genipabu, que atraem visitantes de várias partes do
                país. Além disso, possui uma cultura rica, com festas tradicionais, música,
                dança e uma culinária típica bastante diversificada. Com suas belezas naturais
                e tradições, o Rio Grande do Norte é um importante destino turístico brasileiro.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
        </div>
    );
}