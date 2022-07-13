import {SyntheticEvent} from "react";
import {action} from "../components/buttons/AnimationBTNs";

export const showLoading = () => {
	return new Promise(( resolve ) => {
		const loader: HTMLElement | null = document.querySelector('.loadingScreen');
        if ( loader )
		    loader.classList.add('active');

		setTimeout(() => resolve(true), 1000);
	});
}

export const hideLoading = async () => {
	const loader: HTMLElement | null = document.querySelector('.loadingScreen');

	await action( true );

    if ( loader ) {
        setTimeout(() => {
            loader.classList.remove('active');
        }, 1500);
    }
}

export const handleLoading = async ( slug :string, instance: any, e: SyntheticEvent ) => {
	if(e) e.preventDefault();

	let tSlug = slug.replace('/', ''),
		regex = new RegExp("(" + tSlug + ")");

	if( ! regex.exec( window.location.href ) || ( ! tSlug.length && window.location.pathname.replace('/', '').length ) ) {
		await showLoading();
		instance.props.history.push(slug);
	}
}
