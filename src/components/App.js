import React from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  FlatList,
  View,
  ScrollView,
  Dimensions,


  //Verileri ekranda uygulamaamızı yormayaca şekilde gösteren yapı
} from 'react-native';

import news_data from '../../news_data.json';
import news_banner_data from '../../news_banner_data.json';
import NewsCard from './NewsCard';


function App() {
  const renderNews=({item}) => <NewsCard news={item} />;//Bi fonksiyonu çok kez oluşturmak yerine hazır fonksiyonu kullan.
  return (
    <View style={styles.container}>
     
   <Text style={styles.headerText}>NEWSAPP </Text>
      <FlatList
      ListHeaderComponent={()=>(<ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {news_banner_data.map(bannerNews=>(
          <Image  style={styles.banner_image}source={{uri:bannerNews.imageUrl}} />
        ))}
       </ScrollView>)}
      keyExtractor={item=>item.u_id.toString()}//Verilerin her zaman id leri bulunmaz bizim flatlistimiz ayırt edebilsin diye bizim 
      //flat liste id oluşturmamız lazımmm  
        data={news_data}
        renderItem={renderNews}></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',

  },
  banner_image:{
   height: Dimensions.get('window').height/5,
   width:Dimensions.get('window').height/2,
  },
  headerText:{
    fontWeight:'bold',
    fontSize: 50,
    color:"#a52a2a",
  }
});

export default App;
