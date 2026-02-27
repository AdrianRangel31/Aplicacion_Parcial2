import { View, Text, StyleSheet, Image, TouchableOpacity,ScrollView } from "react-native";

export default function AboutMe({ navigation }) {
  const handlePress = () => {};
  const nombre = "Adrián"

  return (
    <ScrollView
      contentContainerStyle={styles.container}
    >
      <View style={styles.content}>
        <Text style={styles.subtitle}>Texto descriptivo</Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("FavFood")
          }
          style={styles.btn}
        >
          <Text style={styles.btnText}> Comidas Favoritas</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("FavMov")}
          style={styles.btn}
        >
          <Text style={styles.btnText}> Peliculas Favoritas </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.popToTop("Home")}
          style={styles.btn}
        >
          <Text style={styles.btnText}> Volver a Home</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    backgroundColor: "#70b2f0",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 50,
    backgroundColor: "#ffff",
    borderRadius: 40,
    textAlign: "center",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 28,
    backgroundColor: "#ffff",
    borderRadius: 30,
    textAlign: "center",
    padding: 10,
    marginBottom: 20,
  },
  michi: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  btn: {
    backgroundColor: "#426025",
    width: 300,
    borderRadius: 40,
    marginBottom: 20,
  },
  btnText: {
    fontSize: 30,
    textAlign: "center",
    backgroundColor: "#94da52",
    margin: 10,
    borderRadius: 40,
  },
});
