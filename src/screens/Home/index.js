import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, FlatList, ScrollView } from "react-native";
import PrimeVideoLogo from "../../assets/prime_video.png";
import amazon_logo from "../../assets/amazon_logo.png";
import MoveiesWhell from "../../assets/movies/the_wheel_of_time.png";
import { MOVIESWATCHING } from "../../utils/moviesWatching";
import { MOVIESCRIME } from "../../utils/moviesCrimes";
import { MOVIESWATCH } from "../../utils/moviesWatch";
import { MoviesCard } from "../../components/MoviesCard";

export const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.PrimeVideoLogo} source={PrimeVideoLogo}/>
        <Image style={styles.amazon_logo} source={amazon_logo}/>
      </View>

      <View style={styles.category}>
          <TouchableOpacity>
            <Text style={styles.categoryText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.categoryText}>Tv shows</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.categoryText}>Filmes</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.categoryText}>Tv kids</Text>
          </TouchableOpacity>
      </View>

      <ScrollView  style={styles.containerMovies}>
        <TouchableOpacity style={styles.Moviesbanner}>
          <Image style={styles.Moviesbanner1} source={MoveiesWhell} />
        </TouchableOpacity>

        <Text style={styles.MovieText}>Continua assistindo</Text>
        <FlatList
          data={MOVIESWATCHING} 
          keyExtractor={(item) => item.id}
          renderItem={({item}) => <MoviesCard movieURL={item.moviesURL}/>}
          horizontal
          contentContainerStyle={styles.containerList}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
        />

        <Text style={styles.MovieText}>Filmes Criminais</Text>
        <FlatList
          data={MOVIESCRIME} 
          keyExtractor={(item) => item.id}
          renderItem={({item}) => <MoviesCard movieURL={item.moviesURL}/>}
          horizontal
          contentContainerStyle={styles.containerList}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
        />

        <Text style={styles.MovieText}>Outras linguas</Text>
        <FlatList
          data={MOVIESWATCH} 
          keyExtractor={(item) => item.id}
          renderItem={({item}) => <MoviesCard movieURL={item.moviesURL}/>}
          horizontal
          contentContainerStyle={styles.containerList}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
        />
      </ScrollView>
    </View>
  );
} 

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#232F3E"
  },
  header:{
    width: "100%",
    padding: 80,
    alignItems: "center",
    justifyContent: "center"
  },
  amazon_logo:{
    marginTop: -32,
    marginLeft: 30
  },
  category:{
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: -30,
    marginBottom: 15,
  },
  categoryText:{
    fontSize: 14, 
    fontWeight: "700",
    color: "#FFFF"
  },
  Moviesbanner:{
    width: "100%",
    alignItems: "center"
  },
  containerList:{
    paddingLeft:18,
    paddingRight:30,
  },
  MovieText:{
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    padding: 15,
  },
  containerMovies:{
    margin:2,
  
  }
});
