import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

function 로그찍는함수(btnName: string) {
  console.log(`HomeScreen: ${btnName} button pressed`);
}

const 로그찍는화살표함수 = (btnName: string) => {
  console.log(`HomeScreen: ${btnName} button pressed`);
};

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ width: "100%", paddingHorizontal: 16, rowGap: 24 }}>
        <TouchableOpacity
          style={{ ...styles.btn, backgroundColor: "#DEECFF" }}
          onPress={() => console.log("HomeScreen: Todo button pressed")}
        >
          <Text style={styles.btnText}>Todo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ ...styles.btn, backgroundColor: "#B1D1C5" }}
          onPress={() => 로그찍는함수("Memo")}
        >
          <Text style={styles.btnText}>Memo</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    backgroundColor: "#111",
  },
  btn: {
    width: "100%",
    height: 120,
    borderRadius: 8,
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  btnText: {
    fontSize: 40,
    fontWeight: "bold",
    lineHeight: 44,
  },
});
