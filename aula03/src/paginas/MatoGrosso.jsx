import { Link } from "react-router-dom";

export default function MatoGrosso()
{
    return(
        <div>
            <h1>Estado do Mato Grosso</h1>

            <div className="conteudo">

                <img src="/MT.png" />

                <p>
                Mato Grosso é um estado localizado na Região Centro-Oeste do Brasil, 
                tendo Cuiabá como sua capital. É conhecido por sua grande extensão territorial
                e por possuir importantes áreas naturais, incluindo partes da Amazônia, do 
                Cerrado e do Pantanal. Sua economia é baseada principalmente na agricultura e
                na pecuária, sendo um dos maiores produtores de soja, milho e algodão do país. 
                O estado também possui grande diversidade de animais e plantas, além de belas paisagens 
                e rios. Entre suas atrações naturais estão o Pantanal e o Parque Nacional da Chapada dos 
                Guimarães. Mato Grosso também possui cidades importantes, como Cuiabá, Rondonópolis e Sinop,
                e tem grande importância para a produção de alimentos no Brasil.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
        </div>
    );
}