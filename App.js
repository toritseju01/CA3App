import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import WelcomeScreen from './screens/WelcomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import RemoteDataScreen from './screens/RemoteDataScreen';
import CompaniesScreen from './screens/CompaniesScreen';
import MapScreen from './screens/MapScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://fake-json-api.mock.beeceptor.com/users')
      .then(r => r.json())
      .then(data => setUsers(Array.isArray(data) ? data : data.data || []))
      .catch(e => console.log('Fetch error:', e));
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            const icons = {
              Welcome: 'home-outline',
              Profile: 'person-outline',
              Remote: 'cloud-download-outline',
              Companies: 'business-outline',
              Map: 'map-outline',
            };
            return <Ionicons name={icons[route.name]} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#1a73e8',
          tabBarInactiveTintColor: 'gray',
          headerStyle: { backgroundColor: '#1a73e8' },
          headerTintColor: '#fff',
        })}
      >
        <Tab.Screen name="Welcome" component={WelcomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Remote">
          {() => <RemoteDataScreen users={users} />}
        </Tab.Screen>
        <Tab.Screen name="Companies">
          {() => <CompaniesScreen users={users} />}
        </Tab.Screen>
        <Tab.Screen name="Map" component={MapScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}