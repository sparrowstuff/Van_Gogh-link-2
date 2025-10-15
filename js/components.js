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

export { likeBtnClick }
