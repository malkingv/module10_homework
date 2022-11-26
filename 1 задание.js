const btn = document.querySelector('button');
const logo = document.querySelector('.logo');
let flag = true;
const f_logo = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-left-circle" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-5.904-2.854a.5.5 0 1 1 .707.708L6.707 9.95h2.768a.5.5 0 1 1 0 1H5.5a.5.5 0 0 1-.5-.5V6.475a.5.5 0 1 1 1 0v2.768l4.096-4.097z"/>
    </svg>`;
const  s_logo = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-left-circle-fill" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-5.904-2.803a.5.5 0 1 1 .707.707L6.707 10h2.768a.5.5 0 0 1 0 1H5.5a.5.5 0 0 1-.5-.5V6.525a.5.5 0 0 1 1 0v2.768l4.096-4.096z"/>
    </svg>
   `;

console.log(f_logo);
const x = new DOMParser();
const y = x.parseFromString(f_logo, 'text/xml');
const svg_class = y.querySelector('svg').getAttribute('class');
const path_fillRule = y.querySelector('path').getAttribute('fill-rule');

// y.querySelector('svg').setAttribute('class', 'bi bi-arrow-down-left-circle-fill');
// y.querySelector('path').removeAttribute('fill-rule');
console.log(y);




// if (y.querySelector('path').toggleAttribute('fill-rule')){
//     console.log(y.querySelector('path').toggleAttribute('fill-rule'))
// }
// console.log(path_fillRule);
// if (y.querySelector('path').toggleAttribute('fill-rule')){
//     console.log(2)
// }

btn.addEventListener('click', () => {
    if (flag){
            document.querySelector('.logo').innerHTML = `
            <div>
                ${y.parseFromString(y, 'text/html')}
            </div>
            `;
    }

    console.log(y);
})
console.log(y);

//
// const btn = document.querySelector('button');
// const logo = document.querySelector('.logo');