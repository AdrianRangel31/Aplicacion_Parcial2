import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  Alert,
  Touchable,
  TouchableOpacity,
} from "react-native";

export default function ExampleEvents({ navigation, route }) {
  const { nombre } = route.params;
  const total = route.params?.total;

  const handlePress = () => {
    Alert.alert("Botón presionado");
  };

  const handleShowData = () => {
    let textAlert;
    if (total === undefined) {
      textAlert = `Datos recibidos \nEl nombre es: ${nombre}\n`;
    } else {
      textAlert = `Datos recibidos \nEl nombre es: ${nombre}\nContador: ${total}`;
    }
    Alert.alert(textAlert);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>texto descriptivo</Text>
      <TouchableOpacity onPress={handleShowData} style={styles.btn}>
        <Text style={styles.btnText}>Mostrar datos en alert</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.popToTop("Home")}
        style={styles.btn}
      >
        <Text style={styles.btnText}>Volver a home</Text>
      </TouchableOpacity>

      {total !== undefined && (
        <Text style={styles.data}>Contador recibido: {total} </Text>
      )}

      <Image source={require("../assets/uwu.png")} style={styles.michi} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#70b2f0",
    justifyContent: "flex-start",
    padding: 20,
  },
  title: {
    fontSize: 50,
    backgroundColor: "#ffff",
    borderRadius: 40,
    textAlign: "center",
    margin: 10,
    marginTop: 40,
  },
  subtitle: {
    fontSize: 30,
    backgroundColor: "#ffff",
    borderRadius: 30,
    textAlign: "center",
  },
  btn: {
    backgroundColor: "#426025",
    width: 200,
    marginLeft: 25,
    borderRadius: 40,
    width: 300,
    marginBottom: 20,
  },
  btnText: {
    fontSize: 30,
    textAlign: "center",
    backgroundColor: "#94da52",
    margin: 10,
    borderRadius: 40,
  },
  michi: {
    width: 300,
    height: 300,
    margin: 20,
  },
  text: {
    fontSize: 25,
    backgroundColor: "#ffff",
    borderRadius: 40,
    textAlign: "center",
    width: 200,
    marginLeft: 70,
    marginBottom: 10,
  },
  data: {
    fontSize: 25,
    backgroundColor: "#ffff",
    borderRadius: 40,
    textAlign: "center",
    width: 250,
    marginLeft: 50,
    marginBottom: 10,
  },
});
