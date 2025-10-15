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
	let maxValue = document.querySelector('.slider__max-number')

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

export { likeBtnClick, checkCheckboxes, sliderInit }
