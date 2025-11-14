"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  useEffect,
} from "react";

const CartContext = createContext(null);

function CartSnackbar({ open, message, onClose }) {
  useEffect(() => {
    if (!open) return;
    const timer = setTimeout(onClose, 2500);
    return () => clearTimeout(timer);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed bottom-6 left-1/2 z-70 flex -translate-x-1/2 items-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-medium text-white shadow-lg">
      {message}
    </div>
  );
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
  });

  const addToCart = useCallback((item) => {
    setCartItems((prev) => {
      const exists = prev.some((pkg) => pkg.id === item.id);
      if (exists) {
        setSnackbar({
          open: true,
          message: "This package is already in your cart",
        });
        return prev;
      }

      setSnackbar({
        open: true,
        message: "Package added to your cart",
      });

      return [...prev, item];
    });
  }, []);

  const removeFromCart = useCallback((id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const isInCart = useCallback(
    (id) => cartItems.some((item) => item.id === id),
    [cartItems]
  );

  const closeSnackbar = useCallback(() => {
    setSnackbar({ open: false, message: "" });
  }, []);

  const value = useMemo(
    () => ({
      cartItems,
      addToCart,
      removeFromCart,
      isInCart,
      snackbar,
      closeSnackbar,
    }),
    [cartItems, addToCart, removeFromCart, isInCart, snackbar, closeSnackbar]
  );

  return (
    <CartContext.Provider value={value}>
      {children}
      <CartSnackbar
        open={snackbar.open}
        message={snackbar.message}
        onClose={closeSnackbar}
      />
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return context;
}
