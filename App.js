import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text } from "react-native";

import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer, useRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import CategoryScreen from "./screens/CategoryScreen";
import MealScreen from "./screens/MealScreen";
import FavoritesScreen from "./screens/FavoritesScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const stackOptions = {
  headerStyle: {
    backgroundColor: "#ececec",
  },
  headerTitleStyle: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#3d3d3d",
  },
};

const DrawerScreen = () => {
  return <Drawer.Navigator initialRouteName="CategoryDrawer" screenOptions={{ ...stackOptions }}>
    <Drawer.Screen name="CategoryDrawer" component={CategoriesScreen} options={{ headerTitle: "All Categories" }}/>
    <Drawer.Screen name="FavoritesScreen" component={FavoritesScreen} options={{ headerTitle: "Favorites" }}/>
  </Drawer.Navigator>;
};

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar></StatusBar>
      <Stack.Navigator initialRouteName="Category">
        <Stack.Screen
          name="Category"
          component={DrawerScreen}
          options={{ ...stackOptions, headerShown: false }}
        />
        <Stack.Screen
          name="CategoryScreen"
          component={CategoryScreen}
          options={({ route, navigation }) => {
            return { ...stackOptions };
          }}
        />
        <Stack.Screen
          name="MealScreen"
          component={MealScreen}
          options={({ route, navigation }) => {
            return {
              ...stackOptions,
              title: "😋",
            };
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
