import React, { useEffect, useState } from 'react'
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Wave from '../../assets/images/wave.svg'
import Logo from '../../assets/images/logo2.svg'
import axios from 'axios'
import Icon from 'react-native-vector-icons/Ionicons'

const Home = () => {
    const [datas, setDatas]         = useState([])
    const [isFetched, setIsFetched] = useState(false)

    useEffect(async() => {
        fetchData()
    }, [])

    const fetchData = async() => {
        setIsFetched(false)
        axios({
            url: 'https://v1-sneakers.p.rapidapi.com/v1/sneakers',
            method: 'get',
            headers: {
                "x-rapidapi-key": "2dfa2cb5cbmsh10665e7d5383f36p1bf8a7jsn89e24d5b60c3",
	            "x-rapidapi-host": "v1-sneakers.p.rapidapi.com"
            },
            params: {
                "limit": 10
            }
        })
        .then(res => {
            setDatas(res.data.results)
        })
        .catch(err => {
            alert(err)
        })
        .finally(() => {
            console.log(datas)
            setIsFetched(true)
        })
    }

    return (
        <View style={styles.container}>
            <Wave width="100%" />
            <View style={styles.content}>
                <Logo />
                <ScrollView horizontal style={styles.boxMenu} showsHorizontalScrollIndicator={false}> 
                    <TouchableOpacity activeOpacity={0.5}>
                        <Text style={styles.menuActive}>Men Shoes</Text>
                    </TouchableOpacity>           
                    <TouchableOpacity activeOpacity={0.5} style={{marginLeft: 16}}>
                        <Text style={styles.menuNonActive}>Women Shoes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5} style={{marginLeft: 16, marginRight: 48}}>
                        <Text style={styles.menuNonActive}>Kids Shoes</Text>
                    </TouchableOpacity>
                    
                </ScrollView>
                <ScrollView style={{marginTop: 50}}>
                    <FlatList 
                        data={datas}
                        keyExtractor={(item, index) => `${item.id}-${index}`}
                        numColumns={2}
                        renderItem={({item}) => {
                            return (
                                <TouchableOpacity style={styles.boxProduct} activeOpacity={1}>
                                    <TouchableOpacity style={{alignSelf: 'flex-end', right: 16, marginTop: 16}}>
                                        <Icon name="heart-outline" size={16} color="#111100" />
                                    </TouchableOpacity>
                                    <Image style={styles.productImage} source={{uri: item.media.thumbUrl}} />
                                    <Text style={styles.productTitle}>{item.title}</Text>
                                    <Text style={styles.productPrice}>${item.retailPrice}</Text>
                                </TouchableOpacity>
                            )
                        }}
                    />
                </ScrollView>
            </View>
        </View>
    )
}

const styles  = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#F1F5F8'
    },
    content: {
        position: 'absolute',
        paddingTop: 24, 
        alignItems: 'center', 
        top: 0, 
        left: 0, 
        bottom: 0, 
        right: 0
    },
    boxMenu: {
        paddingLeft: 24,
        position: 'absolute',
        top: 100
    },
    menuActive: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 24,
        color: '#fff'
    },
    menuNonActive: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 24,
        color: '#2C2B2E'
    },
    boxProduct: {
        backgroundColor: '#fff',
        borderRadius: 10,
        marginVertical:16,
        marginHorizontal: 16,
        paddingLeft: 16
    },
    productImage: {
        width: 100,
        height: 60,
        alignSelf: 'center',
        marginHorizontal: 24
    },
    productTitle: {
        fontFamily: 'Montserrat',
        fontSize: 13,
        width: 150,
        marginTop: 8
    },
    productPrice: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 13,
        marginTop: 8,
        marginBottom: 16
    }
})

export default Home