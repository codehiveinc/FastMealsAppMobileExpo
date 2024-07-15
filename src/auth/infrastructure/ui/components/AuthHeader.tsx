import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface AuthHeaderProps {
  activeTab: number;
  setActiveTab: (index: number) => void;
}

const AuthHeader = ({ activeTab, setActiveTab }: AuthHeaderProps) => (
  <View style={styles.header}>
    <Ionicons name="person-circle-outline" size={100} />
    <Text style={styles.welcomeText}>Bienvenido de vuelta</Text>
    <View style={styles.tabContainer}>
      <TouchableOpacity
        style={[styles.tab, activeTab === 0 && styles.lineTab]}
        onPress={() => setActiveTab(0)}
      >
        <Text style={[styles.tabText, activeTab === 0 && styles.activeTab]}>
          Inicia Sesión
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === 1 && styles.lineTabRegister]}
        onPress={() => setActiveTab(1)}
      >
        <Text style={[styles.tabText, activeTab === 1 && styles.activeTab]}>
          Regístrate
        </Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "white",
    paddingTop: 80,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: "#000",
    width: "100%",
    height: "35%",
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 5,
  },
  tabContainer: {
    flexDirection: "row",
  },
  tab: {
    marginHorizontal: 10,
    marginTop: 30,
    paddingBottom: 5,
  },
  tabText: {
    fontSize: 18,
    color: "#888",
  },
  activeTab: {
    color: "black",
  },
  lineTab: {
    borderBottomWidth: 4,
    borderBottomColor: "#0C9488",
    marginRight: 60,
  },
  lineTabRegister: {
    borderBottomWidth: 4,
    borderBottomColor: "#0C9488",
    marginLeft: 60,
  },
});

export default AuthHeader;
