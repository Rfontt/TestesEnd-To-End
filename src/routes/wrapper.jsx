import React from 'react';
import PropsTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

export default function RouteWrapper({
    redirectTo, isPrivate, component: Component, ...rest
}) {
    const authenticated = localStorage.getItem('token');

    if(!authenticated && isPrivate) {
        return <Redirect to={redirectTo} />
    }else {
        return <Route {...rest} render={props => <Component {...props} />} />
    }
}

RouteWrapper.propTypes = {
    redirectTo: PropsTypes.string,
    isPrivate: PropsTypes.bool,
    component: PropsTypes.oneOfType([PropsTypes.element, PropsTypes.func]).isRequired
};

RouteWrapper.defaultProps = {
    redirectTo : '/',
    isPrivate: false
}