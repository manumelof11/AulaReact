import { Link } from "react-router-dom";

export default function Piaui()
{
    return(
        <div>
            <h1>Estado do Piauí</h1>

            <div className="conteudo">

                <img src="/PI.png" />

                <p>
                O Piauí é um estado localizado na região Nordeste do Brasil, conhecido por suas belezas naturais,
                sua cultura e sua importância histórica. Sua capital é Teresina, uma cidade marcada pelo clima
                quente e pela presença de rios. O estado possui atrações como o Parque Nacional da Serra da Capivara,
                famoso pelas pinturas rupestres e pelos sítios arqueológicos. O Piauí também se destaca por sua
                culinária típica, suas festas tradicionais e suas paisagens naturais. Com sua rica história e
                diversidade, o Piauí é um importante estado da região Nordeste do Brasil.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
        </div>
    );
}