interface SignUpProps {
  [x: string]: string;
  username: string;
  email: string;
  password: string;
  role: string;
}

interface LoginProps {
  email: string;
  password: string;
}

export type { SignUpProps, LoginProps };
