import Swiper, { Navigation } from "swiper"
Swiper.use([Navigation])

// Slider

const sliders = document.querySelectorAll(".swiper-container")
const nextBtns = document.querySelectorAll(".experts__slider-next")

sliders.forEach((slider) => {
  const swiper = new Swiper(slider, {
    init: false,
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      769: {
        slidesPerColumn: 1,
        slidesPerView: 2,
        // spaceBetween: 20
      },
      1170: {
        slidesPerView: 3,
        // spaceBetween: 31
      }
    }
  })

  swiper.init()
})

nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.nextElementSibling.swiper.slideNext()
  })
})

// Order button

const orderButtons = document.querySelectorAll(".btn-order__btn")

orderButtons.forEach((btn) => {
  btn.addEventListener("click", (evt) => {
    const btnParent = btn.parentElement.parentElement
    const isSigned = btnParent.classList.contains("btn-order--signed")

    evt.preventDefault()

    if (!isSigned) {
      btnParent.classList.add("btn-order--loading")

      setTimeout(() => {
        btnParent.classList.remove("btn-order--loading")
        btnParent.querySelector(".btn-order__btn").innerHTML = "Вы записаны"
        btnParent.classList.add("btn-order--signed")
      }, 2000)
    }

  })
})

// Programs mobile toggle

const programs = document.querySelectorAll(".programs-item")

programs.forEach(item => {
  const header = item.querySelector(".programs-item__header")
  const main = item.querySelector(".programs-item__main")

  header.addEventListener("click", () => {
    if (window.innerWidth < 769) {
      if (main.classList.contains("programs-item__main--closed")) {
        main.style.height = `${main.scrollHeight}px`
        main.classList.remove("programs-item__main--closed")
      } else {
        main.style.height = `${main.scrollHeight}px`
        window.getComputedStyle(main, null).getPropertyValue("height")
        main.style.height = "0"
        main.classList.add("programs-item__main--closed")
      }

      main.addEventListener("transitionend", () => {
        if (main.style.height !== "0px") {
          main.style.height = "auto"
        }
      })

      header.classList.toggle("programs-item__header--opened")
    }

  })
})
