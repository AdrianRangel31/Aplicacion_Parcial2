import { View, Text, StyleSheet, Image, TouchableOpacity,ScrollView } from "react-native";

export default function HomeScreen({ navigation }) {
  const handlePress = () => {};
  const nombre = "Adrián"

  return (
    <ScrollView
      contentContainerStyle={styles.container}
    >
      <View style={styles.content}>
        <Text style={styles.title}>E-commerce App</Text>
        <Text style={styles.subtitle}> Mi app sera para comprar ropa </Text>
        <Text style={styles.subtitle}>
          Luis Adrián Rangel Vázquez {"\n"} 5°B BIS
        </Text>
        <Image source={require("../assets/uwu.png")} style={styles.michi} />

        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ExampleEvent", { nombre: nombre })
          }
          style={styles.btn}
        >
          <Text style={styles.btnText}> Ir a ExampleEvent</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Counter", { nombre: nombre })}
          style={styles.btn}
        >
          <Text style={styles.btnText}> Ir a Counter</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("AboutMe")}
          style={styles.btn}
        >
          <Text style={styles.btnText}> About Me</Text>
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
