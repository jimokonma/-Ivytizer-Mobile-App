import { Text, View, StyleSheet, FlatList } from "react-native";
import FoodCard from "../components/FoodCard";
import foodData from "../data/foodData";

import { useEffect, useState } from "react";
function HomeScreen(props) {
  const [data, setData] = useState(foodData);

  const handleLike = (id) => {
    console.log("clicked");
  };

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return <FoodCard data={item} handleLike={handleLike} />;
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
