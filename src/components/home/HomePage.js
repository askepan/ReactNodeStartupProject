import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>Välkommna till Nåtbys _codeSession</h1>
                <p>Lets do some fucking React, Redux shit with ES6 for ultra-fast-response-super-sexy-awsome web app!</p>
                <Link to="about" className="btn btn-primary btn-lg">Tryck om du vågar din fegis!</Link>
            </div>
        );
    }
}

export default HomePage;