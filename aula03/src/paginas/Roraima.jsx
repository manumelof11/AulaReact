import { Link } from "react-router-dom";

export default function Roraima()
{
    return(
        <div>
            <h1>Estado de Roraima</h1>

            <div className="conteudo">

                <img src="/RR.png" />

                <p>
                Roraima é um estado localizado na Região Norte do Brasil, tendo Boa Vista como sua capital. É conhecido por
                suas paisagens naturais, áreas de floresta e pelo Monte Roraima, uma de suas principais atrações. Sua economia
                é baseada principalmente na agricultura, pecuária, comércio e serviços. O estado também possui forte presença
                de povos indígenas e grande diversidade cultural e natural.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
        </div>
    );
}