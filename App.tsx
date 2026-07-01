import { useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  Pressable,
  View,
} from "react-native";

import CourseSummaryScreen from "./screens/CourseSummaryScreen";
import SessionListScreen from "./screens/SessionListScreen";
import WeeklyScheduleScreen from "./screens/WeeklyScheduleScreen";

type ScreenName = "courseSummary" | "sessionList" | "weeklySchedule";

export default function App() {
  const [activeScreen, setActiveScreen] = useState<ScreenName>("courseSummary");

  const renderScreen = () => {
    if (activeScreen === "courseSummary") {
      return <CourseSummaryScreen />;
    }

    if (activeScreen === "sessionList") {
      return <SessionListScreen />;
    }

    return <WeeklyScheduleScreen />;
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.appHeader}>
        <Text style={styles.appTitle}>Class Schedule App</Text>
      </View>

      <View style={styles.navigationContainer}>
        <Pressable
          style={[
            styles.navigationButton,
            activeScreen === "courseSummary" && styles.activeNavigationButton,
          ]}
          onPress={() => setActiveScreen("courseSummary")}
        >
          <Text
            style={[
              styles.navigationText,
              activeScreen === "courseSummary" && styles.activeNavigationText,
            ]}
          >
            Summary
          </Text>
        </Pressable>

        <Pressable
          style={[
            styles.navigationButton,
            activeScreen === "sessionList" && styles.activeNavigationButton,
          ]}
          onPress={() => setActiveScreen("sessionList")}
        >
          <Text
            style={[
              styles.navigationText,
              activeScreen === "sessionList" && styles.activeNavigationText,
            ]}
          >
            Sessions
          </Text>
        </Pressable>

        <Pressable
          style={[
            styles.navigationButton,
            activeScreen === "weeklySchedule" && styles.activeNavigationButton,
          ]}
          onPress={() => setActiveScreen("weeklySchedule")}
        >
          <Text
            style={[
              styles.navigationText,
              activeScreen === "weeklySchedule" && styles.activeNavigationText,
            ]}
          >
            Schedule
          </Text>
        </Pressable>
      </View>

      <View style={styles.screenContainer}>{renderScreen()}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f5f6fa",
  },
  appHeader: {
    backgroundColor: "#ffffff",
    paddingVertical: 40,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
  },
  appTitle: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "#111827",
  },
  navigationContainer: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    padding: 10,
    gap: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
  },
  navigationButton: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: "#e5e7eb",
    alignItems: "center",
  },
  activeNavigationButton: {
    backgroundColor: "#1f2937",
  },
  navigationText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#374151",
  },
  activeNavigationText: {
    color: "#ffffff",
  },
  screenContainer: {
    flex: 1,
  },
});