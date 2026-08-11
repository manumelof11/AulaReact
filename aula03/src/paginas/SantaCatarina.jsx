import { Link } from "react-router-dom";

export default function SantaCatarina()
{
    return(
        <div>
            <h1>Estado de Santa Catarina</h1>

            <div className="conteudo">

                <img src="/SC.png" />

                <p>
                Santa Catarina é um estado localizado na Região Sul do Brasil, tendo Florianópolis como sua capital. 
                O estado é conhecido por suas belas praias, montanhas, cachoeiras e paisagens naturais, sendo um destino
                muito procurado por turistas. Entre os lugares mais conhecidos estão Florianópolis, Balneário Camboriú,
                Blumenau, Joinville e a Serra Catarinense. Sua economia é bastante diversificada, destacando-se a indústria,
                a agricultura, a pecuária, o comércio e o turismo. Santa Catarina possui forte influência de imigrantes europeus,
                principalmente alemães, italianos e portugueses, que contribuíram para a formação de sua cultura, arquitetura,
                culinária e tradições. O estado também se destaca pela qualidade de vida de várias de suas cidades e pela
                diversidade de suas paisagens, que vão desde o litoral até as regiões serranas, onde as temperaturas podem
                ser bastante baixas no inverno. Por sua beleza natural, desenvolvimento econômico e riqueza cultural,
                Santa Catarina é considerado um dos estados de maior destaque da Região Sul do Brasil.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
        </div>
    );
}