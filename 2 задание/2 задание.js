// 2 задание
// Сверстайте кнопку, клик на которую будет выводить данные о размерах экрана с помощью alert.

const btn = document.querySelector('button');
btn.addEventListener('click', () => {
    alert(`Размеры экрана: высота = ${window.innerHeight}px, ширина = ${window.innerWidth}px`)
})