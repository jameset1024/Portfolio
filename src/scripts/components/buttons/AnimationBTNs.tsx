import * as React from "react";

export const NavSlide = () => {
	const action = () => {
		const header: HTMLElement = document.querySelector('.ejt_mainHeader');
				
		if(header.clientWidth === 65){
			const headerInterval = setInterval(() => {
				header.style.flex = '0 0 ' + (header.clientWidth + 1) + 'px';
				if(header.clientWidth === 250){
					clearInterval(headerInterval);
					header.querySelector('nav').classList.add('active');
				}
			}, 3);
			
		} else {
			header.querySelector('nav').classList.remove('active');
			const headerInterval = setInterval(() => {
				header.style.flex = '0 0 ' + (header.clientWidth - 1) + 'px';
				if(header.clientWidth === 65){
					clearInterval(headerInterval);
				}
			}, 3);
		}
	}
	
	return (
		<div className={'nav-action'} onClick={action}>
				<span>NavDot</span>		
				<span>NavDot</span>		
				<span>NavDot</span>		
		</div>	
	);
}
