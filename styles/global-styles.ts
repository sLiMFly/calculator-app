import { Colors } from "@/constants/Colors";
import { Button, StyleSheet } from "react-native";

export const globalStyles = {
  background: {
    backgroundColor: Colors.background,
    flex: 1,
  },

  calculatorContainer: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBotton: 20,
  },

  mainResult: {
    color: Colors.textPrimary,
    fontSize: 70,
    textAlign: "right",
    fontweight: "400",
    //fontFamily: "SpaceMono",
  },

  subResult: {
    color: Colors.textSecondary,
    fontSize: 40,
    textAlign: "right",
    fontweight: "300",
  },

  row: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 18,
    paddingHorizontal: 10,
  },

  button: {
    height: 80,
    width: 80,
    backgroundColor: Colors.darkGray,
    borderRadius: 100,
    justifyContent: "center",
    marginHorizontal: 10,
  },

  buttonText: {
    textAlign: "center",
    padding: 10,
    fontSize: 30,
    color: Colors.textPrimary,
    fontWeight: "300",
    fontFamily: "SpaceMono",
  },
} as const;
