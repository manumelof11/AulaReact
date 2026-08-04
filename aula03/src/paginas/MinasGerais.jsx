import { Link } from "react-router-dom"

export default function MinasGerais()
{
    return(
        <div>
            <h1>Estado de Minas Gerais</h1>

            <div className="conteudo">

            <img src="/MG.png" />

            <p>
            O estado de Minas Gerais está localizado na região Sudeste do Brasil e é conhecido por sua rica
            história, patrimônio cultural e grande importância econômica. Sua capital, Belo Horizonte, é um 
            importante centro urbano, cultural e gastronômico. Minas Gerais possui uma economia diversificada,
            com destaque para a mineração, a produção de café, a agropecuária, a indústria e o setor de serviços.
            O estado também é reconhecido por suas cidades históricas, como Ouro Preto, Tiradentes e São João del-Rei,
            que preservam importantes construções do período colonial. Além disso, a culinária mineira, famosa por
            pratos como pão de queijo, feijão-tropeiro e doce de leite, é uma das mais apreciadas do país. Com belas
            paisagens naturais, serras, cachoeiras e parques, Minas Gerais reúne tradição, desenvolvimento e grande
            relevância para a história e a cultura do Brasil.
            </p>

            <p>
                    <Link to="/">Voltar</Link>
            </p>
            
            </div>            
        </div>
    );
}