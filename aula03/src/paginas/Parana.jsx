import { Link } from "react-router-dom";

export default function Parana()
{
    return(
        <div>
            <h1>Estado do Paraná</h1>

            <div className="conteudo">

                <img src="/PR.png" />

                <p>
                O Paraná é um estado localizado na Região Sul do Brasil e tem como capital a cidade de Curitiba. É um dos
                estados mais importantes do país, destacando-se pela sua economia diversificada, baseada principalmente na
                agricultura, na pecuária, na indústria e no comércio. O Paraná é um grande produtor de soja, milho, trigo,
                café e outros produtos agrícolas, além de possuir uma forte produção de carnes. O estado também é conhecido 
                por suas belas paisagens naturais, como as famosas Cataratas do Iguaçu, a Ilha do Mel, a Serra do Mar e o 
                Parque Estadual de Vila Velha. Sua cultura é bastante diversificada devido à influência de diferentes povos
                que chegaram ao estado ao longo da história, principalmente poloneses, ucranianos, italianos, alemães e
                japoneses, além da importante presença indígena e afro-brasileira. O Paraná possui cidades importantes, 
                como Curitiba, Londrina, Maringá, Cascavel, Ponta Grossa e Foz do Iguaçu, e apresenta uma combinação de áreas
                urbanas desenvolvidas, regiões agrícolas e ambientes naturais. Por sua localização, diversidade cultural, 
                riqueza natural e importância econômica, o Paraná é considerado um dos estados de grande destaque no Brasil.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
        </div>
    );
}