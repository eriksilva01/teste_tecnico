
//TESTE TÉCNICO DE ENTREVISTA
// Converta o array "wrongDataFormat" para o objeto do comentário abaixo.

const wrongDataFormat = [
    'preto-PP',
    'preto-M',
    'preto-G',
    'preto-GG',
    'preto-GG',
    'branco-PP',
    'branco-G',
    'vermelho-M',
    'azul-XG',
    'azul-XG',
    'azul-XG',
    'azul-P'
  ]
  

  const correctFormat = wrongDataFormat.reduce((acc,colorAndSize) => {
    // 1- passo: separar a cor e o tamanho
    const [color, size] = colorAndSize.split('-')
    // 2- passo: criar a propriedade da cor dentro do objeto criado no reduce que armazena um objeto vazio
    acc[color] = acc[color] || {}
    // 3- passo: criar uma propriedade com o tamanho que armazena 0
    acc[color][size] = acc[color][size] || 0 
    //4- passo: mantendo a expressão acima posso incrementar +1
    acc[color][size] += 1
     return acc
  }, {})
  console.log(correctFormat)
  
  /* RESULTADO
    {
      preto: {
        PP: 1,
        M: 1,
        G: 1,
        GG: 2
      },
      branco: {
        PP: 1,
        G: 1
      },
      vermelho: {
        M: 1
      },
      azul: {
        XG: 3,
        P: 1
      }
    }
  */
