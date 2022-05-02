import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  FlatList,
  ScrollView,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
//import categories from '../../consts/categories';
//import foods from '../../consts/foods';
import Categories from '../../consts/items';
const {width} = Dimensions.get('screen');
const cardWidth = width / 2 - 20;

const HomeScreen = ({navigation}) => {

 

  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState([0]);
 


  const ListCategories = () => {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={style.categoriesListContainer}>
        {Categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setSelectedCategoryIndex(index)}>
            <View
              style={{
                backgroundColor:
                  selectedCategoryIndex == index
                    ? COLORS.secondary
                    : COLORS.primary,
                ...style.categoryBtn,
              }}>
              <View style={style.categoryBtnImgCon}>
                <Image
                  source={item.image}
                  style={{height: 35, width: 35, resizeMode: 'cover'}}
                />
              </View>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  marginLeft: 10,
                  color:
                    selectedCategoryIndex == index
                      ? COLORS.green
                      : COLORS.white,
                }}>
                {item.name}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };

  const renderItems = (data, index) => {
    return (
  
        <TouchableOpacity
          key={index}
          activeOpacity={0.9}
          style={{
            width: '100%',
            height: 180,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: COLORS.primary,

          }}
          onPress={() => navigation.navigate('DetailsScreen', {
              name: data.name,
              shop: data.shop,
              price: data.price,
              image: data.image,
              duration: data.duration,
              locationLat: data.location.latitude,
              locationLon: data.location.longitude,
              location: data.location,
              navigation: navigation,   
             
            })
            
          }>
          <View
            style={{
              width: '90%',
              height: 160,
              backgroundColor: COLORS.white,
              borderRadius: 20,
              elevation: 4,
              position: 'relative',
              padding: 15,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            
            <View style={{marginBottom: 50}}>
              <Text
                style={{
                  fontSize: 22,
                  color: COLORS.black,
                  fontWeight: 'bold',
                  paddingTop: 50,
                }}>
                {data.name}
              </Text>
              <Text style={{fontSize: 14, color: COLORS.grey, marginTop: 2}}>
                  {data.shop}
              </Text>
              <View
                style={{
                  marginTop: 10,
                  marginHorizontal: 0,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                  ${data.price}
                </Text>
              </View>
              <View 
                style={{
                  marginTop:10,
                }}>
                <View style={style.addToCartBtn}>
                  <Icon name="add" size={20} color={COLORS.white} />
                </View>
              </View>
                            
              
            </View>
            <View style={{width: 130, height: 130, marginRight: 0}}>
              <Image
                source={data.image}
                style={{
                  width: '100%',
                  height: '100%',
                  resizeMode: 'contain',
                }}
              />
            </View>
            <View
              style={{
                position: 'absolute',
                bottom: 0,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: 85,
                  height: 50,
                  backgroundColor: COLORS.accent,
                  borderTopRightRadius: 20,
                  borderBottomLeftRadius: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: 20,
                }}>
                
                <Text
                  style={{
                    fontSize: 15,
                    color: COLORS.black,
                    fontWeight: 'bold',
                  }}>
                  {data.rating}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
    
    )
  };
  

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primary}}>
      <View style={style.header}>
        <View>
          
          <Text 
            style={{
              marginTop: 5, 
              fontSize: 25, 
              color: COLORS.dark,
              fontWeight: '700',
            }}>
            Welcome to Veggie Market !
          </Text>
          <Text 
            style={{
              marginTop: 10, 
              fontSize: 20, 
              color: COLORS.dark,
              fontWeight: '500'
            }}>
            Hope you have a veggie healthy day ;)
          </Text>
        </View>
        
      </View>
      
      <View>
        <ListCategories />
      </View>
      <View
        style={{
          backgroundColor: COLORS.yellow,
          marginTop: 10,
        }}>
        <Text
              style={{
                paddingVertical:10,
                paddingHorizontal: 20,
                fontSize: 30,
                fontWeight: '700',
              }}>
              Product List
        </Text>
      </View>
      
      <ScrollView showsVerticalScrollIndicator={true}>
        <View>
          {Categories[selectedCategoryIndex].items.map(renderItems)}
        </View>
      </ScrollView>

    </SafeAreaView>
  );
};


const style = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  inputContainer: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  categoriesListContainer: {
    paddingTop: 20,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  categoryBtn: {
    height: 50,
    width: 145,
    marginRight: 7,
    borderRadius: 30,
    alignItems: 'center',
    paddingHorizontal: 5,
    flexDirection: 'row',
  },
  categoryBtnImgCon: {
    height: 40,
    width: 40,
    backgroundColor: COLORS.white,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
 
  addToCartBtn: {
    height: 40,
    width: 50,
    borderRadius: 20,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
