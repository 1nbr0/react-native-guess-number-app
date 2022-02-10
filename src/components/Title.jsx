import { StyleSheet, Text, View } from "react-native";

export const Title = ({ before=undefined, text }) => {
  return (
    <View style={styles.titleContainer} > 
      {before && <Text style={styles.particule} >{before}</Text>}
      <Text style={styles.body} >{text}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    paddingVertical: 12,
    fontSize: 20,
  },
  particule: {
    color: 'gold',
    fontSize: 40,
    fontWeight: 'bold'
  },
  body: {
    color: 'black',
    fontSize: 40,
    fontWeight: 'bold'
  }
})
