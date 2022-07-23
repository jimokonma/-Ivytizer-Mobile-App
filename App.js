import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// Screens
import SlidesScreen from "./screens/SlidesScreen";
import HomeScreen from "./screens/HomeScreen";
import About from "./screens/About";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import ForgotPasswordScreen from "./screens/ForgotPasswordScreen";
import VerifyEmailScreen from "./screens/VerifyEmailScreen";
// Context
import FavContextProvider from "./store/FavoriteContext";
import CartContextProvider from "./store/CartContext";
// Components
import HomeHeader from "./components/headers/HomeHeader";

// UI elements
import { Colors } from "./components/ui/Colors";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#fff",
  },
};

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const DrwerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerStyle: {
            height: 155,
            backgroundColor: Colors.PrimaryRed800,
            borderBottomEndRadius: 20,
            borderBottomStartRadius: 20,
          },
          headerTitle: () => <HomeHeader />,
          headerLeft: false,
        }}
      />
      <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <>
      <CartContextProvider>
        <FavContextProvider>
          <NavigationContainer theme={MyTheme}>
            <Stack.Navigator>
              <Stack.Screen
                name="Slides"
                component={SlidesScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SignUp"
                component={SignUpScreen}
                options={{
                  headerLeft: null,
                  headerTitleAlign: "center",
                }}
              />
              <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{
                  headerLeft: null,
                  headerTitleAlign: "center",
                }}
              />
              <Stack.Screen
                name="ForgotPassword"
                component={ForgotPasswordScreen}
                options={{
                  title: "Forgot Password",
                  headerTitleAlign: "center",
                }}
              />
              <Stack.Screen
                name="VerifyEmail"
                component={VerifyEmailScreen}
                options={{
                  title: "Verify your Email",
                  headerTitleAlign: "center",
                }}
              />
              {/* Main App Screen */}
              <Stack.Screen
                name="MainApp"
                component={DrwerNavigator}
                options={{
                  title: null,
                  headerTitle: null,
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="ProductDetails"
                component={ProductDetailsScreen}
                options={{
                  headerShown: false,
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </FavContextProvider>
      </CartContextProvider>
    </>
  );
}
