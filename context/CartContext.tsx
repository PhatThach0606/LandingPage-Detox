"use client";
import { createContext, useContext, useState, useEffect } from "react";
const CartContext = createContext<any>(null);
export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<any[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  // 1. Chỉ load dữ liệu sau khi Component đã mount (tránh lỗi Hydration)
  useEffect(() => {
    const data = localStorage.getItem("cart");
    if (data) {
      try {
        setCart(JSON.parse(data));
      } catch (error) {
        console.error("Lỗi parse giỏ hàng:", error);
      }
    }
    setIsInitialized(true);
  }, []);
  const clearCart = () => {
    setCart([]); // Xóa sạch state
    localStorage.removeItem("cart"); // Xóa luôn trong bộ nhớ máy
  };
  // 2. Chỉ lưu vào localStorage sau khi dữ liệu đã được khởi tạo xong
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, isInitialized]);

  const addToCart = (product: any) => {
    setCart((prev) => {
      const exist = prev.find((item) => item.id === product.id);
      if (exist) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeItem = (id: string | number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQty = (id: string | number, qty: number) => {
    if (qty < 1) return; // Không cho phép số lượng < 1
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, qty } : item)),
    );
  };

  // Tính tổng tiền
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeItem, updateQty, clearCart, total }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    if (typeof window === "undefined") {
      return {
        cart: [],
        addToCart: () => {},
        removeItem: () => {},
        updateQty: () => {},
        clearCart: () => {},
        total: 0,
      };
    }
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
};
