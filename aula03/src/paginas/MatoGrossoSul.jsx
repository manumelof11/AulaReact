import { Link } from "react-router-dom";

export default function MatoGrossoSul()
{
    return(
        <div>
            <h1>Estado do Mato Grosso do Sul</h1>

            <div className="conteudo">

                <img src="/MS.png" />

                <p>
                Mato Grosso do Sul é um estado localizado na Região Centro-Oeste do Brasil, tendo Campo Grande como
                sua capital. O estado é conhecido principalmente por suas belezas naturais, com destaque para o Pantanal,
                uma das maiores áreas alagadas do mundo, e para a região de Bonito, famosa por seus rios de águas cristalinas,
                cachoeiras e cavernas. Sua economia é baseada principalmente na agricultura, na pecuária, na indústria e no
                turismo, com destaque para a produção de soja, milho e carne bovina. Mato Grosso do Sul possui uma grande 
                diversidade de animais e plantas e também faz fronteira com o Paraguai e a Bolívia. Por sua riqueza natural,
                importância econômica e potencial turístico, o estado tem grande destaque na região Centro-Oeste do Brasil.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
        </div>
    );
}