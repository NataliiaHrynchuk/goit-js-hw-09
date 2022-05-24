const refs = {
    btnStartColor: document.querySelector('[data-start]'),
    body: document.querySelector("body"),
    btnStopColor: document.querySelector('[data-stop]'),
  }
  let intervalId = null;
  refs.btnStartColor.addEventListener("click", startChangeColor);
  refs.btnStopColor.addEventListener("click", stopChangeColor);
  
  
  function startChangeColor() {
    intervalId = setInterval(() => {
        refs.body.style.backgroundColor = `${getRandomHexColor()}`;
        }, 1000);
    showDisabledAtributeStartBtn();
    hideDisabledAtributeStopBtn();
  }

  function stopChangeColor() {
       clearInterval(intervalId);
       hideDisabledAtributeStartBtn();
       showDisabledAtributeStopBtn();

  }
    
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    
  }
function showDisabledAtributeStartBtn() {
    refs.btnStartColor.setAttribute('disabled', '');
} //ф-ція встановлення атрибуту disabled на кнопку старт

function showDisabledAtributeStopBtn() {
    refs.btnStopColor.setAttribute('disabled', '');
} //ф-ція встановлення атрибуту disabled на кнопку стоп

function hideDisabledAtributeStartBtn() {
    refs.btnStartColor.removeAttribute('disabled');
}//ф-ція зняття атрибуту disabled з кнопки старт

function hideDisabledAtributeStopBtn() {
    refs.btnStopColor.removeAttribute('disabled');
}//ф-ція зняття атрибуту disabled з кнопки стоп