import { Link } from "expo-router";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const MAIN_PAGE_BTNS = [
  { name: "Todo", color: "#DEECFF", linkTo: "/todo" },
  { name: "Memo", color: "#B1D1C5", linkTo: "/memo" },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ width: "100%", paddingHorizontal: 16, rowGap: 24 }}>
        {MAIN_PAGE_BTNS.map((btn) => {
          return (
            <Link href={btn.linkTo} asChild key={btn.name}>
              <TouchableOpacity
                style={{ ...styles.btn, backgroundColor: btn.color }}
              >
                <Text style={styles.btnText}>{btn.name}</Text>
              </TouchableOpacity>
            </Link>
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
