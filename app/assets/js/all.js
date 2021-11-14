// Swiper - Course Feature
var swiper = new Swiper(".swiper-course-feature", {
	slidesPerView: 2,　// 手機版
	spaceBetween: 15,
	grid: {
		rows: 2,
		fill: 'row',
	},
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	mousewheel: {  // 滑鼠滾動效果
		invert: true,
	},
	breakpoints: {
		768: {
			slidesPerView: 2,
			grid: {
				rows: 2,
				fill: 'row',
			},
			spaceBetween: 30,
		},
		992: {
			slidesPerView: 1.3,
			grid: {
				rows: 1,
				fill: 'row',
			},
			spaceBetween: 30,
		},
	},
});

// Swiper - Testimonial
var swiper = new Swiper(".swiper-testimonial", {
	slidesPerView: 1,
	spaceBetween: 0,
	grid: {
		rows: 3,
		fill: 'column',
	},
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	pagination: {
		el: '.swiper-pagination',
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	breakpoints: {
		768: {
			slidesPerView: 2.2,
			grid: {
				rows: 2,
				fill: 'row',
			},
			spaceBetween: 30,
		},
		992: {
			slidesPerView: 3,
			grid: {
				rows: 2,
				fill: 'row',
			},
			spaceBetween: 30,
		},
	},
});

// Swiper - Course Intro
var swiper = new Swiper(".swiper-course-intro", {
	slidesPerView: 1,
	spaceBetween: 0,
	grid: {
		rows: 3,
		fill: 'column',
	},
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	breakpoints: {
		768: {
			slidesPerView: 2.1,
			grid: {
				rows: 1,
				fill: 'row',
			},
			spaceBetween: 30,
		},
		992: {
			slidesPerView: 3,
			grid: {
				rows: 1,
				fill: 'row',
			},
			spaceBetween: 30,
		},
	},
});

// Swiper - Teachers
var swiper = new Swiper(".swiper-teachers", {
	slidesPerView: 1,
	spaceBetween: 0,
	grid: {
		rows: 4,
		fill: 'column',
	},
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},

	breakpoints: {
		768: {
			slidesPerView: 2.2,
			grid: {
				rows: 1,
				fill: 'row',
			},
			spaceBetween: 30,
		},
		992: {
			slidesPerView: 3,
			grid: {
				rows: 1,
				fill: 'row',
			},
			spaceBetween: 30,
		},
	},
});

// Swiper - Recommendation
var swiper = new Swiper(".swiper-recommendation", {
	slidesPerView: 1.2,
	spaceBetween: 30,
	grid: {
		rows: 1,
		fill: 'row',
	},
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	breakpoints: {
		768: {
			slidesPerView: 3,
			grid: {
				rows: 1,
				fill: 'row',
			},
			spaceBetween: 30,
		},
		992: {
			slidesPerView: 4.2,
			grid: {
				rows: 1,
				fill: 'row',
			},
			spaceBetween: 30,
		},
	},
});


// AOS Animation

//AOS.init();
AOS.init({
  once: true,
  offset: 400, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000 // values from 0 to 3000, with step 50ms
});

// Date Picker (要放在最後面)
const elem = document.querySelector('input[name="datePicker"]');
const datepicker = new Datepicker(elem, {
  // ...options
  autohide: true,
  nextArrow: '>',
  prevArrow: '<',
  buttonClass: 'btn primary',
  todayHighlight: true,
}); 