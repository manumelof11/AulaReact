import { Link } from "react-router-dom";

export default function Goias()
{
    return(
        <div>
            <h1>Estado de Goiás</h1>

            <div className="conteudo">

                <img src="/GO.png" />

                <p>
                Goiás é um estado localizado na Região Centro-Oeste do Brasil, tendo Goiânia como sua capital.
                O estado possui grande importância para a economia brasileira, principalmente pela agricultura,
                pecuária, indústria e mineração. Goiás é um dos grandes produtores de soja, milho, cana-de-açúcar
                e carnes do país, além de possuir importantes áreas de produção agrícola. O estado também se destaca
                por suas belezas naturais, com cachoeiras, rios, chapadas e parques, como o Parque Nacional da
                Chapada dos Veadeiros, conhecido por suas paisagens e grande biodiversidade. Entre as cidades
                históricas, destaca-se a Cidade de Goiás, que preserva construções antigas e tradições culturais.
                A cultura goiana também é marcada pela música sertaneja, pela culinária típica e por festas tradicionais.
                Além de Goiânia, cidades como Anápolis, Rio Verde, Caldas Novas e Pirenópolis possuem grande importância 
                econômica, turística ou histórica. Por sua riqueza natural, produção agropecuária, cultura e desenvolvimento
                econômico, Goiás é um dos estados de maior destaque da Região Centro-Oeste do Brasil.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
        </div>
    );
}