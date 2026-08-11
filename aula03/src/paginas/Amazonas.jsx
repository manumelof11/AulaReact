import { Link } from "react-router-dom";

export default function Amazonas()
{
    return(
        <div>
            <h1>Estado do Amazonas</h1>

            <div className="conteudo">

                <img src="/AM.png" />

                <p>
                O Amazonas é um estado localizado na Região Norte do Brasil, tendo Manaus como sua capital. É 
                conhecido por abrigar grande parte da Floresta Amazônica, além de possuir muitos rios e uma rica
                biodiversidade. Sua economia destaca-se pelo comércio, pela indústria e pelo turismo. O estado também possui
                forte influência das culturas indígena e amazônica e tem grande importância para a preservação ambiental.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
        </div>
    );
}