import { Link } from "react-router-dom"

export default function RioJaneiro()
{
    return(
        <div>
            <h1>Estado do Rio de Janeiro</h1>

            <div className="conteudo">

                <img src="/RJ.png" />

                <p>
                O estado do Rio de Janeiro está localizado na região Sudeste do Brasil e é conhecido por 
                suas belas paisagens naturais, sua rica cultura e sua importância histórica. Sua capital,
                a cidade do Rio de Janeiro, abriga alguns dos principais cartões-postais do país, como o
                Cristo Redentor, o Pão de Açúcar e as praias de Copacabana e Ipanema. A economia do estado 
                é diversificada, com destaque para os setores de petróleo e gás, turismo, comércio, indústria
                e serviços. O Rio de Janeiro também é reconhecido por suas manifestações culturais, como o Carnaval,
                o samba e a bossa nova, que atraem visitantes de todo o mundo. Com uma combinação de belezas naturais,
                patrimônio histórico e forte influência cultural, o estado ocupa uma posição de destaque no cenário nacional.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
        </div>
    );
}