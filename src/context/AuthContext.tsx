import React, { createContext, useContext, useState } from 'react';
import { UserRole } from '../types';

interface AuthContextType {
  role: UserRole;
  setRole: (role: UserRole) => void;
  currentUser: {
    name: string;
    organization: string;
    id: string;
  } | null;
  loginAsClient: (clientCode: string) => boolean;
  loginAsAdmin: (accessCode: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [role, setRole] = useState<UserRole>('guest');
  const [currentUser, setCurrentUser] = useState<{ name: string; organization: string; id: string } | null>(null);

  const loginAsClient = (clientCode: string) => {
    if (clientCode.trim().length > 0) {
      setRole('client');
      setCurrentUser({
        name: 'Sokha Ly (Security Director)',
        organization: 'ABA Bank Phnom Penh HQ',
        id: 'CLIENT-ABA-8821',
      });
      return true;
    }
    return false;
  };

  const loginAsAdmin = (accessCode: string) => {
    if (accessCode.trim().length > 0) {
      setRole('admin');
      setCurrentUser({
        name: 'General Command Director',
        organization: 'K.N.S.K Headquarters Command Center',
        id: 'ADMIN-HQ-001',
      });
      return true;
    }
    return false;
  };

  const logout = () => {
    setRole('guest');
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ role, setRole, currentUser, loginAsClient, loginAsAdmin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
