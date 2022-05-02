import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import MapViewDirections from "react-native-maps-directions";

import {SecondaryButton} from '../components/Button';
import { icons, COLORS, GOOGLE_API_KEY } from '../../consts'

import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const OrderDelivery = ({ navigation, route }) => {
    const item = route.params;

    const mapView = React.useRef()

    //const [item, setItem] = React.useState(null)
    const coordinates = [
      {
        //origin
        latitude: 1.5496614931250685,
        longitude: 110.36381866919922,
      },
      {
        //destination
        latitude: item.location.latitude,
        longitude: item.location.longitude,
      }
    ]
    ;

    const region = {
      latitude: (1.5496614931250685 + item.location.latitude)/2  ,
      longitude: (110.36381866919922 + item.location.longitude)/2 ,
      latitudeDelta: Math.abs(1.5496614931250685 - item.location.latitude)*2 ,
      longitudeDelta: Math.abs(110.36381866919922 - item.location.longitude)*2,
    }

       
    function renderMap() {
        const destinationMarker = () => (
            <Marker
                coordinate={{latitude:item.toLocationLat, longitude:item.toLocationLon}}
            >
                <View
                    style={{
                        height: 40,
                        width: 40,
                        borderRadius: 20,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: COLORS.white
                    }}
                >
                    <View
                        style={{
                            height: 30,
                            width: 30,
                            borderRadius: 15,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: COLORS.primary
                        }}
                    >
                        <Image
                            source={icons.pin}
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: COLORS.white
                            }}
                        />
                    </View>
                </View>
            </Marker>
        )

        const carIcon = () => (
            <Marker
                coordinate={coordinates[0]}
                anchor={{ x: 0.5, y: 0.5 }}
                flat={true}
            >
                <Image
                    source={icons.car}
                    style={{
                        width: 40,
                        height: 40
                    }}
                />
            </Marker>
        )

        const pinIcon = () => (
            <Marker
              coordinate={coordinates[1]}
              anchor={{ x: 0.5, y: 0.5 }}
              flat={true}
            >
              <Image
                source={icons.red_pin}
                style={{
                width: 30,
                height: 30,
                marginRight: 10,
                }}
              />
            </Marker>
        )

        return (
            <View style={{ flex: 1 }}>
                <MapView
                    ref={mapView}
                    provider={PROVIDER_GOOGLE}
                    initialRegion={region}
                    style={{ flex: 1 }}
                >
                    <MapViewDirections
                        origin={coordinates[0]}
                        destination={coordinates[1]}
                        apikey={GOOGLE_API_KEY}
                        strokeWidth={5}
                        strokeColor={COLORS.primary}
                        optimizeWaypoints={true}
                    />
                    {destinationMarker()}
                    {coordinates[0]? carIcon() : null}
                    {coordinates[1]? pinIcon() : null}
                </MapView>
            </View>
        )
    }

    function renderDestinationHeader() {
    return (
      <View
        style={{
          position: 'absolute',
          top: 50,
          left: 0,
          right: 0,
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 80,
          
        }}
      >
      
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: width * 0.9,
            paddingVertical: 10,
            paddingHorizontal: 10 * 2,
            borderRadius: 30,
            backgroundColor: COLORS.white
          }}>
          
          <Image
            source={icons.red_pin}
            style={{
              width: 30,
              height: 30,
              marginRight: 10,
            }}
          />
          <Text style={{ fontSize: 16 }}> 
            {item.shop} 
          </Text>
        </View>
      </View>
    )
  }

    return (
        <View style={{ flex: 1 , backgroundColor: COLORS.white}}>
          <View style={style.header}>
            <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} />
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black',}}> Order Delivery</Text>
          </View>
          {renderMap()}
            
          {renderDestinationHeader()}
        </View>
    )
}

const style = StyleSheet.create({
  header: {
    //flex:1,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 50,
  
  },
});  

export default OrderDelivery;
