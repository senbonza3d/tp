import React, { useContext } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthProvider, { AuthContext } from './context/AuthContext';
import AppDrawer from './navigation/AppDrawer';
import LoginScreen from './screens/LoginScreen';
import { Provider } from 'react-redux';
import { store } from './store/store';

function RootNavigator() {
  const { user } = useContext(AuthContext);
  return user ? <AppDrawer /> : <LoginScreen />;
}

export default function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <NavigationContainer>
          <SafeAreaView style={styles.safeArea}>
            <RootNavigator />
          </SafeAreaView>
        </NavigationContainer>
      </AuthProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({ safeArea: { flex: 1, backgroundColor: '#fff' } });
