/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 416:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/01.jpg";

/***/ }),

/***/ 282:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/02.jpg";

/***/ }),

/***/ 67:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/03.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/* harmony import */ var _src_assets_img_01_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(416);
/* harmony import */ var _src_assets_img_02_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(282);
/* harmony import */ var _src_assets_img_03_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67);
//Import Styles


//Import images




const mountains = document.querySelector('.parallax__mountains');
const hero = document.querySelector('.parallax__hero');
const siteTitle = document.querySelector('.main__content');
const socials = document.querySelector('.main__socials');

window.addEventListener('scroll', function() {
  var value = window.scrollY;

  var scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

  mountains.style.top = 25 - (value * 0.12) + '%';
  hero.style.top = 50 - (value * 0.1) + '%';

  siteTitle.style.opacity = Math.max(0, Math.min(1, -scroll / 300 + 2));
  socials.style.opacity = Math.max(0, Math.min(1, -scroll / 300 + 2));

})

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
  e.preventDefault()
   
  const blockID = anchor.getAttribute('href').substr(1)
   
  document.getElementById(blockID).scrollIntoView({
  behavior: 'smooth',
  block: 'center'
  })
  })
}



const slidebarItems = document.querySelectorAll('.sidebar__item');

for(const slidebarItem of slidebarItems) {
  slidebarItem.addEventListener("click", ()=> {
    slidebarItems.forEach((slidebarItem)=> {
      slidebarItem.classList.remove("sidebar__item_active");
    })
  slidebarItem.classList.add("sidebar__item_active");
  })
}


const scrollImations = (entries, observer) => {
	entries.forEach((entry) => {
		if(entry.isIntersecting && entry.intersectionRatio == 1) {
			
      console.log(entry);
		} else {
			console.log('pau');
		}
	});
}

const options = {
	threshold: 1.0,
};
const observer = new IntersectionObserver(scrollImations, options);

const boxes = document.querySelectorAll('.ancor');
boxes.forEach((box) => {
	observer.observe(box);
});





