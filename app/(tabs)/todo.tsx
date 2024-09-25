import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TextInput,
  Platform,
  ScrollView,
} from "react-native";
import Constants from "expo-constants";

// 10 temp todos
const INITIAL_TODOS = [
  { id: 1, text: "Todo 1" },
  { id: 2, text: "Todo 2" },
  { id: 3, text: "Todo 3" },
  { id: 4, text: "Todo 4" },
  { id: 5, text: "Todo 5" },
  { id: 6, text: "Todo 6" },
  { id: 7, text: "Todo 7" },
  { id: 8, text: "Todo 8" },
  { id: 9, text: "Todo 9" },
  { id: 10, text: "Todo 10" },
];

const Todo = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
        <View style={styles.paddingBox}>
          <Text style={styles.title}>Todo</Text>
          <View style={styles.line} />
          <View style={{ rowGap: 24, marginTop: 64 }}>
            {INITIAL_TODOS.map((todo) => (
              <View key={todo.id} style={styles.todoBox}>
                <Text style={styles.todoText}>{todo.text}</Text>
                <Image
                  source={require("../../assets/icons/trash_24.png")}
                  style={styles.icon}
                ></Image>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
      <View style={styles.inputBox}>
        <TextInput value="12345" style={styles.textInput} />
        <Image
          source={require("../../assets/icons/plus_36.png")}
          style={styles.icon}
        ></Image>
      </View>
    </SafeAreaView>
  );
};

export default Todo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#111",
    marginTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
  },
  paddingBox: {
    paddingHorizontal: 16,
    marginTop: 40,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    lineHeight: 44,
    color: "#fff",
  },
  line: {
    width: "100%",
    height: 2,
    backgroundColor: "#fff",
  },
  todoBox: {
    width: "100%",
    height: 64,
    borderRadius: 8,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  todoText: {
    fontSize: 16,
    color: "#111",
  },
  icon: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  inputBox: {
    position: "absolute",
    bottom: 24,
    width: "100%",
    height: 52,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: "#111",
    borderBottomWidth: 1,
    borderColor: "#e5e5e5",
    marginRight: 16,
    height: 36,
    lineHeight: 20,
  },
});
