import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text } from "react-native";


import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer, useRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DrawerItem, createDrawerNavigator } from "@react-navigation/drawer";

import CategoryScreen from "./screens/CategoryScreen";
import MealScreen from "./screens/MealScreen";
import FavoritesScreen from "./screens/FavoritesScreen";

//REDUX
import { Provider } from "react-redux";
import { store } from "./store/redux/store";

//CONTEXT
import FavoritesContextProvider from "./store/context/favorites-context";

import { Ionicons } from "@expo/vector-icons";
import Color from "./data/colors";

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
  drawerLabelStyle: {
    fontSize: 18,
  },
  drawerStyle: {
    backgroundColor: "#ffffff",
  },
  drawerType: "slide",
  swipeEdgeWidth: 100,
  drawerActiveTintColor: Color.Primary,
};

const DrawerScreen = () => {
  return (
    <Drawer.Navigator
      initialRouteName="CategoryDrawer"
      screenOptions={{ ...stackOptions, headerTintColor: Color.Primary }}
    >
      <Drawer.Screen
        name="CategoryDrawer"
        component={CategoriesScreen}
        options={{
          headerTitle: "All Categories",
          drawerLabel: "All Categories",
          drawerIcon: ({ color, size }) => {
            return <Ionicons name="home" size={size} color={color} />;
          },
        }}
      />
      <Drawer.Screen
        name="FavoritesScreen"
        component={FavoritesScreen}
        options={{
          headerTitle: "Favorites",
          drawerLabel: "Favorites",
          drawerIcon: ({ color, size }) => {
            return <Ionicons name="star" size={size} color={color} />;
          },
        }}
      />
    </Drawer.Navigator>
  );
};

function App() {
  return (
    <NavigationContainer>
      <StatusBar></StatusBar>
      <Provider store={store}>
        <FavoritesContextProvider>
          <Stack.Navigator
            initialRouteName="Category"
            screenOptions={{ headerTintColor: Color.Primary }}
          >
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
        </FavoritesContextProvider>
      </Provider>
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

export default App
