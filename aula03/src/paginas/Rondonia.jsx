import { Link } from "react-router-dom";

export default function Rondonia()
{
    return(
        <div>
            <h1>Estado de Rondônia</h1>

            <div className="conteudo">

                <img src="/RO.png" />

                <p>
                Rondônia é um estado localizado na Região Norte do Brasil, tendo Porto Velho como sua capital. 
                É conhecido por suas florestas, rios e grande biodiversidade. Sua economia é baseada principalmente
                na agricultura, pecuária, mineração e comércio. O estado também possui forte influência da cultura
                amazônica e indígena, além de importantes áreas de preservação ambiental.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
        </div>
    );
}