import { Link } from "react-router-dom";

export default function Ceara()
{
    return(
        <div>
            <h1>Estado do Ceará</h1>

            <div className="conteudo">

                <img src="/CE.png" />

                <p>
                O Ceará é um estado localizado na região Nordeste do Brasil, conhecido por suas belas praias,
                paisagens naturais e rica cultura. Sua capital é Fortaleza, uma cidade bastante visitada por
                turistas devido às praias, ao clima quente e às atrações culturais. O estado também se destaca
                por sua culinária, suas festas tradicionais, seu artesanato e pela presença de lugares como 
                Jericoacoara e Canoa Quebrada. Além disso, o Ceará possui uma história marcada pela força e
                pela criatividade de seu povo, sendo uma região de grande importância cultural e turística para o Brasil.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
        </div>
    );
}