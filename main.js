import './style.scss'

const isSupportWebp = (e) => document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') == 0     

window.addEventListener('load', () => {
  if (!isSupportWebp()) {
    document.body.classList.add('no-webp')
  }
})

