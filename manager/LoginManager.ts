import Auth0 from 'react-native-auth0';

class LoginManager {
  private auth0: Auth0;
  private static instance: LoginManager;

  private constructor() {
    this.auth0 = new Auth0({
      domain: process.env.EXPO_PUBLIC_AUTH0_DOMAIN as string,
      clientId: process.env.EXPO_PUBLIC_AUTH0_CLIENT_ID as string,
    });
  }

  public static getInstance(): LoginManager {
    if (!LoginManager.instance) {
      LoginManager.instance = new LoginManager();
    }
    return LoginManager.instance;
  }

  public async login() {
    try {
      const credentials = await this.auth0.webAuth.authorize({
        scope: 'openid profile email',
      });
      return credentials;
    } catch (error) {
      console.error('Login Manager Error:', error);
      throw error;
    }
  }

  public async logout() {
    try {
      await this.auth0.webAuth.clearSession();
    } catch (error) {
      console.error('Logout Manager Error:', error);
      throw error;
    }
  }

  public async checkSession() {
    try {
      const credentials = await this.auth0.credentialsManager.getCredentials();
      if (credentials && credentials.accessToken) {
        return await this.getUserProfile(credentials.accessToken);
      }
      return null;
    } catch (error) {
      return null;
    }
  }

  public async getUserProfile(accessToken: string) {
    try {
      const userProfile = await this.auth0.auth.userInfo({ token: accessToken });
      return userProfile;
    } catch (error) {
      console.error('Get User Profile Error:', error);
      throw error;
    }
  }
}

export const loginManager = LoginManager.getInstance();
export default LoginManager;
