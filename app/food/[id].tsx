import { useLocalSearchParams, useRouter } from "expo-router";
import { items } from "../data/foodItems";
import FoodDetail from "@/components/FoodDetail/FoodDetail";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const FoodDetailScreen = () => {
    const router = useRouter();
    const { id } = useLocalSearchParams();
    const foodId = Number(id);
    const allItems = Object.values(items).flat();
    const food = allItems.find((item) => item.id === foodId);

    if (!food) {
        return <Text>Food not found</Text>;
    }

    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <FoodDetail food={food} />
        </View>
    );
};

export default FoodDetailScreen;

const styles = StyleSheet.create({
    backButton: {
        position: "absolute",
        top: 50,
        left: 20,
        zIndex: 10,
        backgroundColor: "#fff",
        borderRadius: 20,
        padding: 10,
        elevation: 3,
    },
});