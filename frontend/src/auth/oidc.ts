import { UserManager, User } from 'oidc-client-ts'

const oidcConfig = {
  authority: import.meta.env.VITE_OIDC_AUTHORITY as string,
  client_id: import.meta.env.VITE_OIDC_CLIENT_ID as string,
  redirect_uri: import.meta.env.VITE_OIDC_REDIRECT_URI as string,
  response_type: 'code',
  scope: import.meta.env.VITE_OIDC_SCOPE as string,
  post_logout_redirect_uri: import.meta.env
    .VITE_OIDC_POST_LOGOUT_REDIRECT_URI as string,
}

export const userManager = new UserManager(oidcConfig)

// Login
export const login = (): void => {
  userManager.signinRedirect()
}

// Logout
export const logout = (): void => {
  userManager.signoutRedirect()
}

// Get current user
export const getUser = async (): Promise<User | null> => {
  try {
    return await userManager.getUser()
  } catch (err) {
    console.error(err)
    return null
  }
}
