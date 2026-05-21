import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const rows = [
  { icon: 'card-outline', label: 'Student ID', value: 'PAU/2021/CS/0047' },
  { icon: 'mail-outline', label: 'Email', value: 'chika@students.pau.edu.ng' },
  { icon: 'call-outline', label: 'Phone', value: '+234 810 419 2048' },
  { icon: 'school-outline', label: 'Department', value: 'School of media studies' },
  { icon: 'location-outline', label: 'Campus', value: 'Lekki, Lagos, Nigeria' },
];

export default function ProfileScreen() {
  return (
    <ScrollView>
      <View style={styles.header}>
        <View style={styles.avatarCircle}><Text style={styles.avatarText}>CC</Text></View>
        <Text style={styles.name}>Chika something</Text>
        <Text style={styles.role}>ISMS · Year 3</Text>
      </View>
      <View style={styles.body}>
        {rows.map((r) => (
          <View key={r.label} style={styles.row}>
            <Ionicons name={r.icon} size={20} color="#1a73e8" style={styles.icon} />
            <View>
              <Text style={styles.label}>{r.label}</Text>
              <Text style={styles.value}>{r.value}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: { backgroundColor: '#1a73e8', padding: 28, alignItems: 'center' },
  avatarCircle: { width: 72, height: 72, borderRadius: 36, backgroundColor: 'rgba(255,255,255,0.3)', alignItems: 'center', justifyContent: 'center', marginBottom: 10 },
  avatarText: { color: '#fff', fontSize: 24, fontWeight: '600' },
  name: { color: '#fff', fontSize: 18, fontWeight: '600' },
  role: { color: 'rgba(255,255,255,0.8)', fontSize: 13, marginTop: 2 },
  body: { padding: 16, gap: 10 },
  row: { flexDirection: 'row', alignItems: 'center', gap: 12, backgroundColor: '#fff', padding: 14, borderRadius: 12, borderWidth: 0.5, borderColor: '#ddd' },
  icon: { marginRight: 4 },
  label: { fontSize: 11, color: '#888' },
  value: { fontSize: 13, fontWeight: '500', color: '#111' },
});