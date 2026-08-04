import { Link } from "react-router-dom";

export default function EspiritoSanto()
{
    return(
        <div>
            <h1>Estado do Espírito Santo</h1>

            <div className="conteudo">

                <img src="/ES.png"/>

                <p>
                O estado do Espírito Santo está localizado na região Sudeste do Brasil e é conhecido por suas belas
                praias, montanhas e rica diversidade natural. Sua capital, Vitória, destaca-se pela qualidade de
                vida e pela importância econômica para o estado. O Espírito Santo possui uma economia diversificada,
                com forte atuação nos setores de mineração, siderurgia, agricultura, produção de café e atividades
                portuárias. Além disso, o estado preserva tradições culturais influenciadas por diferentes povos,
                refletidas na gastronomia, no artesanato e nas festas populares. Com paisagens que vão do litoral
                às regiões serranas, o Espírito Santo oferece atrações turísticas variadas e desempenha um papel
                importante no desenvolvimento econômico e cultural do Brasil.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>
                
            </div>
        </div>
    );
}