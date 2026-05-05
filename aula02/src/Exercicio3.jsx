export default function Exercicio3 ( {nota1,nota2} )
{
    let media = Number(nota1) + (nota2) /2

    return(
        <div>
            A média das notas é {media} e a situação é Aprovado.
        </div>
    )
}