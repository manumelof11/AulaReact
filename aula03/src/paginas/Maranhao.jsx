import { Link } from "react-router-dom";

export default function Maranhao()
{
    return(
        <div>
            <h1>Estado do Maranhão</h1>

            <div className="conteudo">

                <img src="/MA.png" />

                <p>
                O Maranhão é um estado localizado na região Nordeste do Brasil, conhecido por sua rica cultura,
                suas belezas naturais e sua diversidade. Sua capital é São Luís, famosa pelo centro histórico
                com casarões e construções coloniais. O estado também se destaca pelo Parque Nacional dos Lençóis
                Maranhenses, com suas enormes dunas e lagoas de águas cristalinas, além de festas tradicionais 
                como o Bumba Meu Boi. A culinária maranhense também é bastante diversificada, com pratos que valorizam 
                ingredientes típicos da região. Com suas paisagens e tradições, o Maranhão é um importante destino
                turístico e cultural do Brasil.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
        </div>
    );
}