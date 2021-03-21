import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ({ saludo, subtitulo }) => {
    return (
        <Fragment>
            <h1>{saludo}</h1>
            <p>{subtitulo}</p>
        </Fragment>
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired,
    subtitulo: PropTypes.string
}

PrimeraApp.defaultProps = {
    saludo: 'Hola Mundo',
    subtitulo: 'Mi primera aplicación'
}

export default PrimeraApp;

/*
    Los componentes en React, se pueden manejar de dos maneras, inicialmente se manajeban con
    clases pero ahora se usa con componentes funcionales, estos componentes funcionales antes
    son los que se llamaban stateless funcional components, pero como ahora por medio de los
    hooks si se pueden manejar estados en los componentes, por eso solo se llaman funcional
    components y es la manera que React recomienda el uso de componentes.
*/