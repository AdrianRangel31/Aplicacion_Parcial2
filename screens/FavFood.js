import {
  View,
  Text,
  StyleSheet,
  Image,

  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function FavFood({ navigation }) {
  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.content}>
          <View style={styles.foodContainer}>
            <Image
              source={require("../assets/quesabirria.png")}
              style={styles.foodImg}
            />
            <Text style={styles.text}>Quesabirrias</Text>
          </View>

          <View style={styles.foodContainer}>
            <Image
              source={require("../assets/sushi.png")}
              style={styles.foodImg}
            />
            <Text style={styles.text}>Quesabirrias</Text>
          </View>

          <View style={styles.foodContainer}>
            <Image
              source={require("../assets/chilaquil.png")}
              style={styles.foodImg}
            />
            <Text style={styles.text} >Quesabirrias</Text>
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
    marginBottom:70
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
    position: 'absolute',
    bottom:15,
    right:46.5,
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
