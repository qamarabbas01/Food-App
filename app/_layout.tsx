import { Drawer } from "expo-router/drawer";
import Sidebar from "@/components/Sidebar/Sidebar";
import { CartProvider } from "@/context/CartContext";

export default function RootLayout() {
  return (
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
  );
}