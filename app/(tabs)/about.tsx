import React from "react";
import { Linking, StyleSheet, Image } from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { ThemedTouchableOpacity } from "@/components/ui/ThemedTouchableOpacity";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { useThemeColor } from "@/hooks/useThemeColor";

const About: React.FC = () => {
  const iconColor = useThemeColor({}, "tint");
  const cardBackground = useThemeColor({}, "cardBackground");

  const openGitHub = () => {
    Linking.openURL("https://github.com/stevejoels54");
  };

  const sendEmail = () => {
    Linking.openURL("mailto:joelofelectronics@gmail.com");
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#E1E5E9", dark: "#2D3033" }}
      headerImage={
        <IconSymbol
          size={310}
          color={iconColor}
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">About ServiceFinder</ThemedText>
      </ThemedView>

      <ThemedView style={[styles.card, { backgroundColor: cardBackground }]}>
        <ThemedText type="subtitle">Your Trusted Service Companion</ThemedText>
        <ThemedText style={styles.paragraph}>
          ServiceFinder revolutionizes how you connect with professional service
          providers. Whether you need a painter, carpenter, or any other expert,
          we ensure seamless connections with verified professionals.
        </ThemedText>
      </ThemedView>

      <ThemedView style={[styles.card, { backgroundColor: cardBackground }]}>
        <ThemedText type="subtitle">Our Mission</ThemedText>
        <ThemedText style={styles.paragraph}>
          Created to simplify finding reliable services, ServiceFinder
          eliminates the hassle of endless searches. We're committed to
          efficiency, trust, and quality in every connection made.
        </ThemedText>
      </ThemedView>

      <ThemedView style={[styles.card, { backgroundColor: cardBackground }]}>
        <ThemedText type="subtitle" style={styles.developerName}>
          Meet the Developer
        </ThemedText>
        <Image
          source={require("@/assets/images/developer-avatar.png")}
          style={styles.avatar}
        />
        <ThemedText type="defaultSemiBold" style={styles.developerName}>
          Joel Steven Ssekyewa
        </ThemedText>

        <ThemedTouchableOpacity
          style={styles.contactButton}
          onPress={sendEmail}
        >
          <ThemedText style={styles.contactText}>
            joelofelectronics@gmail.com
          </ThemedText>
        </ThemedTouchableOpacity>

        <ThemedTouchableOpacity
          style={styles.contactButton}
          onPress={openGitHub}
        >
          <ThemedText style={styles.contactText}>
            github.com/stevejoels54
          </ThemedText>
        </ThemedTouchableOpacity>
      </ThemedView>
    </ParallaxScrollView>
  );
};

const styles = StyleSheet.create({
  headerImage: {
    position: "absolute",
    alignSelf: "center",
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 24,
  },
  card: {
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  paragraph: {
    lineHeight: 24,
    marginTop: 12,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: "center",
    marginVertical: 16,
  },
  developerName: {
    textAlign: "center",
    fontSize: 20,
    marginBottom: 16,
  },
  contactButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 4,
    borderRadius: 8,
    marginVertical: 4,
    gap: 4,
  },
  contactText: {
    fontSize: 16,
    textAlign: "center",
  },
});

export default About;
