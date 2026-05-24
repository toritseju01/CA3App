import { View, Text, FlatList, StyleSheet, ActivityIndicator, Image } from 'react-native';

export default function CompaniesScreen({ users }) {
  if (!users || users.length === 0)
    return <ActivityIndicator color="#1a73e8" style={{ marginTop: 40 }} />;

  return (
    <FlatList
      data={users}
      keyExtractor={(_, i) => String(i)}
      contentContainerStyle={{ padding: 16, gap: 10 }}
      renderItem={({ item: u }) => {
        const company = typeof u.company === 'string' ? u.company : u.company?.name || 'N/A';
        return (
          <View style={styles.item}>
            {u.photo ? (
              <Image source={{ uri: u.photo }} style={styles.photo} />
            ) : (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>
                  {(u.name || '').split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()}
                </Text>
              </View>
            )}
            <View style={{ flex: 1 }}>
              <Text style={styles.company}>{company}</Text>
              <Text style={styles.email}>{u.email}</Text>
            </View>
          </View>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  item: { flexDirection: 'row', alignItems: 'center', gap: 12, backgroundColor: '#fff', padding: 14, borderRadius: 12, borderWidth: 0.5, borderColor: '#ddd' },
  photo: { width: 42, height: 42, borderRadius: 21 },
  badge: { width: 42, height: 42, borderRadius: 21, backgroundColor: '#e8f0fe', alignItems: 'center', justifyContent: 'center' },
  badgeText: { color: '#1a73e8', fontWeight: '600', fontSize: 14 },
  company: { fontSize: 13, fontWeight: '500', color: '#111' },
  email: { fontSize: 11, color: '#888', marginTop: 2 },
});