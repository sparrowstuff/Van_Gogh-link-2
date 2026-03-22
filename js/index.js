import * as components from './components.js'

window.addEventListener('DOMContentLoaded', () => {
	components.likeBtnClick()

	components.checkCheckboxes()

	components.sliderInit()

	components.changeAccordion()

	window.addEventListener('resize', components.addStylingIfLocationsToMany)

	components.addStylingIfLocationsToMany()
})
