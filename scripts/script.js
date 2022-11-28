const imgs = [
    {'id' : '2', 'url': './img/meusprojetos/Captura de Tela (33).png'},
    {'id' : '1', 'url': './img/meusprojetos/Captura de Tela (31).png'},
    {'id' : '3', 'url': './img/meusprojetos/Captura de Tela (31).png'},
    {'id' : '4', 'url': './img/meusprojetos/Captura de Tela (32).png'},
]


const conteinerItens = document.querySelector('#conteiner')


const  loadImgs = (imgs, conteiner)=>{

    imgs.forEach(img => {
        if(img.id === '1'){
            conteiner.innerHTML +=
            `<div class='item'>
                <p>Arraste para o lado para conferir as imagens do projeto</p>
                <img id='slides${img.id}' src='${img.url}'>
            </div>`
        }else{
            conteiner.innerHTML +=
            `<div class='item'>
                <img id='slides${img.id}' src='${img.url}'>
            </div>`
        }
    });

}

loadImgs( imgs, conteinerItens);

let listaDeItens = document.querySelectorAll('.item')


const nextSlide = () =>{
    conteinerItens.appendChild( listaDeItens[0])
    listaDeItens = document.querySelectorAll('.item')
}

const previousSlide = () =>{
    const lastItem = listaDeItens[listaDeItens.length -1]
    conteinerItens.insertBefore( lastItem, listaDeItens[0])
    listaDeItens = document.querySelectorAll('.item')
}

document.querySelector('#previous').addEventListener('click', previousSlide)
document.querySelector('#next').addEventListener('click', nextSlide)