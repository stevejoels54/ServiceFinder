import React, { useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  TextInput,
  Image,
  Platform,
} from "react-native";
import { ServiceProvider } from "../../types/ServiceProvider";
import { sampleProviders } from "../../data/SampleProviders";
import { MaterialIcons } from "@expo/vector-icons";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useThemeColor } from "@/hooks/useThemeColor";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ServiceProviderListScreen() {
  const [searchText, setSearchText] = useState("");
  const inputBackground = useThemeColor({}, "inputBackground");
  const cardBackground = useThemeColor({}, "cardBackground");
  const tintColor = useThemeColor({}, "tint");
  const textColor = useThemeColor({}, "text");
  const placeholderColor = useThemeColor({}, "placeholder");

  const insets = useSafeAreaInsets();

  // Filter providers by username match (only when search has >= 3 chars)
  const usernameMatches =
    searchText.length >= 3
      ? sampleProviders.filter((provider) =>
          provider.username.toLowerCase().includes(searchText.toLowerCase())
        )
      : [];

  // Get unique categories matching search (only when search has >= 3 chars)
  const allMatchingCategories =
    searchText.length >= 3
      ? sampleProviders.flatMap((provider) =>
          provider.categories.filter((category) =>
            category.toLowerCase().includes(searchText.toLowerCase())
          )
        )
      : [];
  const uniqueCategoryMatches = Array.from(new Set(allMatchingCategories));

  const renderServiceProvider = ({ item }: { item: ServiceProvider }) => (
    <ThemedView style={[styles.card, { backgroundColor: cardBackground }]}>
      <Image
        source={
          item.profileImage
            ? { uri: item.profileImage }
            : { uri: "https://avatar.iran.liara.run/public" }
        }
        style={styles.avatar}
      />
      <View style={styles.infoContainer}>
        <ThemedText type="defaultSemiBold">{item.name}</ThemedText>
        <ThemedText style={styles.username}>@{item.username}</ThemedText>
        <View style={styles.categoryContainer}>
          <MaterialIcons name="work" size={16} color={tintColor} />
          <ThemedText style={styles.category}>
            {item.categories.join(" • ")}
          </ThemedText>
        </View>
        <View style={styles.ratingContainer}>
          <MaterialIcons name="star" size={16} color="#FFD700" />
          <ThemedText style={styles.rating}>{item.rating}</ThemedText>
          <ThemedText style={styles.reviews}>
            ({item.reviews} reviews)
          </ThemedText>
        </View>
      </View>
    </ThemedView>
  );

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <TextInput
        style={[
          styles.searchInput,
          {
            backgroundColor: inputBackground,
            color: textColor,
            marginTop: Platform.select({ android: 10, ios: 2 }),
          },
        ]}
        placeholder="Search service providers..."
        placeholderTextColor={placeholderColor}
        value={searchText}
        onChangeText={setSearchText}
        clearButtonMode="while-editing"
      />

      {searchText.length >= 3 ? (
        <>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            Matching Usernames ({usernameMatches.length})
          </ThemedText>
          <FlatList
            data={usernameMatches}
            renderItem={renderServiceProvider}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContent}
          />

          <ThemedText type="subtitle" style={styles.sectionTitle}>
            Matching Categories ({uniqueCategoryMatches.length})
          </ThemedText>
          <FlatList
            data={uniqueCategoryMatches}
            renderItem={({ item }) => (
              <ThemedView
                style={[
                  styles.categoryCard,
                  { backgroundColor: cardBackground },
                ]}
              >
                <ThemedText type="defaultSemiBold">{item}</ThemedText>
              </ThemedView>
            )}
            keyExtractor={(item) => item}
            contentContainerStyle={styles.listContent}
          />
        </>
      ) : (
        <View style={styles.initialState}>
          <MaterialIcons
            name="search"
            size={96}
            color={placeholderColor}
            style={styles.initialIcon}
          />
          <ThemedText type="title" style={styles.initialText}>
            Find Service Providers
          </ThemedText>
          <ThemedText
            style={[styles.initialSubtext, { color: placeholderColor }]}
          >
            Start typing to search by username or category
          </ThemedText>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  searchInput: {
    borderRadius: 8,
    padding: 16,
    fontSize: 16,
    marginBottom: 20,
  },
  card: {
    flexDirection: "row",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  infoContainer: {
    flex: 1,
  },
  username: {
    color: "#666",
    marginBottom: 4,
  },
  categoryContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  category: {
    marginLeft: 8,
    color: "#444",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    marginLeft: 4,
    marginRight: 8,
    color: "#FFD700",
  },
  reviews: {
    color: "#666",
    fontSize: 12,
  },
  sectionTitle: {
    marginVertical: 16,
    paddingLeft: 8,
  },
  categoryCard: {
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
  },
  listContent: {
    paddingBottom: 20,
  },
  emptyState: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
  },
  emptyIcon: {
    marginBottom: 16,
  },
  emptyText: {
    textAlign: "center",
    color: "#888",
  },
  initialState: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  initialIcon: {
    marginBottom: 24,
    opacity: 0.5,
  },
  initialText: {
    textAlign: "center",
    marginBottom: 8,
  },
  initialSubtext: {
    textAlign: "center",
    fontSize: 14,
  },
});
