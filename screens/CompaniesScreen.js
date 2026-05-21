import { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';

export default function CompaniesScreen({ users }) {
  if (!users || users.length === 0) return <ActivityIndicator color="#1a73e8" style={{ marginTop: 40 }} />;

  return (
    <FlatList
      data={users}
      keyExtractor={(_, i) => String(i)}
      contentContainerStyle={{ padding: 16, gap: 10 }}
      renderItem={({ item: u }) => {
        const name = u.name || u.username || '';
        const initials = name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
        const company = u.company?.name || u.company_name || 'N/A';
        return (
          <View style={styles.item}>
            <View style={styles.badge}><Text style={styles.badgeText}>{initials}</Text></View>
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
  badge: { width: 40, height: 40, borderRadius: 10, backgroundColor: '#e8f0fe', alignItems: 'center', justifyContent: 'center' },
  badgeText: { color: '#1a73e8', fontWeight: '600', fontSize: 14 },
  company: { fontSize: 13, fontWeight: '500', color: '#111' },
  email: { fontSize: 11, color: '#888', marginTop: 2 },
});