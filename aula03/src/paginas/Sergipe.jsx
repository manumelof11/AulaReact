import { Link } from "react-router-dom";

export default function Sergipe()
{
    return(
        <div>
            <h1>Estado de Sergipe</h1>

            <div className="conteudo">

                <img src="/SE.png" />

                <p>
                Sergipe é um estado localizado na região Nordeste do Brasil e é o menor estado brasileiro em extensão
                territorial. Sua capital é Aracaju, conhecida por suas belas praias, orlas e áreas de lazer. O estado
                também possui atrações naturais, como o Cânion do Xingó, no rio São Francisco, além de praias e
                paisagens que atraem muitos turistas. Sergipe tem uma cultura rica, marcada por festas tradicionais,
                música, dança, artesanato e culinária típica. Apesar de seu pequeno território, o estado possui 
                grande importância histórica, cultural e turística para o Nordeste brasileiro.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
        </div>
    );
}