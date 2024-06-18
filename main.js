let idx = 0;

const imagens = document.querySelectorAll('.item-carrosel')

const btnVoltar = document.querySelector('#prev-img')
btnVoltar.addEventListener('click', () => {
    idx--
    if (idx < 0) {
        idx = imagens.length - 1
    }
    carrosel(idx)
})

const btnAvancar = document.querySelector('#next-img')
btnAvancar.addEventListener('click', () => {
    idx++
    if (idx > imagens.length - 1) {
        idx = 0;
    }
    carrosel(idx)
})

function carrosel(idx) {
    const carroselImgs = document.querySelector('.container-images')
    carroselImgs.style.transform = `translateX(${-idx * 500}px)`
}

