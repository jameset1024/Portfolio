import * as React from "react";

export const NavSlide = () => {
	const action = () => {
		const header: HTMLElement = document.querySelector('.ejt_mainHeader');
		//const main = document.getElementsByTagName('main');
		
		if(header.clientWidth === 75){
			const headerInterval = setInterval(() => {
				header.style.width = (header.clientWidth + 1) + 'px';
				if(header.clientWidth === 250){
					clearInterval(headerInterval);
					header.querySelector('nav').classList.add('active');
				}
			}, 5);
			
		} else {
			header.querySelector('nav').classList.remove('active');
			const headerInterval = setInterval(() => {
				header.style.width = (header.clientWidth - 1) + 'px';
				if(header.clientWidth === 75){
					clearInterval(headerInterval);
				}
			}, 5);
		}
	}
	
	return (
		<div className={'nav-action'} onClick={action}>
				<i className={'fas fa-ellipsis-v'}></i>		
		</div>	
	);
}
