import { Drawer } from "expo-router/drawer";
import Sidebar from "@/components/Sidebar/Sidebar";
import { CartProvider } from "@/context/CartContext";
import { FavoritesProvider } from "@/context/FavoritesContext";

export default function RootLayout() {
  return (
    <FavoritesProvider>
      <CartProvider>
        <Drawer
          drawerContent={(props) => <Sidebar {...props} />}
          screenOptions={{
            drawerStyle: {
              width: 330,
              backgroundColor: "#FF5C00",
            },
            headerShown: false,
          }}
        >
          <Drawer.Screen name="(tabs)" />
        </Drawer>
      </CartProvider>
    </FavoritesProvider>
  );
}