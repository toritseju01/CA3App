import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function WelcomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.avatarCircle}>
  <Text style={styles.avatarEmoji}>🎓</Text>
</View>
      <Text style={styles.name}>Group 1 CA3</Text>
      <Text style={styles.sub}>ISMS · Pan-Atlantic University</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>About This App</Text>
        <Text style={styles.cardText}>
          A 5 screen mobile app for CA3. Fetches real user data from a remote
          API, displays company and email info in a scrollable list, and shows
          your location on a map.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', padding: 24, gap: 14 },
  name: { fontSize: 22, fontWeight: '600', color: '#111' },
  sub: { fontSize: 14, color: '#666', textAlign: 'center' },
  card: { width: '100%', backgroundColor: '#fff', borderRadius: 12, padding: 16, borderWidth: 0.5, borderColor: '#ddd' },
  cardTitle: { fontSize: 13, fontWeight: '600', color: '#555', marginBottom: 6 },
  cardText: { fontSize: 13, color: '#333', lineHeight: 20 },
  avatarCircle: {
    width: 100, height: 100, borderRadius: 50,
    backgroundColor: '#e8f0fe',
    alignItems: 'center', justifyContent: 'center',
    borderWidth: 3, borderColor: '#1a73e8',
  },
  avatarEmoji: { fontSize: 44 },
});