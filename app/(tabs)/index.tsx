import { Image, StyleSheet, Platform } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/logo.jpg")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.tituloContainer}>
        <ThemedText type="title">Bem vindo as Terras Intermédias!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.tituloContainer}>
        <ThemedText type="subtitle">Sobre o app:</ThemedText>
      </ThemedView>
      <ThemedView style={styles.textoContainer}>
        <ThemedText>
          <ThemedText type="defaultSemiBold">
            MikotoPlace's oferece a solução perfeita para centralizar o gerenciamento de suas redes sociais.
            Conecte-se e sincronize suas contas de várias plataformas, como Facebook, Twitter, Instagram, LinkedIn e outras,
            simplificando a interação e visualização de suas redes em um só lugar.
            Simplifique sua presença online com MikotoPlace's.
          </ThemedText>
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.tituloContainer}>
        <ThemedText type="subtitle">Sobre mim:</ThemedText>
      </ThemedView>
      <ThemedView style={styles.textoContainer}>
        <ThemedText>
          Olá! Eu sou Luis Rosário e estou desenvolvendo uma nova plataforma de Redes Sociais.
          Junte-se a nós para uma experiência online mais conectada e significativa!
        </ThemedText>
      </ThemedView> 
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  tituloContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  textoContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 300,
    width: 550,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});