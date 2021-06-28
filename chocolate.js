const prompt = require("prompt-sync")()
const LocalStorage = require("node-localstorage").LocalStorage
localStorage = new LocalStorage("./dados")

console.clear()

while (true) {
    titulo(' '.repeat(7) + 'Cadastro de Chocolates na Loja XYZ')
    console.log('1. Incluir Chocolate')
    console.log('2. Listar Chocolates')
    console.log('3. Pesquisar por Tipo')
    console.log('4. Excluir Chocolate')
    console.log('5. Estatística')
    console.log('6. Finalizar')
    console.log()

    const opcao = Number(prompt('Opção: '))
    if (opcao === 1) {
        incluir()
    } else if (opcao === 2) {
        listar()
    } else if (opcao === 3) {
        pesquisar()
    } else if (opcao === 4) {
        excluir()
    } else if (opcao === 5) {
        estatistica()
    } else if (opcao === 6) {
        break
    } else {
        console.log('Por favor, escolha uma das opções.')
    }
}

function titulo(texto) {
    console.log('-'.repeat(60))
    console.log(texto)
    console.log('-'.repeat(60))
}

function incluir() {
    titulo(' '.repeat(18) + 'Inclusão de Chocolates')

    while (true) {
        console.log('Escolha a marca: ')
        console.log('1. Lacta')
        console.log('2. Garoto')
        console.log('3. Nestlé')
        console.log('4. Prawer')
        console.log('5. Ferrero')
        console.log('6. Florybal')
        console.log('7. Kopenhagen')
        console.log('8. Cacau Show')
        console.log('9. Brasil Cacau')
        console.log()
        break
    }
    while (true) {
        var marca = Number(prompt('Marca do Chocolate: '))
        if (marca === 1) {
            marca = 'Lacta'
            break
        } else if (marca === 2) {
            marca = 'Garoto'
            break
        } else if (marca === 3) {
            marca = 'Nestlé'
            break
        } else if (marca === 4) {
            marca = 'Prawer'
            break
        } else if (marca === 5) {
            marca = 'Ferrero'
            break
        } else if (marca === 6) {
            marca = 'Florybal'
            break
        } else if (marca === 7) {
            marca = 'Kopenhagen'
            break
        } else if (marca === 8) {
            marca = 'Cacau Show'
            break
        } else if (marca === 9) {
            marca = 'Brasil Cacau'
            break
        } else {
            console.log('\nPor favor, escolha uma opção corretamente.')
        }
    }

    while (true) {
        console.log('\nEscolha o tipo: ')
        console.log('1. Ao Leite')
        console.log('2. Amargo')
        console.log()
        break
    }
    while (true) {
        var tipo = Number(prompt('Tipo do Chocolate: '))
        if (tipo === 1) {
            tipo = 'Ao Leite'
            break
        } else if (tipo === 2) {
            tipo = 'Amargo'
            break
        } else {
            console.log('\nPor favor, escolha uma opção corretamente.')
        }
    }

    while (true) {
        var preco = String(prompt('Preço R$: '))

        // remove o bug que o usuário cadastraria algo apertando a tecla espaço.
        preco = preco.replace(/\s/g, '')
        if (preco === '') {
            console.log('\nPor favor, digite uma valor corretamente.')
        } else if (!isNaN(preco)) {
            preco = (Number(preco)).toFixed(2)
            break
        } else {
            console.log('\nPor favor, digite uma valor corretamente.')
        }
    }

    let dados = ''
    // se já existe o arquivo Chocolates.txt

    if (localStorage.getItem('Chocolates.txt')) {
        // atribui a dados todo o conteúdo do arquivo + \n (quebra de linha)    
        dados = localStorage.getItem('Chocolates.txt') + '\n'
    }

    // salva os dados no arquivo Chocolates.txt
    localStorage.setItem('Chocolates.txt', `${dados}${marca};${tipo};${preco}`)
    console.log('\nOk! Chocolate cadastrado com sucesso.')
}

