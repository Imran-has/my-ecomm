import { Product } from "@/types/product";

// Add product to the cart
export const addToCart = (product: Product) => {
    const cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');
  
    // Check if the product already exists in the cart
    const existingProductIndex = cart.findIndex(item => item._id === product._id);
  
    if (existingProductIndex > -1) {
      // Increment quantity if product exists
      cart[existingProductIndex].stockLevel += 1;
    } else {
      // Add new product with a quantity of 1
      cart.push({ ...product, stockLevel: 1 });
    }
  
    // Save updated cart to local storage
    localStorage.setItem('cart', JSON.stringify(cart));
  };
  
  // Remove product from the cart
  export const removeFromCart = (productId: string) => {
    let cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');
  
    // Filter out the product with the specified ID
    cart = cart.filter(item => item._id !== productId);
  
    // Save updated cart to local storage
    localStorage.setItem('cart', JSON.stringify(cart));
  };
  
  // Update product quantity in the cart
  export const updateCartQuantity = (productId: string, quantity:number ) => {
    const cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');
  
    // Find the product index
    const productIndex = cart.findIndex(item => item._id === productId);
  
    if (productIndex > -1) {
      // Update the product quantity
      cart[productIndex].stockLevel = quantity;
  
      // Save updated cart to local storage
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  };
  
  // Retrieve cart items
  export const getCartItems = (): Product[] => {
    return JSON.parse(localStorage.getItem('cart') || '[]');
  };