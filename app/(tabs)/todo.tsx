import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TextInput,
  Platform,
  ScrollView,
  Button,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import { useState } from "react";

const INITIAL_TODOS = [
  { id: 1, text: "Todo 1" },
  { id: 2, text: "Todo 2" },
];

const Todo = () => {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState(INITIAL_TODOS);
  const [selectedTodoIdx, setSelectedTodoIdx] = useState<null | number>(null);
  console.log("selected todo idx", selectedTodoIdx);
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="position">
        <ScrollView
          contentContainerStyle={{ paddingBottom: 120 }}
          style={{ height: "100%" }}
        >
          <View style={styles.paddingBox}>
            <Text style={styles.title}>Todo</Text>
            <View style={styles.line} />
            <View style={{ rowGap: 24, marginTop: 64 }}>
              {todos.map((todo, idx) => (
                <TouchableOpacity
                  key={todo.id}
                  style={
                    selectedTodoIdx === idx
                      ? styles.selectedTodoBox
                      : styles.todoBox
                  }
                  onPress={() =>
                    setSelectedTodoIdx((v) => (v === idx ? null : idx))
                  }
                >
                  <Text style={styles.todoText}>{todo.text}</Text>
                  <TouchableOpacity
                    style={styles.plusAndDeleteBtn}
                    onPress={() => {
                      setTodos((v) => {
                        const deleteIdx = idx;
                        const newTodos = v.filter(
                          (_, idx) => idx !== deleteIdx
                        );
                        selectedTodoIdx === idx && setSelectedTodoIdx(null);
                        return newTodos;
                      });
                    }}
                  >
                    <Image
                      source={require("../../assets/icons/trash_24.png")}
                      style={styles.icon}
                    />
                  </TouchableOpacity>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </ScrollView>
        <View style={styles.inputBox}>
          <TextInput
            value={todoText}
            onChangeText={(v) => setTodoText(v)}
            placeholder="Todo"
            placeholderTextColor="#8f8f8f"
            style={styles.textInput}
            onSubmitEditing={() => {
              console.log("return!");
            }}
            maxLength={30}
          />
          <TouchableOpacity
            style={styles.plusAndDeleteBtn}
            onPress={() => {
              if (selectedTodoIdx === null) {
                // 선택된 todo가 없을 때 => 새로운 todo 추가
                setTodos((v) => {
                  const newTodoId = v.length === 0 ? 1 : v[v.length - 1].id + 1;
                  const newTodo = { id: newTodoId, text: todoText };
                  const prevTodos = [...v];
                  prevTodos.push(newTodo);
                  return prevTodos;
                });
                // setTodos(v => [...v, { id: v.length + 1, text: todoText }]);
              } else {
                // 선택된 todo가 있을 때 => 선택된 todo 변경
                setTodos((v) => {
                  const changedTodo = {
                    id: v[selectedTodoIdx].id,
                    text: todoText,
                  };
                  const prevTodos = [...v];
                  prevTodos[selectedTodoIdx] = changedTodo;
                  return prevTodos;
                });
              }

              setTodoText("");
            }}
          >
            <Image
              source={
                selectedTodoIdx === null
                  ? require("../../assets/icons/plus_36.png")
                  : require("../../assets/icons/change_36.png")
              }
              style={{ ...styles.icon, width: 36, height: 36 }}
            />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
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
    paddingLeft: 16,
  },
  selectedTodoBox: {
    width: "100%",
    height: 64,
    borderRadius: 8,
    backgroundColor: "#c48a8a",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 16,
  },
  todoText: {
    fontSize: 16,
    color: "#111",
  },
  plusAndDeleteBtn: {
    width: 52,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
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
    paddingLeft: 16,
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
