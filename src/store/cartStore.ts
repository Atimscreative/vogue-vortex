import { toast } from "sonner";
import create from "zustand";

// Define the type for a cart item
interface CartItem {
  id: string;
  name: string;
  brand: string;
  verified: boolean;
  price: number;
  sizes: string[];
  images: string[];
  material: string;
  care: {
    description: string;
    info: string[];
  };
  quantity: number;
}

// Define the type for the store's state and actions
interface CartState {
  cartItems: CartItem[];
  addCartItem: (item: CartItem) => void;
  deleteCartItem: (item: CartItem) => void;
  increaseCartItemQuantity: (itemId: string) => void;
  decreaseCartItemQuantity: (itemId: string) => void;
  setCartItems: (items: CartItem[]) => void;
  clearCartItems: () => void;
  addProductToCart: (product: CartItem) => void;
}

// Create the store with types
const useCartStore = create<CartState>((set) => ({
  cartItems: JSON.parse(localStorage.getItem("cart") as string) || [],

  addCartItem: (item) =>
    set((state) => {
      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.id === item.id,
      );

      let updatedCartItems;
      if (existingItem) {
        updatedCartItems = state.cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem,
        );
        toast.info(`${existingItem?.name} is already in cart`); // Show toast notification
      } else {
        updatedCartItems = [...state.cartItems, { ...item, quantity: 1 }];
        toast.success(`${item?.name} added to cart`); // Show toast notification
      }

      // Update local storage
      localStorage.setItem("cart", JSON.stringify(updatedCartItems));

      return { cartItems: updatedCartItems };
    }),

  // Deletecart Item
  deleteCartItem: (item) =>
    set((state) => {
      const updatedCartItems = state.cartItems.filter(
        (cartItem) => cartItem?.id !== item?.id,
      );

      // Update the state with the new cart items
      const newState = { cartItems: updatedCartItems };

      // Persist the updated cart items to localStorage
      localStorage.setItem("cart", JSON.stringify(updatedCartItems));

      // Show a toast message
      toast("Item removed from cart");

      return newState;
    }),

  increaseCartItemQuantity: (itemId) =>
    set((state) => ({
      cartItems: state.cartItems.map((cartItem) =>
        cartItem.id === itemId
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem,
      ),
    })),

  decreaseCartItemQuantity: (itemId) =>
    set((state) => ({
      cartItems: state.cartItems.map((cartItem) =>
        cartItem.id === itemId
          ? {
              ...cartItem,
              quantity: cartItem.quantity > 1 ? cartItem.quantity - 1 : 1,
            }
          : cartItem,
      ),
    })),

  setCartItems: (items) => set({ cartItems: items }),

  clearCartItems: () => set({ cartItems: [] }),

  addProductToCart: (product) =>
    set((state) => {
      const existingProduct = state.cartItems.find(
        (cartItem) => cartItem.id === product.id,
      );
      if (existingProduct) {
        return {
          cartItems: state.cartItems.map((cartItem) =>
            cartItem.id === product.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem,
          ),
        };
      }
      return { cartItems: [...state.cartItems, { ...product, quantity: 1 }] };
    }),
}));

export default useCartStore;
