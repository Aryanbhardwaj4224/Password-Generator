let inputSlider = document.querySelector('.inputSlider');

let sliderValue = document.querySelector('.sliderValue');

sliderValue.textContent=inputSlider.value;

inputSlider.addEventListener('input',()=>{
    sliderValue.textContent=inputSlider.value;
})