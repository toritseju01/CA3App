import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, ActivityIndicator, Image } from 'react-native';

export default function RemoteDataScreen({ users }) {
  const [userId, setUserId] = useState('1');
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  const fetchUser = () => {
    setError(''); setUser(null);
    const num = parseInt(userId) || 1;

    if (num < 1 || num > 10) {
      setError('Please enter a number between 1 and 10.');
      return;
    }

    const found = users[num - 1];
    if (found) { setUser(found); }
    else { setError('No user found. Try again shortly.'); }
  };

  const u = user;
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.sectionTitle}>Enter a user ID to fetch (1–10)</Text>
      <View style={styles.bar}>
        <TextInput
          style={styles.input} value={userId} onChangeText={setUserId}
          keyboardType="numeric" placeholder="User ID"
        />
        <TouchableOpacity style={styles.btn} onPress={fetchUser}>
          <Text style={styles.btnText}>Fetch</Text>
        </TouchableOpacity>
      </View>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      {u && (
        <View style={styles.card}>
          {u.photo ? (
            <Image source={{ uri: u.photo }} style={styles.userPhoto} />
          ) : null}
          <Text style={styles.userName}>{u.name}</Text>
          {u.username && <Row label="Username" value={u.username} />}
          {u.email && <Row label="Email" value={u.email} />}
          {u.phone && <Row label="Phone" value={u.phone} />}
          {u.address && <Row label="Address" value={u.address} />}
          {u.state && <Row label="State" value={u.state} />}
          {u.country && <Row label="Country" value={u.country} />}
          {u.zip && <Row label="Zip" value={u.zip} />}
          {u.company && <Row label="Company" value={typeof u.company === 'string' ? u.company : u.company?.name || ''} />}
          {u.website && <Row label="Website" value={u.website} />}
        </View>
      )}
    </ScrollView>
  );
}

function Row({ label, value }) {
  return (
    <View style={styles.row}>
      <Text style={styles.rowLabel}>{label}:</Text>
      <Text style={styles.rowValue}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  sectionTitle: { fontSize: 11, fontWeight: '600', color: '#888', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 10 },
  bar: { flexDirection: 'row', gap: 10, marginBottom: 16 },
  input: { flex: 1, borderWidth: 0.5, borderColor: '#bbb', borderRadius: 8, paddingHorizontal: 12, paddingVertical: 10, fontSize: 14, backgroundColor: '#fff' },
  btn: { backgroundColor: '#1a73e8', paddingHorizontal: 16, paddingVertical: 10, borderRadius: 8, justifyContent: 'center' },
  btnText: { color: '#fff', fontWeight: '500', fontSize: 14 },
  error: { color: '#c0392b', textAlign: 'center', marginTop: 10, marginBottom: 10 },
  card: { backgroundColor: '#fff', borderRadius: 12, padding: 16, borderWidth: 0.5, borderColor: '#ddd' },
  userPhoto: { width: '100%', height: 180, borderRadius: 10, marginBottom: 12, resizeMode: 'cover' },
  userName: { fontSize: 15, fontWeight: '600', marginBottom: 10, color: '#111' },
  row: { flexDirection: 'row', gap: 8, marginBottom: 5 },
  rowLabel: { fontSize: 12, color: '#888', width: 70 },
  rowValue: { fontSize: 12, color: '#333', flex: 1 },
});