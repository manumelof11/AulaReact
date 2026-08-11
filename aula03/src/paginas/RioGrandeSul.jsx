import { Link } from "react-router-dom";

export default function RioGrandeSul()
{
    return(
        <div>
            <h1>Estado do Rio Grande do Sul</h1>

            <div className="conteudo">

                <img src="/RS.png" />

                <p>
                O Rio Grande do Sul é um estado localizado na Região Sul do Brasil, tendo Porto Alegre como sua capital.
                É conhecido por sua forte identidade cultural, suas belas paisagens e sua importância econômica. O estado
                possui uma economia diversificada, com destaque para a agricultura, a pecuária, a indústria e o comércio,
                sendo um grande produtor de soja, arroz, trigo, uva e carnes. Entre suas principais atrações naturais
                estão os cânions da Serra Geral, as praias do litoral e as paisagens da Serra Gaúcha. A cultura gaúcha
                é muito marcante e valoriza tradições como o chimarrão, o churrasco, as músicas e as danças típicas, 
                além dos costumes ligados à vida no campo. O estado também recebeu muitos imigrantes europeus, principalmente
                italianos e alemães, que influenciaram sua arquitetura, culinária e tradições. Cidades como Gramado, Canela
                , Caxias do Sul, Bento Gonçalves e Pelotas são importantes para o turismo e para a economia. Por sua
                diversidade cultural, riqueza natural e importância na produção agrícola e industrial, o Rio Grande do Sul
                possui grande destaque entre os estados brasileiros.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
        </div>
    );
}