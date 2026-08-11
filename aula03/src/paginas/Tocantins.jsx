import { Link } from "react-router-dom";

export default function Tocantins()
{
    return(
        <div>
            <h1>Estado do Tocantins</h1>

            <div className="conteudo">

                <img src="/TO.png" />

                <p>
                Tocantins é um estado localizado na Região Norte do Brasil, tendo Palmas como sua capital. É conhecido 
                por suas belas paisagens naturais, rios e cachoeiras. Sua economia é baseada principalmente na agricultura,
                pecuária, comércio e serviços. O estado também possui importantes atrações turísticas, como o Jalapão, 
                conhecido por suas dunas, cachoeiras e paisagens naturais.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
        </div>
    );
}