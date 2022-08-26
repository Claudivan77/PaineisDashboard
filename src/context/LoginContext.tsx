import { createContext, ReactNode, useContext, useState } from 'react';
import { Decriptography } from '../utils/Cyrypto';

interface IProviderProps {
  children: ReactNode;
}

export interface IdataContextProps {
  token: any;
  setToken: (emailCPF: string) => void;
  userName: string;
  setUserName: (customerName: string) => void;
}

const EmailCPF = createContext<IdataContextProps>({} as IdataContextProps);

export function LoginProvider({ children }: IProviderProps) {
  const [userName, setUserName] = useState('');

  function getToken() {
    const valueCrypt = localStorage.getItem('token') as string;
    if (valueCrypt != null) {
      const valueDesCrypto = Decriptography(valueCrypt);
      return valueDesCrypto as string;
    }
  }

  function setToken(value: string) {
    localStorage.setItem('token', value);
  }

  return (
    <EmailCPF.Provider
      value={{
        token: getToken(),
        setToken: setToken,
        userName: userName,
        setUserName: setUserName,
      }}
    >
      {children}
    </EmailCPF.Provider>
  );
}

export function useLogin() {
  const Context = useContext(EmailCPF);
  return Context;
}
