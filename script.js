let inputSlider = document.querySelector('.inputSlider');

let sliderValue = document.querySelector('.sliderValue');

//show input slider value 

sliderValue.textContent=inputSlider.value;

inputSlider.addEventListener('input',()=>{
    sliderValue.textContent=inputSlider.value;
})