/*


//Import images
import "../src/assets/img/logo.svg";
import '../src/assets/img/favicon.ico';

import "../src/assets/img/main-section-img-cover.jpg";
import "../src/assets/img/main-section-img.jpg";
import "../src/assets/img/feautured-img.jpg";
import "../src/assets/img/line.svg";

import "../src/assets/img/biotech.svg";
import "../src/assets/img/express.svg";
import "../src/assets/img/smilehome.svg";
import "../src/assets/img/connect.svg";
import "../src/assets/img/homebuild.svg";

import "../src/assets/img/properties/banyon-tree-realty.jpg";
import "../src/assets/img/properties/capital-hill-residence.jpg";
import "../src/assets/img/properties/picket-fence-realty.jpg";
import "../src/assets/img/properties/corsair-real-estate.jpg";
import "../src/assets/img/properties/sequoia-real-estate.jpg";
import "../src/assets/img/properties/strive-partners-realty.jpg";

import "../src/assets/img/security_ico.svg";
import "../src/assets/img/air_ico.svg";
import "../src/assets/img/garden_ico.svg";
import "../src/assets/img/parking_ico.svg";
import "../src/assets/img/furniture_ico.svg";
import "../src/assets/img/pool_ico.svg";

import "../src/assets/img/reviewers/acathe.jpg";
import "../src/assets/img/reviewers/jlee.jpg";
import "../src/assets/img/reviewers/rev_1_fem.jpg";
import "../src/assets/img/reviewers/rev_1_m.jpg";
import "../src/assets/img/reviewers/rev_2_fem.jpg";
import "../src/assets/img/reviewers/rev_2_m.jpg";
import "../src/assets/img/reviewers/rev_3_fem.jpg";
import "../src/assets/img/reviewers/rev_3_m.jpg";

//Slider

import noUiSlider from 'nouislider';
import '../node_modules/nouislider/dist/nouislider.min.css'

var nonLinearStepSlider = document.getElementById('slider-non-linear-step');

noUiSlider.create(nonLinearStepSlider, {
    start: [500, 4000],
    range: {
        'min': [0],
        '10%': [500, 500],
        '50%': [4000, 1000],
        'max': [9000]
    }
});

var nonLinearStepSliderValueElement = document.getElementById('slider-non-linear-step-value');

nonLinearStepSlider.noUiSlider.on('update', function (values) {
  let cleanValues = [];
  for (const value of values) {
    cleanValues.push('$' + Math.round(value));
  }
  nonLinearStepSliderValueElement.innerHTML = cleanValues.join(' - ');
});

const sliderContainer = document.querySelector(".slider__container");
const sliderHeader = document.querySelector(".slider__header");

sliderHeader.addEventListener("click", ()=> {
  if(sliderContainer.classList.contains("slider__container_active")) {
    hideSlider();
  } else {
    showSlider();
  }
  
})

function showSlider() {
  sliderContainer.classList.add("slider__container_active");
}

function hideSlider() {
  sliderContainer.classList.remove("slider__container_active");
}

//Search options
const searchOptions = document.querySelectorAll(".main-section__search-options-btn");

for (const searchOption of searchOptions) {
  searchOption.addEventListener("click", ()=> {
    searchOptions.forEach((searchOption)=> {
      searchOption.classList.remove("main-section__search-options-btn_active")
    })
  searchOption.classList.add("main-section__search-options-btn_active")
  })
}

//Search dropdowns
const dropdowns = document.querySelectorAll('.dropdown');
const dropdownMenus = document.querySelectorAll('.dropdown__list');
const dropdownItems = document.querySelectorAll('.dropdown__item');
const dropdownTexts = document.querySelectorAll('.dropdown__text');

dropdowns.forEach((dropdown, i) => {
  dropdown.addEventListener('click', () => {
    showDropdownMenu(i);
  })
})

function showDropdownMenu(n) {
  if(dropdownMenus[n].classList.contains('dropdown__list_active')) {
    hideDropdowns();
  }
  else {
    hideDropdowns();
    dropdownMenus[n].classList.add('dropdown__list_active');
    dropdownTexts[n].classList.add('dropdown__text_target');
  }
}

function hideDropdowns() {
  dropdownMenus.forEach((dropdownMenu) => {
    dropdownMenu.classList.remove('dropdown__list_active');
  })
  dropdownTexts.forEach((dropdownText) => {
    dropdownText.classList.remove('dropdown__text_target');
  })
}

window.addEventListener('click', e => {
  const target = e.target
  if (!target.closest('.dropdown__list') && !target.closest('.dropdown')) {
    hideDropdowns();
  }
  if (!target.closest('.slider__container') && !target.closest('.slider__header')) {
    hideSlider();
  }
})

dropdownItems.forEach((item) => {
  item.addEventListener('click', () => {
    if (item.textContent.length > 10) {
      document.querySelector('.dropdown__text_target').textContent = item.textContent.substring(0, 10) + '...';
    } else {
      document.querySelector('.dropdown__text_target').textContent = item.textContent;
    }
  })
})

//Like button
const likes = document.querySelectorAll(".property-card__like");

for (const like of likes) {
  like.addEventListener("click", ()=> {
    if (like.classList.contains("property-card__like_clicked")) {
      like.classList.remove("property-card__like_clicked")
    }
    else {
      like.classList.add("property-card__like_clicked")
    }
  })
}

//Reviews slider
const slides = document.querySelectorAll(".reviews__block");
const dots = document.querySelectorAll(".reviews__slider-dot");

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    showSlides(i);
    showUp(slides[i]);
  })
})

function showSlides(n) {
  slides.forEach((slide) => {
    slide.classList.remove("reviews__block_active")
  })
  dots.forEach((dot) => {
    dot.classList.remove("reviews__slider-dot_active")
  })
  slides[n].classList.add("reviews__block_active")
  dots[n].classList.add("reviews__slider-dot_active")
}

function showUp(target) {
  target.style.opacity = 0;
  var opacity = 0.1;
  var steps = 5;
  var d0 = opacity / steps;
  setInterval(function() {
    if(opacity <= 1) {
      opacity += d0;
      target.style.opacity = opacity;
      steps++;
    }
  })
}*/
})();

/******/ })()
;