function listar() {
    titulo(' '.repeat(8) + 'Lista de Chocolates Cadastrados')

    // se não houver o arquivo
    if (!localStorage.getItem('Chocolates.txt')) {
        console.log('Obs.: Não há chocolates cadastrados.')
        return
    }

    console.log('Nº Marca do Chocolate....: Tipo' + '.'.repeat(15) + ': ' + 'Preço R$.: ')

    // obtém o conteúdo do arquivo e atribui para a variável Chocolates
    const Chocolates = localStorage.getItem('Chocolates.txt')

    // cria elementos de vetor a cada ocorrência da '\n'
    const linhas = Chocolates.split('\n')

    let num = 0

    for (linha of linhas) {

        const partes = linha.split(";")
        const marca = partes[0]
        const tipo = partes[1]
        const preco = Number(partes[2])
        num++

        console.log(`${String(num).padStart(2)} ${marca.padEnd(25)} ${tipo.padEnd(20)} ${preco.toFixed(2).padStart(10)}`)
    }
}

function pesquisar() {
    titulo(' '.repeat(18) + 'Pesquisa de Chocolates')

    // se não houver o arquivo
    if (!localStorage.getItem('Chocolates.txt')) {
        console.log('Obs.: Não há chocolates cadastrados.')
        return
    }

    while (true) {
        console.log('\nEscolha o tipo: ')
        console.log('1. Ao Leite')
        console.log('2. Amargo')
        console.log()
        break
    }

    while (true) {
        var pesquisa = Number(prompt('Opção: '))
        if (pesquisa === 1) {
            pesquisa = 'Ao Leite'
            break
        } else if (pesquisa === 2) {
            pesquisa = 'Amargo'
            break
        } else {
            console.log('\nPor favor, escolha uma opção corretamente.')
        }
    }

    console.log('\nNº Marca do Chocolate....: Tipo' + '.'.repeat(15) + ': ' + 'Preço R$.: ')

    // obtém o conteúdo do arquivo e atribui para a variável Chocolates
    const Chocolates = localStorage.getItem('Chocolates.txt')

    // cria elementos de vetor a cada ocorrência da '\n'
    const linhas = Chocolates.split('\n')

    let num = 0

    for (linha of linhas) {

        const partes = linha.split(";")
        const marca = partes[0]
        const tipo = partes[1]
        const preco = Number(partes[2])

        if (tipo === pesquisa) {
            num++
            console.log(`${String(num).padStart(2)} ${marca.padEnd(25)} ${tipo.padEnd(20)} ${preco.toFixed(2).padStart(10)}`)
        }
    }
    if (num == 0) {
        console.log(`\nNão há Chocolates do tipo "${pesquisa}".`)
    }
}
function excluir() {
    listar()

    const numExc = Number(prompt("\nNº do Chocolate a ser excluído (0, para voltar)? "))

    if (numExc === 0) {
        return
    }

    // obtém todo o conteúdo do arquivo Chocolates.txt
    const Chocolates = localStorage.getItem('Chocolates.txt')

    // separa em linhas os elementos do vetor
    const linhas = Chocolates.split('\n')

    // remove da linha informada (-1, por o vetor inicia em 0) e a quantidade de 1 linha
    linhas.splice(numExc - 1, 1)

    // salva no arquivo o novo conteúdo do vetor (sem a linha removida)
    localStorage.setItem('Chocolates.txt', linhas.join('\n'))

    console.log('Ok! Chocolate removido com sucesso!')
}
function estatistica() {
    titulo(' '.repeat(6) + 'Estatística de Chocolates Cadastrados')

    // obtém o conteúdo do arquivo e atribui para a variável Chocolates
    const Chocolates = localStorage.getItem('Chocolates.txt')

    // cria elementos de vetor a cada ocorrência da '\n'
    const linhas = Chocolates.split('\n')

    let num = 0
    let total = 0
    let maior = 0
    let Chocolate = ''

    for (linha of linhas) {
        partes = linha.split(";")
        marca = partes[0]
        preco = Number(partes[2])
        num++
        total += preco

        if (preco > maior) {
            maior = preco
            Chocolate = marca
        }
    }
    const media = total / num

    console.log(`Nº de Chocolates Cadastrados...: ${num}`)
    console.log(`Total do Preço dos Chocolates..: ${total.toFixed(2)}`)
    console.log(`Preço Médio dos Chocolates R$..: ${media.toFixed(2)}`)
    console.log(`Chocolate de Maior Preço R$....: ${maior.toFixed(2)} - ${Chocolate}`)
}