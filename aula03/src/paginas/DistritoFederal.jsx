import { Link } from "react-router-dom";

export default function DistrioFederal()
{
    return(
        <div>
            <h1>Distrito Federal</h1>

            <div className="conteudo">

                <img src="/DF.png" />

                <p>
                O Distrito Federal está localizado na Região Centro-Oeste do Brasil e tem como principal cidade Brasília,
                que também é a capital do país. Diferentemente dos outros estados brasileiros, o Distrito Federal não possui 
                municípios, sendo dividido em regiões administrativas. Brasília é conhecida por sua arquitetura moderna e por
                abrigar importantes órgãos do governo federal, como o Congresso Nacional, o Supremo Tribunal Federal e o Palácio
                do Planalto. A economia do Distrito Federal está principalmente ligada aos serviços, ao comércio e às atividades
                administrativas. A região também possui áreas de Cerrado, parques e belas paisagens naturais. Por ser o centro
                político do Brasil, o Distrito Federal possui grande importância para a organização e o funcionamento do país.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
        </div>
    );
}