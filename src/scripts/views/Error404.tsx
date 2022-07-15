import * as React from "react";
import {Main, WrapFull} from "../components/elements/Tags";
import { Link, withRouter } from "react-router-dom";
import {handleLoading, hideLoading} from "../controllers/Loading";
import {SyntheticEvent} from "react";


class Error404 extends React.Component<any, any> {

    state = {
        loading: true
    }

    componentDidMount() {
        document.body.className = 'error404';

        hideLoading().then( _ => {
            this.setState({loading: false});
        });
    }

    render() {
        return (
            <Main>
                <WrapFull className={'errorPage'}>
                    <div className={'col-12'}>
                        <h1>404</h1>
                        <p>Page Not Found</p>
                        <Link to={'/'} className={'btn blue'}
                              onClick={(e: SyntheticEvent) => handleLoading('/', this, e)}>Home</Link>
                    </div>
                </WrapFull>
            </Main>
        );
    }
}

export default withRouter(Error404);
