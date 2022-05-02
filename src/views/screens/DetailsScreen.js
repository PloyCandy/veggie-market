import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import {SecondaryButton} from '../components/Button';

const DetailsScreen = ({navigation, route}) => {
  const item = route.params;

  return (
    <SafeAreaView style={{backgroundColor: COLORS.white, flex:1}}>
      <View style={style.header}>
        <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} />
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Product Details</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={true}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: 280,
            flex:1,
          }}>
          <Image source={item.image} style={{height: 220, width: 220}} />
        </View>
        <View style={style.details}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{fontSize: 25, fontWeight: 'bold', color: COLORS.white}}>
              {item.name}
            </Text>
            <Text
              style={{fontSize: 25, fontWeight: 'bold', color: COLORS.white}}>
              ${item.price}
            </Text>
          </View>
          <Text style={style.detailsText}>
            {item.shop}
          </Text>
          <Text style={style.detailsText}>
            Delivery Time: {item.duration}     
          </Text>


          <View style={{flex:1, marginTop: 30, marginBottom: 10, }}>
      
            <SecondaryButton 
              onPress={() => navigation.navigate('OrderDelivery', {
                name: item.name,
                shop: item.shop,
                price: item.price,
                image: item.image,
                duration: item.duration,
                locationLat: item.location.latitude,
                locationLon: item.location.longitude,
                location: item.location,
                navigation: navigation,   
               
              })}
              title="Order now" 
            />
                
            
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    flex:1,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  details: {
    flex:1,
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 200,
    backgroundColor: COLORS.primary,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    //marginBottom: 0,
  },
 
  detailsText: {
    marginTop: 10,
    lineHeight: 22,
    fontSize: 16,
    color: COLORS.white,
  },
});

export default DetailsScreen;
