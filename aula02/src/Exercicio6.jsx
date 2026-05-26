export default function Exercicio6({ capital, taxa, tempo })
{
    const JuroSimples = capital * (1 + (taxa / 100) * tempo);
    const jurosCompostos = capital * Math.pow(1+ taxa /100, tempo);

    return(
        <div>
            Capital Inicial = R${capital.toFixed(2)}
            <br />
            <br />
            Montante (Juro Simples) = R${JuroSimples.toFixed(2)}
            <br></br>
            Montante (Juros Compostos) = R${jurosCompostos.toFixed(2)}
            <br />
            <br />
        </div>
    );
}