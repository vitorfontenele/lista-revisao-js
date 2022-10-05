// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!!
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()

// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  return array.length;
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse();
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort((a, b) => a - b);
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  return array.filter((element) => element % 2 == 0);
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  let pares = retornaNumerosPares(array);
  return pares.map((element) => element ** 2);
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let maior = array[0];
  for (element of array) {
    if (element > maior) {
      maior = element;
    }
  }
  return maior;
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  let maiorNumero = num1;
  let menorNumero = num2;
  if (num2 > num1) {
    menorNumero = num1;
    maiorNumero = num2;
  }
  let maiorDivisivelPorMenor = !(maiorNumero % menorNumero);
  let diferenca = maiorNumero - menorNumero;
  return { maiorNumero, maiorDivisivelPorMenor, diferenca };
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  let nPrimeirosPares = [];
  for (let i = 0; i < n; i++) {
    nPrimeirosPares.push(2 * i);
  }
  return nPrimeirosPares;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  let verif1 = ladoA === ladoB;
  let verif2 = ladoA === ladoC;
  let verif3 = ladoB === ladoC;
  if (verif1 && verif2) {
    return "Equilátero";
  } else if (verif1 || verif2 || verif3) {
    return "Isósceles";
  } else {
    return "Escaleno";
  }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  if (array.length <= 1) {
    return array + array;
  } else {
    let arrayOrdenado = retornaArrayOrdenado(array);
    let segundoMaior = arrayOrdenado.slice(-2)[0]; //[3, 4]
    let segundoMenor = arrayOrdenado[1]; //[1, 2, 3, 4, 5]
    return [segundoMaior, segundoMenor];
  }
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  let elenco = "";
  //filmes.atores = ["Ator 1", "Ator 2", "Ator 3"]
  for (ator of filme.atores) {
    elenco += ator + ", ";
  }
  elenco = elenco.slice(0, -2); //"Ator 1, Ator 2, Ator 3, "
  return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${elenco}.`;
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {}
