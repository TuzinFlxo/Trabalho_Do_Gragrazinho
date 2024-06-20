import React from 'react';
import { StyleSheet, Image, View, Pressable, Linking } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image source={require('@/assets/images/logo2.jpg')} style={styles.headerImage} />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Redes sociais</ThemedText>
      </ThemedView>

      <ThemedView style={styles.contentContainer}>
        <SocialButton
          icon={require('@/assets/images/1.png')}
          onPress={() => Linking.openURL(' https://wa.me/(55)18998203847')}
          text="Whatsapp"
        />
        <SocialButton
          icon={require('@/assets/images/2.png')}
          onPress={() => Linking.openURL('https://www.instagram.com/matheuspontes_le/?next=%2F')}
          text="Instagram"
        />
        <SocialButton
          icon={require('@/assets/images/3.png')}
          onPress={() => Linking.openURL('https://github.com/TuzinFlxo')}
          text="Github"
        />
        <SocialButton
          icon={require('@/assets/images/0.png')}
          onPress={() => Linking.openURL('tel:5518998203847')}
          text="Telefone"
        />
        <SocialButton
          icon={require('@/assets/images/5.png')}
          onPress={() => Linking.openURL('https://discord.com/channels/@me')}
          text="Discord"
        />
        <SocialButton
          icon={require('@/assets/images/6.png')}
          onPress={() => Linking.openURL('https://www.linkedin.com/in/matheus-pontes-bb1032315/')}
          text="Linkedin"
        />
        <SocialButton
          icon={require('@/assets/images/4.png')}
          onPress={() => Linking.openURL('https://x.com/LayserBot?t=32YuL691_3tXrlz8nkvdDA&s=09')}
          text="Twiter"
        />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const SocialButton = ({ icon, onPress, text }) => (
  <Pressable style={styles.button} onPress={onPress}>
    <Image source={icon} style={styles.icon} />
    <ThemedText style={styles.buttonText}>{text}</ThemedText>
  </Pressable>
);

const styles = StyleSheet.create({
  headerImage: {
    width: '100%',
    height: '100%',
  },
  titleContainer: {
    padding: 16,
  },
  contentContainer: {
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start', // alinha os itens à esquerda
    marginTop: 16,
    backgroundColor: 'white',
    borderRadius: 16, // deixando mais quadradinho
    padding: 16, // aumentando o padding para aumentar o tamanho
    width: '100%', // padronizando o tamanho
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 8,
  },
  buttonText: {
    flex: 1, // para o texto ocupar o espaço restante
    textAlign: 'center', // centraliza o texto
    color: 'black', // cor do texto
  },
});

