import * as React from "react";

export const NavSlide = () => {
	
	const action = async () => {
		const header: HTMLElement = document.querySelector('.ejt_mainHeader');
		const main: HTMLElement = document.querySelector('main');

		if(header.clientWidth === 65){
			await animateIn(main, header);
			await linkAnimation();
		} else {
			await linkAnimation();
			await animateOut(main, header);
			main.removeAttribute('style');
			main.classList.remove('setBack');
		}
	}

	const animateIn = ( main: HTMLElement, header: HTMLElement ) => {
		return new Promise( (resolve, reject) => {
			main.style.minWidth = main.clientWidth + 'px';
			main.style.maxWidth = main.clientWidth + 'px';
			main.style.position = "absolute";
			main.style.top = '0';
			main.style.right = '0';
			main.classList.add('setBack');

			const headerInterval = setInterval(() => {
				header.style.flex = '0 0 ' + (header.clientWidth + 1) + 'px';
				if(header.clientWidth === 250){
					clearInterval(headerInterval);
					header.querySelector('nav').classList.add('active');
					resolve(true);
				}
			}, 3);
		});
	}

	const animateOut = ( main: HTMLElement, header: HTMLElement) => {
		return new Promise( (resolve, reject) => {
			header.querySelector('nav').classList.remove('active');

			const headerInterval = setInterval(() => {
				header.style.flex = '0 0 ' + (header.clientWidth - 1) + 'px';
				if(header.clientWidth === 65){
					clearInterval(headerInterval);
					resolve(true);
				}
			}, 3);
		});
	}

	const linkAnimation = () => {
		return new Promise( (resolve, reject) => {
			const links = document.querySelectorAll('.ejt_mainNavigation li');

			links.forEach((e, i) => {
				setTimeout(function () {
					if (!e.classList.contains('animate')) {
						e.classList.add('animate')
					} else {
						e.classList.remove('animate');
					}
					
					if(i === (links.length - 1)){
						setTimeout(() => resolve(true), 400);
					}
				}, (300 * i));
			});
		});
	}

	return (
		<div className={'nav-action'} onClick={action}>
			<span>NavDot</span>
			<span>NavDot</span>
			<span>NavDot</span>
		</div>
	);
}
