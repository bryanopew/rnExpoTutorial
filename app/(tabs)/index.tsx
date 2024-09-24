import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const MAIN_PAGE_BTNS = [
  { name: "Todo", color: "#DEECFF" },
  { name: "Memo", color: "#B1D1C5" },
];

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
        {MAIN_PAGE_BTNS.map((btn) => {
          return (
            <TouchableOpacity
              key={btn.name}
              style={{ ...styles.btn, backgroundColor: btn.color }}
              onPress={() => 로그찍는화살표함수(btn.name)}
            >
              <Text style={styles.btnText}>{btn.name}</Text>
            </TouchableOpacity>
          );
        })}
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
