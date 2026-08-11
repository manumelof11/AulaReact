import { Link } from "react-router-dom";

export default function Amapa()
{
    return(
        <div>
            <h1>Estado do Amapá</h1>

            <div className="conteudo">

                <img src="/AP.png" />

                <p>
                O Amapá é um estado localizado na Região Norte do Brasil, tendo Macapá como sua capital.
                É conhecido por suas florestas, rios e grande biodiversidade. Sua economia é baseada principalmente
                no comércio, na agricultura, na mineração e no extrativismo. O estado também possui forte influência
                da cultura indígena e amazônica e abriga importantes áreas de preservação ambiental.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
        </div>
    );
}