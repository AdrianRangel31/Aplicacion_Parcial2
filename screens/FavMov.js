import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function FavMov({ navigation }) {
  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.content}>
          <Text style={styles.text}>Mi top 3 de peliculas favoritas</Text>
          <View style={styles.foodContainer}>
            <Image
              source={require("../assets/spider.png")}
              style={styles.foodImg}
            />
            <Text style={styles.text}>Spiderman Across The Spider-Verse</Text>
          </View>

          <View style={styles.foodContainer}>
            <Image
              source={require("../assets/batman.png")}
              style={styles.foodImg}
            />
            <Text style={styles.text}>The Batman</Text>
          </View>

          <View style={styles.foodContainer}>
            <Image
              source={require("../assets/your.png")}
              style={styles.foodImg}
            />
            <Text style={styles.text}>Your Name</Text>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={() => navigation.navigate("AboutMe")}
        style={styles.btn}
      >
        <Text style={styles.btnText}>Volver a AboutMe</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#70b2f0",
  },
  content: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
    marginBottom: 70,
  },
  title: {
    fontSize: 50,
    backgroundColor: "#ffff",
    borderRadius: 40,
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 30,
    backgroundColor: "#ffff",
    borderRadius: 30,
    textAlign: "center",
  },
  btn: {
    position: "absolute",
    bottom: 15,
    right: 46.5,
    backgroundColor: "#606025",
    width: 201,
    borderRadius: 40,
    width: 300,
    marginBottom: 20,
  },
  btnText: {
    fontSize: 30,
    textAlign: "center",
    backgroundColor: "#ccda52",
    margin: 10,
    borderRadius: 40,
  },
  foodImg: {
    width: 300,
    height: 300,
    margin: 20,
    borderRadius: 50,
  },
  text: {
    fontSize: 25,
    backgroundColor: "#ffff",
    borderRadius: 40,
    textAlign: "center",
    width: 200,
    marginBottom: 10,
    padding: 4,
  },
  data: {
    fontSize: 25,
    backgroundColor: "#ffff",
    borderRadius: 40,
    textAlign: "center",
    width: 250,
    marginBottom: 10,
  },
  foodContainer: {
    alignItems: "center",
    backgroundColor: "#699b3a",
    borderRadius: 50,
    borderWidth: 5,
    borderColor: "#ffff",
    marginBottom: 20,
  },
  btnContainer: {
    position: "absolute", // <--- La clave
    bottom: 30, // Distancia desde abajo
    right: 30, // Distancia desde la derecha
    backgroundColor: "#70b2f0",
    alignItems: "center",
    shadowColor: "#000", // Sombra en iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
});
