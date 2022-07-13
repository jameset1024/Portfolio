import React from "react";
import { FunctionComponent } from "react";

type SectionContainer = {
	className: string
}

//Main page wrapper
export const Main = ({ children } : {children: React.ReactNode}): JSX.Element => <main>{ children }</main>

//Section wrapper with bootstrap pre-defined classes
export const Wrap = ({className, children} : {className: string, children : React.ReactNode}): JSX.Element => {
	return (
		<section className={className}>
			<div className={'wrap container-fluid'}>
				<div className={'row'}>
					{ children }
				</div>
			</div>
		</section>
	);
}

export const WrapFull = ({className, children} : {className: string, children: React.ReactNode}): JSX.Element => {
	return (
		<section className={className}>
			<div className={'container-fluid'}>
				<div className={'row'}>
					{ children }
				</div>
			</div>
		</section>
	);
}

export const Loading = () : JSX.Element => {
	return (
		<div className={'loadingScreen active'}>
			<div>
				<div className={'bouncingText'}>
					<span>E</span>
				</div>

				<div className={'loadingText'}>Loading...</div>
			</div>
		</div>
	);
}
