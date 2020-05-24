import OktaSignIn from '@okta/okta-signin-widget'
import { navigate } from '@reach/router'

const config = {
    baseUrl: 'https://dev-629374.okta.com',
    clientId: '0oaczs0htz5S0gIhN4x6',
    logo: '/universal_music_group_logo__.png',
    redirectUri: typeof window !== 'undefined' && window.location.origin + '/',
    el: '#signIn',
    authParams: {
        pkce: true,
        responseType: ['token', 'id_token']
    },
    features: {
        registration: true,
    }
}

const signIn = typeof window !== 'undefined' && new OktaSignIn(config)

const signOut = () => {
    signIn.authClient.signOut()
}

const getSession = async () => {
    return await signIn.authClient.session.get()
}

const getIdToken = async () => {
    let idToken
    const { tokens } = await signIn.authClient.token.getWithoutPrompt({
        scopes: ['openid', 'email', 'profile'],
    })

    if (tokens && tokens.idToken) {
        idToken = tokens.idToken
    }

    return idToken
}

const getUserName = async () => {
    let user

    const idToken = await getIdToken()
    if (idToken) {
        user = idToken.claims.name
    }

    return user
}

const isAuthenticated = async () => {
    const session = await getSession()
    return session.status === 'ACTIVE'
}

export {
    signIn,
    signOut,
    getIdToken,
    getUserName,
    getSession,
    isAuthenticated
}
