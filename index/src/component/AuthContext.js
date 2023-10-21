// AuthContext.js
import React, { createContext, useState, useContext } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Load user from local storage
  const [user, setUser] = useState(() => {
    const localUser = localStorage.getItem('user');
    return localUser ? JSON.parse(localUser) : null;
  });

  // Include any methods you need for signup, login, logout, etc.
  const login = (userInfo) => {
    // Your login logic here...
    if (userInfo) { // check if userInfo is provided
      setUser(userInfo);  // Save user's information after logging in
      localStorage.setItem('user', JSON.stringify(userInfo)); // Storing in local storage
      return true; // login successful
    }
    return false; // login failed
  };

  const logout = () => {
    // Your logout logic here...
    setUser(null);  // Clear user information on logout
    localStorage.removeItem('user'); // Removing from local storage
  };

  // You can include any other auth methods you need...

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);  // Stores the user's information

//   // Include any methods you need for signup, login, logout, etc.
//   const login = (userInfo) => {
//     // Your login logic here...
//     setUser(userInfo);  // Save user's information after logging in
//   };

//   const logout = () => {
//     // Your logout logic here...
//     setUser(null);  // Clear user information on logout
//   };

//   // You can include any other auth methods you need...

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// Custom hook to use the auth context
export const useAuth = () => {
  return useContext(AuthContext);
};
