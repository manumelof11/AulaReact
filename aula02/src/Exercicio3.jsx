export default function Exercicio3 ( {nota1,nota2} )
{
    let media = (Number(nota1) + Number(nota2)) /2

    let situacao = media >=6 ? "Aprovado" : "Reprovado";

    return(
        <div>
            
            A média do aluno é: {media} e a situação é {situacao}

        </div>
    )
}