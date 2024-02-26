/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 1,
    marginTop: 30
  },
  list: {
    paddingVertical: 3,
    marginTop: 3,
  },
  productsList: {
    paddingHorizontal: 16,
  },
   productButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  productButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  editButton: {
    backgroundColor: "#4CAF50",
    color: "white",
    paddingTop: 10,
    paddingLeft:20,
    paddingRight:20,
    paddingBottom:  10,
    borderRadius: 5,
  },
  deleteButton: {
    backgroundColor: "#f44336",
    color: "white",
    paddingTop: 10,
    paddingLeft:20,
    paddingRight:20,
    paddingBottom:  10,
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 5,
    paddingLeft:120,
    paddingRight:120,
    marginTop: 10,
    alignSelf: "center",
  },
  addButtonText: {
    color: "white",
    fontWeight:'bold'
  },
});