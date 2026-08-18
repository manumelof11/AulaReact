import { Link } from "react-router-dom";

export default function Paraiba()
{
    return(
        <div>
            <h1>Estado da Paraíba</h1>

            <div className="conteudo">

                <img src="/PB.png" />

                <p>
                A Paraíba é um estado localizado na região Nordeste do Brasil, conhecido por suas belas praias,
                sua cultura e sua história. Sua capital é João Pessoa, uma das cidades mais antigas do país e
                famosa por suas praias, áreas verdes e pelo centro histórico. O estado também possui importantes
                atrações naturais, como as praias de Tambaú e Cabo Branco, além do litoral com águas quentes e 
                paisagens encantadoras. A cultura paraibana é marcada por festas tradicionais, como as celebrações
                de São João, além da música, da dança e da culinária típica. A Paraíba é, portanto, um estado de 
                grande importância cultural, histórica e turística para o Brasil.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
        </div>
    );
}