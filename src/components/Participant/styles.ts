import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container:{
    width: "100%",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: '#1F1E25'
  },

  name:{
    color: '#FFF',
    flex: 1,
    fontSize: 16,
    marginRight: 16,
  },
  buttonText:{
		color: '#FFF',
		fontSize: 24
	},

	button:{
		width:56,
		height: 56,
		borderRadius: 5,
		backgroundColor: '#E23C44',
		alignItems: 'center',
		justifyContent: 'center'
	},
})