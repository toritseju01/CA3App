import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const LAGOS = { latitude: 6.48807231, longitude: 3.8557195, latitudeDelta: 0.01, longitudeDelta: 0.01 };

export default function MapScreen() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={LAGOS}>
        <Marker coordinate={{ latitude: 6.48807231, longitude: 3.8557195 }} title="My Location" description="Pan atlantic university" />
      </MapView>
      <View style={styles.label}>
        <Text style={styles.coords}>6.48807231° N, 3.8557195° E</Text>
        <Text style={styles.place}>Pan Atlantic University</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
  label: { padding: 14, backgroundColor: '#fff', borderTopWidth: 0.5, borderColor: '#ddd' },
  coords: { fontSize: 13, fontWeight: '500', color: '#1a73e8' },
  place: { fontSize: 12, color: '#666', marginTop: 2 },
});