import { createContext, useContext } from "react";
import useUserName from "../hooks/useUserName";

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const { user, setUser, fetching, setFetching,fetchUserName} = useUserName();

  return (
    <CartContext.Provider value={{ user, setUser, fetching, setFetching,fetchUserName }}>
      {children}
    </CartContext.Provider>
  );
};
