let div = document.querySelector('.div')

setTimeout(() => {
  console.log('1. task done')
  Promise.resolve().then(() => console.log('1.1 microtask done'))
  div.style.backgroundColor = 'antiquewhite'
}, 1000);
setTimeout(() => {
  console.log('2. task done')
  Promise.resolve().then(() => console.log('2.1 microtask done'))
  Promise.resolve().then(() => console.log('2.2 microtask done'))
}, 2000);
setTimeout(() => {
  console.log('3. task done')
  Promise.resolve().then(() => console.log('3.1 microtask done'))
  div.textContent = 'some text'
}, 3000); 

// Разницу в секундах между таймаутами оставил для наглядности в браузере
