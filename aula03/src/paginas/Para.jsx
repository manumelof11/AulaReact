import { Link } from "react-router-dom";

export default function Para()
{
    return(
        <div>
            <h1>Estado do Pará</h1>

            <div className="conteudo">

                <img src="/PA.png" />

                <p>
                O Pará é um estado localizado na Região Norte do Brasil, tendo Belém como sua capital. É conhecido
                por sua grande área de Floresta Amazônica, seus rios e sua rica biodiversidade. Sua economia destaca-se 
                pela mineração, agricultura, pecuária e extrativismo. O estado também possui uma cultura muito rica, com
                forte influência indígena e amazônica, além de importantes festas e comidas típicas.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
        </div>
    );
}