//ROY: Remember to put in callback function in setState down below near line 55

import React, { Component, createContext, useContext } from 'react';
import createAuth0Client from '@auth0/auth0-spa-js'

//create the context
export const Auth0Context = createContext();

//export the context as useAuth0
export const useAuth0 = () => useContext(Auth0Context);

//create a provider
export class Auth0Provider extends Component {

    state = {
        auth0Client: null, //Create a client property on the state from auth0-spa-sdk
        isLoading: true,
        isAuthenticated: false,
        user: null
    };

    //Create a config property to store our credentials for Auth0 (Domain and ClientID)
    config = {
        domain: process.env.REACT_APP_AUTH0_DOMAIN,
        client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
        redirect_uri: window.location.origin
    };

    componentDidMount() {
        this.initializeAuth0()
    }

    //Create an initializeAuth0 mathod where we initialize the auth0 library and create auth0Client
    initializeAuth0 = async () => {

        //Make the call to Auth0 SPA SDK's createAuthClient()
        const auth0Client = await createAuth0Client(this.config);
        this.setState({ auth0Client });

        if (window.location.search.includes('code=')) {
            return this.handleRedirectCallback();
        }

        const isAuthenticated = await auth0Client.isAuthenticated();
        const user = isAuthenticated ? await auth0Client.getUser() : null;
        this.setState({ isLoading: false, isAuthenticated, user });
    }

    handleRedirectCallback = async () => {
        this.setState({ isLoading: true });

        await this.state.auth0Client.handleRedirectCallback();
        const user = await this.state.auth0Client.getUser();

        //Need to put in callback function
        this.setState({ user, isAuthenticated: true, isLoading: false }, ()=>{
            const { user } = this.state;
            console.log(user.sub.split("|")[1]);
        });
        window.history.replaceState({}, document.title, window.location.pathname);
    }


    render() {

        const { auth0Client, isLoading, isAuthenticated, user } = this.state;
        const { children } = this.props;

        const configObject = {
            isLoading,
            isAuthenticated,
            user,
            //Login method with Auth0's Universal Login
            loginWithRedirect: (...p) => auth0Client.loginWithRedirect(...p),
            //Grab a token so we can use for API calls
            getTokenSilently: (...p) => auth0Client.getTokenSilently(...p),
            //Get the information out of our token
            getIdTokenClaims: (...p) => auth0Client.getIdTokenClaims(...p),
            //Call the logout and get redirected to the Auth0 logout
            logout: (...p) => auth0Client.logout(...p)
        };

        return (
            <Auth0Context.Provider value={configObject}>
                {children}
            </Auth0Context.Provider>
        );

    }
}