import { Link } from "react-router-dom";

export default function Alagoas()
{
    return(
        <div>
            <h1>Estado de Alagoas</h1>

            <div className="conteudo">

                <img src="/AL.png" />

                <p>
                Alagoas é um estado localizado na Região Nordeste do Brasil, tendo Maceió como sua capital. É conhecido por
                 suas belas praias, piscinas naturais e águas cristalinas. Sua economia é baseada principalmente no turismo,
                  agricultura, comércio e serviços. O estado também possui uma cultura rica, com destaque para suas festas,
                   músicas e comidas típicas.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
        </div>
    );
}