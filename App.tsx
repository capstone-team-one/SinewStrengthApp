// The React import is needed to define React components,
//   and PropsWithChildren is a type import from React used 
//   to define props for a component that can accept child elements.
//   The other imports are various components from React Native that 
//   will be used in the application.

import { Image } from 'react-native';
import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

// a type definition is created for the Section component.
//  It accepts props with children and a title property of type string:

type SectionProps = PropsWithChildren<{
  title: string;
}>;

// The Section component is then defined.It receives the title and children props
//  and returns a JSX element.It uses the useColorScheme hook from React Native to 
//  determine if the device is in dark mode.The component renders a View containing 
//  a Text element for the title and another Text element for the description:

function Section({ children, title }: SectionProps): JSX.Element {
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


// HomePage component is defined. 
// It is a simple component that renders a View containing two Text elements:



function HomePage(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My Personal Trainer App!</Text>
      <Text style={styles.subtitle}>Ready to go to the next level.</Text>
      <Image
        source={require('./src/components/Images/homepage_trainer.jpeg')}
        style={styles.image}
      />
      <Image
        source={require('./src/components/Images/woman_trainer.jpeg')}
        style={[styles.image, styles.squareImage, styles.leftImage]}
      />
    </View>
  );
}





// App component is defined.It uses the useColorScheme hook to determine
// if the device is in dark mode.It sets the background style based on the dark mode,
//   and renders a SafeAreaView component with a StatusBar and a ScrollView inside.
//   The ScrollView contains a Section component with the title "Home" 
//   and the HomePage component as its child:


// ...

function App(): JSX.Element {
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

// ...





const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    },
  banner: {
    flexDirection:'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#BCCDA9',
    padding: 10,
    marginBottom: 10,
  },

  bannerText: {
    flex:1,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginLeft:10,
  },
  title: {
    backgroundColor: '#f5f5f5',
    padding:16,
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 16,
    color: 'rgb(83, 104, 120)',
  
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '400',
    color: 'rgb(47, 79, 79)',
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
    width: 200, // Set the same width as the height
    height: 200, // Set the same height as the width
  },
  leftImage: {
    marginRight: 160, // Add margin to create space between the images
  },


});

export default App;
