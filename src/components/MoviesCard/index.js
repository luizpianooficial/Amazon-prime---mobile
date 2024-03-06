import { TouchableOpacity, StyleSheet, Image } from "react-native"


export const MoviesCard = (props) =>{
  return(
    <TouchableOpacity>
      <Image styles={styles.img} source={props.movieURL} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  img:{
    margin: 20,
      
  }
})