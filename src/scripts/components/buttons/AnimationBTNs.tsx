import * as React from "react";

/**
 * Trigger on nav button click
 *
 * @param close
 */
export const action = async ( close ?: boolean ) => {
	const header: HTMLElement | null = document.querySelector('.ejt_mainHeader');
	const main: HTMLElement | null = document.querySelector('main');

	if (main && header && checkScreenSize() > 991) {
		await desktopAnimate(main, header, close);
	} else if ( main && header) {
		await mobileAnimate(main, header, close);
	}
}

/**
 * Wrapping function for desktop navigation animations
 *
 * @param main
 * @param header
 * @param close
 */
const desktopAnimate = async ( main: HTMLElement, header: HTMLElement, close ?: boolean) => {
	if (header.clientWidth === 65 && !close) {
		await desktopAnimateIn(main, header);
		await linkAnimation( close );
	} else {
		await linkAnimation( close );
		await desktopAnimateOut(main, header);

		if( main ) {
			main.removeAttribute('style');
			main.classList.remove('setBack');
		}

		document.body.removeAttribute('style');
	}
}

/**
 * Wrapping function for mobile navigation animations
 *
 * @param main
 * @param header
 * @param close
 */
const mobileAnimate = async ( main: HTMLElement, header: HTMLElement, close ?: boolean ) => {
	if( header.clientHeight === 72 && !close) {
		await mobileAnimateIn( main, header );
		await linkAnimation( close );
	} else {
		await linkAnimation( close );
		await mobileAnimateOut( main, header );

		if( main ) {
			main.removeAttribute('style');
			main.classList.remove('setBack');
		}
	}
}

/**
 * Handles animating the navigation out when on mobile
 *
 * @param main
 * @param header
 */
const mobileAnimateIn = ( main: HTMLElement, header: HTMLElement): Promise<boolean> => {
	return new Promise ( (resolve ) => {
		main.style.position = "absolute";
		main.style.left = '0';
		main.style.width = '100%';
		main.style.top = header.clientHeight + 'px';
		main.classList.add('setBack');
		document.body.style.overflow = 'hidden';

		const headerInterval = setInterval( () => {

			if( header.clientHeight < 330 ) {
				header.style.flex = '0 0 ' + (header.clientHeight + 1) + 'px';
				if( header.clientHeight === 330 ) {
					clearInterval(headerInterval);
                    const nav = header.querySelector('nav');
                    if ( nav )
					    nav.classList.add('active');

					setTimeout(() => {
						resolve(true);
					}, 300);
				}
			} else {
				clearInterval(headerInterval);
				resolve( true );
			}
		}, 3)
	});
}

/**
 * Handles animating the navigation out when on mobile
 *
 * @param main
 * @param header
 */
const mobileAnimateOut = ( main: HTMLElement, header: HTMLElement): Promise<boolean> => {
	return new Promise( (resolve ) => {
        const nav = header.querySelector('nav');
        if ( nav )
		    nav.classList.remove('active');

		const headerInterval = setInterval(() => {
			if( header.clientHeight > 72 ) {
				header.style.flex = '0 0 ' + ( header.clientHeight - 1 ) + 'px';

				if (header.clientHeight === 72) {
					header.removeAttribute('style');
					clearInterval(headerInterval);
					resolve(true);
				}
			} else {
				clearInterval(headerInterval);
				resolve(true);
			}
		}, 2);
	});
}

/**
 * Handles animating in when viewing on desktop
 *
 * @param main
 * @param header
 */
const desktopAnimateIn = ( main: HTMLElement, header: HTMLElement ): Promise<boolean> => {
	return new Promise( (resolve ) => {
		main.style.minWidth = main.clientWidth + 'px';
		main.style.maxWidth = main.clientWidth + 'px';
		main.style.position = "absolute";
		main.style.top = '0';
		main.style.right = '0';
		main.classList.add('setBack');

		const headerInterval = setInterval(() => {
			if( header.clientWidth < 250 ) {
				header.style.flex = '0 0 ' + (header.clientWidth + 1) + 'px';
				if (header && header.clientWidth === 250) {
					clearInterval(headerInterval);

                    const nav = header.querySelector('nav');
                    if ( nav )
					    nav.classList.add('active');
					resolve(true);
				}
			} else {
				clearInterval(headerInterval);
				resolve(true);
			}
		}, 3);
	});
}

/**
 * Handles animating out when on desktop
 *
 * @param main
 * @param header
 */
const desktopAnimateOut = ( main: HTMLElement, header: HTMLElement): Promise<boolean> => {
	return new Promise( (resolve ) => {
        const nav = header.querySelector('nav');
        if ( nav )
		    nav.classList.remove('active');

		const headerInterval = setInterval(() => {
			if(header.clientWidth > 65) {

				header.style.flex = '0 0 ' + (header.clientWidth - 1) + 'px';
				if (header.clientWidth === 65) {
					header.removeAttribute('style');
					clearInterval(headerInterval);
					resolve(true);
				}
			} else {

				clearInterval(headerInterval);
				resolve(true);
			}
		}, 2);
	});
}

/**
 * Gets the windows current width
 *
 * @return number
 */
export const checkScreenSize = () : number => {
	return window.innerWidth;
}

/**
 * Handles animating the navigation links
 *
 * @param close
 */
const linkAnimation = ( close: boolean | undefined): Promise<boolean> => {
	return new Promise( ( resolve ) => {
		const links = document.querySelectorAll('.ejt_mainNavigation li');

		links.forEach((e, i) => {
			setTimeout(function () {
				if (!e.classList.contains('animate') && !close) {
					e.classList.add('animate')
				} else {
					e.classList.remove('animate');
				}

				if (i === (links.length - 1)) {
					setTimeout(() => resolve(true), 400);
				}
			}, (300 * i));
		});
	});
}

/**
 * The Nav slide element component
 *
 * @constructor
 */
export const NavSlide = () => {
	return (
		<div className={'nav-action'} onClick={action.bind(this,false)}>
			<span>NavDot</span>
			<span>NavDot</span>
			<span>NavDot</span>
		</div>
	);
}
