import { Link } from "react-router-dom";

export default function SaoPaulo()
{
    return(
        <div>
            <h1>Estado de São Paulo</h1>

            <div className="conteudo">

                <img src="/SP.png" />

                <p>
                O estado de São Paulo é o mais populoso do Brasil e desempenha um papel fundamental na economia, na cultura e 
                no desenvolvimento do país. Sua capital, a cidade de São Paulo, é um dos maiores centros financeiros da América
                Latina, reunindo empresas, universidades e instituições de grande relevância. Além da força econômica, o estado 
                se destaca pela diversidade cultural, resultado da influência de diferentes povos que contribuíram para sua formação
                ao longo da história. São Paulo também possui grande riqueza natural, com áreas de Mata Atlântica, serras, parques e
                um extenso litoral repleto de praias. Sua infraestrutura, aliada à produção agrícola e industrial, faz do estado um
                importante polo de inovação, comércio e geração de empregos, exercendo forte influência no cenário nacional.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
        </div>
    );
}