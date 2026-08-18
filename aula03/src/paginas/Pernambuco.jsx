import { Link } from "react-router-dom";

export default function Pernambuco()
{
    return(
        <div>
            <h1>Estado de Pernambuco</h1>

            <div className="conteudo">

                <img src="/PE.png" />

                <p>
                Pernambuco é um estado localizado na região Nordeste do Brasil, conhecido por sua rica cultura, 
                suas belas praias e sua importância histórica. Sua capital é Recife, uma cidade famosa por seus
                rios, pontes, construções históricas e pelo frevo. O estado também possui destinos turísticos
                muito conhecidos, como Porto de Galinhas e o arquipélago de Fernando de Noronha. Além disso,
                Pernambuco se destaca por suas festas tradicionais, como o Carnaval e as celebrações de São João,
                além de sua culinária típica. Com suas paisagens, tradições e história, Pernambuco é um dos estados
                mais importantes e visitados do Nordeste brasileiro.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
        </div>
    );
}