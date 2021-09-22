import React, { useState } from 'react';
import { View, StyleSheet, Modal, FlatList} from 'react-native';

import defaultProps from '../config/defaultProps';
import MyTextInput from './MyTextInput';
import PickerComponent from './PickerComponent';
import AppIconButtons from './AppIconButtons';
import AppText from './AppText';

const categories = [
    { label : "Food", value:  1},
    { label : "Alcoohol", value:  2},
    { label : "Haine", value:  3},
]

function TakeMoney({selectedItem, onSelectItem, onMoneySpend}) {
    const [allValues, setAllValues] = useState({
        modalVisible : false,
        secondModalVisible: false,
        money:0,
    });
    
    return (      
    <React.Fragment>
        <View style={styles.takeButton}>
                <AppIconButtons iconName="credit-card-minus-outline"
                    onPress={() => setAllValues({...allValues, modalVisible: true})}
                    size={89}
                />
                <AppText text="Take money" style={defaultProps.mainText} />

        </View>
        <Modal visible={allValues.modalVisible} 
        animationType="slide" 
        onRequestClose={() => setAllValues({...allValues, modalVisible: false})} >
            
            <View style={{alignItems: 'center'}}>
                <AppIconButtons iconName = "credit-card-minus-outline" 
                onPress ={() => setAllValues({ ...allValues, secondModalVisible: true})}/>
                <MyTextInput iconName= "credit-card-minus-outline" 
                onChangeText={(amount) => setAllValues({ ...allValues, money : amount})}
                placeholder={selectedItem ? selectedItem.label : "placeholder"}/>

                <AppIconButtons iconName="credit-card-minus-outline"
                        onPress={() => {
                            onMoneySpend(allValues.money);
                            setAllValues({ ...allValues, modalVisible: false});
                        }}
                        
                        size={89}
                    />
            </View>
        </Modal>

        <Modal visible={allValues.secondModalVisible} 
        animationType= "fade"
        onRequestClose ={() => setAllValues({ ...allValues, secondModalVisible: false})}>              
        
            <FlatList
            data={categories}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({item}) =>
            <PickerComponent 
            label={item.label}
            onPress={() => {
                setAllValues({ ...allValues, secondModalVisible: false});
                onSelectItem(item);
            }}/>}
            />
        </Modal>
    </React.Fragment>
    );
}

const styles = StyleSheet.create({
    takeButton: {
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default TakeMoney;