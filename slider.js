class Slider {
  constructor (slider){
    if (!(slider instanceof Element)) {
      throw new Error('No slider passed in');
    }
    this.slider = slider;
    this.slides = slider.querySelector('.slides');
    this.prevBtn = slider.querySelector('.prevBtn');
    this.nextBtn = slider.querySelector('.nextBtn');
    this.startSlider();
    this.applyStyles();
    this.nextBtn.addEventListener('click', () => this.moveSlide());
    this.prevBtn.addEventListener('click', () => this.moveSlide('back'));
  }
  startSlider() {
    this.current = this.slides.querySelector('.current') || this.slides.firstElementChild;
    this.next = this.current.nextElementSibling || this.slides.firstElementChild;
    this.prev = this.current.previousElementSibling || this.slides.lastElementChild;
  }
  
  applyStyles() {
    this.current.classList.add('current');
    this.prev.classList.add('prev');
    this.next.classList.add('next');
  }
  
  moveSlide(direction) {
    this.current.classList.remove('current');
    this.prev.classList.remove('prev');
    this.next.classList.remove('next');
    if (direction === 'back') {
      [this.prev, this.current, this.next] = [this.prev.previousElementSibling || this.slides.lastElementChild, this.prev, this.current];
    } else {
      [this.prev, this.current, this.next] = [this.current, this.next, this.next.nextElementSibling || this.slides.firstElementChild];
    }
    this.applyStyles();
  }

}

const mySlider = new Slider(document.querySelector('.slider1'));


 
