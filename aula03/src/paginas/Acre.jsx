import { Link } from "react-router-dom";

export default function Acre()
{
    return(
        <div>
            <h1>Estado do Acre</h1>

            <div className="conteudo">

                <img src="/AC.png" />

                <p>
                O Acre é um estado localizado na Região Norte do Brasil, tendo Rio Branco como sua capital. É conhecido 
                por suas grandes áreas de floresta amazônica, rios e rica biodiversidade. Sua economia é baseada principalmente 
                na agricultura, na pecuária e no extrativismo, com destaque para a produção de castanha, borracha e madeira.
                O estado também possui forte influência da cultura indígena e da história dos seringueiros, que tiveram grande 
                importância na formação da região. Entre suas principais cidades estão Rio Branco, Cruzeiro do Sul e Sena Madureira. 
                Por sua riqueza natural e importância para a preservação da Amazônia, o Acre possui grande destaque na Região Norte 
                do Brasil.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
        </div>
    );
}