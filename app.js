//estamos criando uma função.
//o console mostra uma função de teste, "secreta". Não iremos deixa ele no código.
//No documento queriamos puxar a seção que tem o id, por isso o get id (puxa id seria a tradução) e o nome do id que queremos pegar (container).
//O createElement é para criar um elemento com o nome dele (no caso, seria o nome do art, pois ele cria um cartao toda vez q ele aparece) como ele tem uma class, preciamos falar para o js q ele precisa criar um cartao com uma classe especifica, por isso o classname e o nome da class.

//resumindo o createElement, ele busca um elemento pelo nome dele (o nosso seria o article), a cada art é criado um cartao  novo, com isso precisamos chamar todos esses cartões, no art essa classe se chama especificamente cartao, por isso ele esta ali.
    //o conteudo interno desse cartao (as coisas que estao dentro dele) vao ser igual

  function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'

    //o que eu fiz? eu usei o cifrao para chamar as classes q estavam la em cima, como criamos no "perguntas.js" as perguntas, resposats e etc, precisava aparecer aqui, por isso chamamos eles, podemos comentar oq esta no html pq chamamos ele no inner e colocamos como filho tbm, ent tudo q criarmos no js perguhtas, vai aparecer aq.
    //as funções criadads no "perguntas.js" estão todas aqui, sendo chamadas pelo $. o texto já está estruturado como estava no HTML, usando o css que foi editado por lá.

    cartao.innerHTML = `<div class="cartao__conteudo">
    <h3>${categoria}</h3>
    <div class="cartao__conteudo__pergunta">
        <p>${pergunta}</p>
    </div>
    <div class="cartao__conteudo__resposta">
        <p>${resposta}</p>
    </div>
</div>`


//criando uma variavel falsa
    let respostaEstaVisivel = false

    function viraCartao () {
      
      respostaEstaVisivel = !respostaEstaVisivel //de verdadeira vai para falso e vice versa

    //sabe aquela função que você tem? ativa ela (a que estava com hover no css, vc troca por active, de ativado.).O toggle ele força para que seja ou não ativada, e o nome da class q vamos ativar
      cartao.classList.toggle('active', respostaEstaVisivel) //Para usar o toggle colocamos a função que ela vai exercer e o nome da classe que vai exercer essa função (apenas a função precisa estar em aspas.)
    }

    //cartao, sempre q tiver um clique vc vira. para isso vamos adicionar um evento, qual eventos queremos? o "click", oq eu qro fazer quando tiver o click? "vire o cartao"

    //resumindo: o add é uma ação, quando clicado ele vai virar o cartão seja para qual lado for.
    cartao.addEventListener('click', viraCartao)

    //aqui junta os filho (cartao ) com o pai (container. nome do let) 
    container.appendChild(cartao) //estamos juntando o pai com o seu filho para que tudo isso possa acontecer
    //A linha de código container.appendChild(cartao) serve para adicionar o elemento cartao como um filho do elemento container na estrutura do HTML.
    //De forma simples: ela insere o cartão dentro do container na página. Se container for uma div, por exemplo, o cartao será exibido dentro dessa div. Ser inserido dentro da var q puxamos
}