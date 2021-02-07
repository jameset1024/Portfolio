import * as React from "react";

export const action = async ( close ?: boolean ) => {
	const header: HTMLElement = document.querySelector('.ejt_mainHeader');
	const main: HTMLElement = document.querySelector('main');
	
	if (header.clientWidth === 65 && !close) {
		await animateIn(main, header);
		await linkAnimation( close );
	} else {
		await linkAnimation( close );
		await animateOut(main, header);
		await new Promise()
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
			if(header.clientWidth < 250) {
				
				header.style.flex = '0 0 ' + (header.clientWidth + 1) + 'px';
				if (header.clientWidth === 250) {
					clearInterval(headerInterval);
					header.querySelector('nav').classList.add('active');
					resolve(true);
				}
			} else {

				clearInterval(headerInterval);
				resolve(true);
			}
		}, 2);
	});
}

const animateOut = ( main: HTMLElement, header: HTMLElement) => {
	return new Promise( (resolve, reject) => {
		header.querySelector('nav').classList.remove('active');

		if(header.clientWidth > 65) {
			window.requestAnimationFrame(animateOutCallback(header));	
		} else {
			resolve(true);
		}
		
		
/*		const headerInterval = setInterval(() => {
			if(header.clientWidth > 65) {
				
				header.style.flex = '0 0 ' + (header.clientWidth - 1) + 'px';
				if (header.clientWidth === 65) {
					clearInterval(headerInterval);
					resolve(true);
				}
			} else {

				clearInterval(headerInterval);
				resolve(true);
			}
		}, 2);*/
	});
}

const animateOutCallback = ( header: HTMLElement ): FrameRequestCallback{
	header.style.flex = '0 0 ' + (header.clientWidth - 1) + 'px';
	if(header.clientWidth > 65){
		window.requestAnimationFrame(animateOutCallback(header));
	}
}

const linkAnimation = ( close: boolean) => {
	return new Promise( (resolve, reject) => {
		const links = document.querySelectorAll('.ejt_mainNavigation li');

		links.forEach((e, i) => {
			setTimeout(function () {
				if (!e.classList.contains('animate') && !close) {
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


export const NavSlide = () => {
	return (
		<div className={'nav-action'} onClick={action.bind(this,false)}>
			<span>NavDot</span>
			<span>NavDot</span>
			<span>NavDot</span>
		</div>
	);
}
