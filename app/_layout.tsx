import { Drawer } from "expo-router/drawer";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function RootLayout() {
  return (
    <Drawer
      drawerContent={(props) => <Sidebar {...props} />}
      screenOptions={{
        drawerStyle: {
          width: 330,
          backgroundColor: "#FF5C00",
        },
        headerShown: false
      }}
    >
      <Drawer.Screen name="(tabs)" />
    </Drawer>
  );
}
