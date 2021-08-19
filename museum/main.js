const progress = document.querySelector('.player__progress');

progress.addEventListener('input', function () {
    const value = this.value;
    this.style.background = `linear-gradient(to right, #24809E 0%, #24809E ${value}%, #fff ${value}%, white 100%)`
})

const volumprogress = document.querySelector('.player__volum');

volumprogress.addEventListener('input', function () {
    const value = this.value;
    this.style.background = `linear-gradient(to right, #24809E 0%, #24809E ${value}%, #fff ${value}%, white 100%)`
})

