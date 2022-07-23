import { Text, View, StyleSheet, FlatList } from "react-native";
import FoodCard from "../components/FoodCard";
import foodData from "../data/foodData";

import { useState } from "react";
function HomeScreen(props) {
  const [data, setData] = useState(foodData);

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return <FoodCard data={item} />;
        }}
      />
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  mainContainer: {
    padding: 25,
  },
});
