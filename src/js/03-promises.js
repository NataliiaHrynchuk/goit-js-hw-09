import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('form'),
}

let delay = 0;
let step = 0;
let amount = 0;
let position = 0;

refs.form.addEventListener('input', onFormInput);
refs.form.addEventListener('submit', onFormSubmit);

function onFormInput(event) {
  event.preventDefault();
  
  delay = refs.form.elements.delay.value;
  step  = refs.form.elements.step.value;
  amount = refs.form.elements.amount.value;
  }  

  function onFormSubmit(event)  {
    event.preventDefault();
    
      const intervalId = setInterval(() => {
        if (position === Number(amount)) {
          // console.log('потрібно зупинити інтервал');
          clearInterval(intervalId);
          return;
          } 

          // console.log('запускаю інтервал');
         position += 1;
         delay = (Number(delay) + Number(step));
        createPromise(position, delay)
         .then(({ position, delay }) => {
          Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`, {timeout: delay,});
         })
         .catch(({ position, delay }) => {
          Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`, {timeout: delay,});
         });
    }, delay);
   }
  

   function createPromise(position, delay) {
  
    return new Promise((resolve, reject) => {
      const shouldResolve = Math.random() > 0.3;
      setTimeout(() => {
        if (shouldResolve) {
          resolve ({position, delay});
        } else {
          reject ({position, delay});
        }
      }, delay);
    })
  }
