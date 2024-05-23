export interface UserProps {
  username: string;
  email?: string;
  password?: string;
  isVerify?: boolean;
  googleId?: string;
  role?: string;
  facebookId?: string;
  profile?: string;
}

export interface IAuthUserMessageDetails {
  username?: string;
  email?: string;
  type?: string;
}
