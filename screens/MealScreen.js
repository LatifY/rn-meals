import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Easing,
  Animated,
} from "react-native";
import React, {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { APP, CATEGORIES, MANAGEMENTS, MEALS } from "../data/data";
import InfoGroup from "../components/InfoGroup";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ContentGroup from "../components/ContentGroup";
import Star from "../components/Star";

//CONTEXT
import { FavoritesContext } from "../store/context/favorites-context";

//REDUX
import { useSelector, useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorites";

const HEADER_HEIGHT = 200;

const MealScreen = () => {
  //helpers
  const route = useRoute();
  const navigation = useNavigation();

  const meal = MEALS.find((item) => item.id === route.params.mealId);

  let offset = useRef(new Animated.Value(0)).current;
  const categories = CATEGORIES.filter((item) =>
    meal.categoryIds.includes(item.id)
  );

  //context calls
  const favoritesCtx = useContext(FavoritesContext);

  //redux calls
  const favoriteMealsIds = useSelector((state) => state.favorites.ids);
  const dispatch = useDispatch();

  let isFavorite = false;

  //===============REDUX & CONTEXT=====ISFAVORITE==========
  if (APP.management == MANAGEMENTS.CONTEXT) {
    isFavorite = favoritesCtx.ids.includes(meal.id);
  } else if (APP.management == MANAGEMENTS.REDUX) {
    isFavorite = favoriteMealsIds.includes(meal.id);
  }
  //===============REDUX & CONTEXT=====ISFAVORITE==========


  
  //===============REDUX & CONTEXT=====CHANGEFAVORTE=======
  function changeFavoriteStatusHandler() {
    if (isFavorite) {
      if (APP.management == MANAGEMENTS.CONTEXT) {
        favoritesCtx.removeFavorite(meal.id);
      }
      else if(APP.management == MANAGEMENTS.REDUX){
        dispatch(removeFavorite(meal.id))
      }
    } else {
      if (APP.management == MANAGEMENTS.CONTEXT) {
        favoritesCtx.addFavorite(meal.id);
      }
      else if(APP.management == MANAGEMENTS.REDUX){
        dispatch(addFavorite(meal.id))
      }
    }
  }
  //===============REDUX & CONTEXT=====CHANGEFAVORTE=======

  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <Star
            activeOnStart={isFavorite}
            onPress={changeFavoriteStatusHandler}
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatusHandler]);

  const AnimatedHeader = ({ animatedValue }) => {
    const insets = useSafeAreaInsets();

    const headerHeight = animatedValue.interpolate({
      inputRange: [0, HEADER_HEIGHT + insets.top],
      outputRange: [HEADER_HEIGHT + insets.top, insets.top + 44],
      extrapolate: "clamp",
    });
    return (
      <Animated.Image
        source={{ uri: meal.imageUrl }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          height: headerHeight,
          backgroundColor: "white",
        }}
      />
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }} forceInset={{ top: "always" }}>
        <AnimatedHeader animatedValue={offset} />
        <ScrollView
          style={styles.mealScrollContainer}
          contentContainerStyle={{
            alignItems: "center",
            paddingTop: 220,
            paddingHorizontal: 20,
          }}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: offset } } }],
            { useNativeDriver: false }
          )}
        >
          <View style={styles.mealContainer}>
            <Text style={styles.mealContainerTitle}>{meal.title}</Text>
            <InfoGroup
              duration={meal.duration}
              affordability={meal.affordability}
              complexity={meal.complexity}
            />
            <ContentGroup label={"Ingredients"} data={meal.ingredients} />
            <ContentGroup label={"Steps"} data={meal.steps} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default MealScreen;

const styles = StyleSheet.create({
  mealScrollContainer: {
    flex: 1,
  },

  mealContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },

  mealContainerTitle: {
    fontWeight: "900",
    fontSize: 30,
    textAlign: "center",
    textShadowColor: "black",
    textShadowRadius: 0.6,
  },

  imgContainer: {
    width: "100%",
    flex: 1,
    height: 200,
  },

  img: {
    width: "100%",
    height: 200,
    flex: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});
