import * as React from "react";
import { FunctionComponent } from "react";

type SectionContainer = {
	className: string
}

//Main page wrapper
export const Main: FunctionComponent = ({ children }) => <main>{ children }</main>

//Section wrapper with bootstrap pre-defined classes
export const Wrap: FunctionComponent<SectionContainer> = ({className, children}) => {
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
