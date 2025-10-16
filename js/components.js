function likeBtnClick() {
	const likeBtns = document.querySelectorAll('.btn--like')
	likeBtns.forEach(btn => {
		btn.addEventListener('click', () => {
			btn.classList.toggle('btn--clicked')

			const redLikeIcon = btn.querySelector('.btn__like-icon-red')

			if (btn.classList.contains('btn--clicked')) {
				redLikeIcon.style.opacity = '1'
			} else {
				redLikeIcon.style.opacity = '0'
			}
		})
	})
}

function checkCheckboxes() {
	const checkboxes = document.querySelectorAll('.custom-checkbox__input')
	checkboxes.forEach(checkbox => {
		checkbox.addEventListener('change', () => {
			const checkIcon = checkbox.parentElement.querySelector(
				'.custom-checkbox__checked-icon'
			)
			if (checkbox.checked) {
				checkIcon.style.opacity = '1'
			} else {
				checkbox.parentElement.classList.remove('custom-checkbox--checked')
				checkIcon.style.opacity = '0'
			}
		})
	})
}

function sliderInit() {
	const slider = document.getElementById('level-slider')
	let currentValue = document.querySelector('.slider__current-number')

	noUiSlider.create(slider, {
		start: 30,
		connect: [true, false],
		step: 1,
		range: {
			min: 0,
			max: 100,
		},
	})

	slider.noUiSlider.on('update', (values, handle) => {
		currentValue.textContent = Math.round(values[handle])
	})
}

function changeAccordion() {
	function accordionOpen() {
		const details = document.querySelectorAll('.accordion')

		const windowWidth = window.innerWidth

		details.forEach(block => {
			if (windowWidth >= 753 && windowWidth <= 1378) {
				block.setAttribute('open', '')
			} else {
				block.removeAttribute('open')
			}
		})
	}

	accordionOpen()

	window.addEventListener('resize', accordionOpen)
}

export { likeBtnClick, checkCheckboxes, sliderInit, changeAccordion }
