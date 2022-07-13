import * as React from "react";
import {Component} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

type ModalType = {
    display: boolean,
    parent: Component,
    children: React.ReactNode
}

export default function Modal ({display, parent, children} : ModalType) {

    const closeModal = ( e: { preventDefault: () => void; } ) => {
        e.preventDefault();
        parent.setState({modalDisplay: false});
    }

    return (
        <div className={'ejtModalCover' + (display ? ' active' : '')}>
            <div className={'modalClose'}>
                <a href={""} onClick={closeModal}><FontAwesomeIcon icon={faTimes}/></a>
            </div>

            <div className={'modalContainer'}>
                <div className={'content'}>
                    {children}
                </div>
            </div>
        </div>
    );
}
