import data from "~/static/storedata.json";

export const state = () => ({
  cartUIStatus: "idle",
  products: data.products,
  cart: [],
  clientSecret: "" // Required to initiate the payment from the client
});

export const getters = {
  featuredProducts: (state: any) => state.products.slice(0, 3),
  getProduct: (state: any) => (id: string) =>
    state.products.find((product: any) => product.id === id)
};
