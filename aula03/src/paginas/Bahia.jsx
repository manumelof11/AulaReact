import { Link } from "react-router-dom";

export default function Bahia()
{
    return(
        <div>
            <h1>Estado da Bahia</h1>

            <div className="conteudo">

                <img src="/BA.png" />

                <p>
                A Bahia é um estado localizado na Região Nordeste do Brasil, tendo Salvador como sua capital. É conhecida 
                por suas belas praias, paisagens naturais e grande diversidade cultural. Sua economia destaca-se pelo turismo,
                 agricultura, indústria, comércio e produção de petróleo. A Bahia também possui uma forte influência africana, 
                 indígena e portuguesa, presente em sua música, culinária, festas e tradições.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
        </div>
    );
}