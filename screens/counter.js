import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Counter({ navigation, route }) {
  const [count, setCount] = useState(0);
  const { nombre } = route.params;

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  const handleRestart = () => {
    setCount(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador</Text>
      <Text style={styles.value}>{count}</Text>
      <Text style={styles.hint}>Aquí veremos estado (useState).</Text>
      <TouchableOpacity style={styles.btn} onPress={handleIncrement}>
        <Text style={styles.btnText}>Aumentar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={handleDecrement}>
        <Text style={styles.btnText}>Decrementar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={handleRestart}>
        <Text style={styles.btnText}>Reiniciar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate("ExampleEvent", { total: count, nombre: nombre })
        }
        style={styles.btn}
      >
        <Text style={styles.btnText}>Enviar contador a eventos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.popToTop("Home")}
        style={styles.btnHome}
      >
        <Text style={styles.btnHomeText}>Volver a home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#ffff",
    alignItems:"center"
  },
  title: { fontSize: 24, fontWeight: "700", marginBottom: 12 },
  value: { fontSize: 48, fontWeight: "800", marginBottom: 8 },
  hint: { fontSize: 14, opacity: 0.6 },
  btn: {
    backgroundColor: "#154c9e",
    width: 200,
    borderRadius: 25,
    marginTop: 30,
  },
  btnText: {
    fontSize: 30,
    textAlign: "center",
    backgroundColor: "#94da52",
    margin: 10,
    borderRadius: 25,
  },
  btnHome: {
    backgroundColor: "#606025",
    width: 200,
    borderRadius: 40,
    marginBottom: 20,
        marginTop: 10
  },
  btnHomeText: {
    fontSize: 30,
    textAlign: "center",
    backgroundColor: "#ccda52",
    margin: 10,
    borderRadius: 40,

  },
});
