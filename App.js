import React from 'react';
import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';

function Section({ children, title }) {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? 'white' : 'black',
          },
        ]}
      >
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? 'lightgray' : 'gray',
          },
        ]}
      >
        {children}
      </Text>
    </View>
  );
}

function HomePage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Sinew Strength App!</Text>
      <Text style={styles.subtitle}>Ready to go to the next level.</Text>
      <Image
        source={require('./src/components/Images/homepage_trainer.jpeg')}
        style={styles.image}
      />
      <Image
        source={require('./src/components/Images/woman_trainer.jpeg')}
        style={[styles.image, styles.squareImage, styles.leftImage]}
      />
      <Image
        source={require('./src/components/Images/woman_trainer.jpeg')}
        style={[styles.image, styles.squareImage, styles.leftImage]}
      />
    </View>
  );
}

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? 'black' : 'white',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
      >
        <View style={styles.container}>
          <View style={styles.banner}>
            <Text style={styles.bannerText}>
              Sign up now and receive a 50% discount!
            </Text>
          </View>

          <Section title="Home">
            <HomePage />
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  banner: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#BCCDA9',
    padding: 10,
    marginBottom: 10,
  },
  bannerText: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 10,
  },
  title: {
    backgroundColor: '#f5f5f5',
    padding: 16,
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 16,
    color: 'rgb(83, 104, 120)',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '400',
    color: 'rgb(0, 66, 37)',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  image: {
    width: 400,
    height: 200,
    marginTop: 16,
  },
  squareImage: {
    width: 200,
    height: 200,
  },
  leftImage: {
    marginRight: 160,
  },
});
