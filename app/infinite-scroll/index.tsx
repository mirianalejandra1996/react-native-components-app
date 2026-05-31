import { useThemeColor } from "@/hooks/use-theme-color";
import FadeInImage from "@/presentation/images/FadeInImage";
import ThemedView from "@/presentation/shared/ThemedView";
import { useState } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";

const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]); // 6,7,8,9

  const primaryColor = useThemeColor({}, "primary");

  const loadMore = () => {
    console.log("loadMore");
    const newArray = Array.from({ length: 5 }, (_, i) => numbers.length + i);

    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 3000);
  };

  return (
    <ThemedView>
      <FlatList
        data={numbers}
        renderItem={({ item }) => <ListItems number={item} />}
        onEndReached={loadMore}
        onEndReachedThreshold={0.6} // En el 60% del scroll ya empieza a ejecutar el loadMore, no necesariamente debo llegar al final para que se dispare
        ListFooterComponent={() => (
          <View style={{ height: 150, justifyContent: "center" }}>
            <ActivityIndicator size={40} color={primaryColor} />
          </View>
        )}
      />
    </ThemedView>
  );
};
export default InfiniteScrollScreen;

interface ListItemProps {
  number: number;
}

const ListItems = ({ number }: ListItemProps) => {
  return (
    <FadeInImage
      uri={`https://picsum.photos/id/${number}/500/400`}
      style={{ height: 400, width: "100%" }}
    />
  );
};
