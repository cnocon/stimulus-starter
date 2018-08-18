import { Controller } from "stimulus"
// notice how state is totally managed in dom by data-slideshow-index attribute
export default class extends Controller {
  static targets = [ "slide" ]

  initialize() {
    this.showCurrentSlide()
  }
  
  previous() {
    if (this.index === 0) {
      this.index = this.slideTargets.length - 1 
    } else {
      this.index--
    }
  }

  next() {
    if (this.index === this.slideTargets.length - 1) {
      this.index = 0  
    } else {
      this.index++
    }
  }

  showCurrentSlide() {
    this.slideTargets.forEach((el, i) => {
      el.classList.toggle("slide--current", this.index == i)
    })
  }

  get index() {
    return parseInt(this.data.get("index"))
  }

  set index(value) {
    this.data.set("index", value)
    this.showCurrentSlide();
  }
}