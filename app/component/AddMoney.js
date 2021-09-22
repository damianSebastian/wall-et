import React, { useState } from 'react';
import { View, StyleSheet, Modal} from 'react-native';

import defaultProps from '../config/defaultProps';
import AppIconButtons from './AppIconButtons';
import MyTextInput from './MyTextInput';
import AppText from './AppText';

function AddMoney({onInputMoney}) {
    const [allValues, setAllValues] = useState({
        modalVisible: false,
        money: 0,
    });

    return (
        <React.Fragment>
            <View style={styles.addButton}>
                    <AppIconButtons iconName="credit-card-plus-outline"
                        onPress={() => setAllValues({ ...allValues, modalVisible: true})}
                        size={89}
                    />
                    <AppText text="Add money" style={defaultProps.mainText} />

            </View>

            <Modal visible={allValues.modalVisible}
             animationType= "fade" 
            //  onRequestClose={() => setAllValues({ ...allValues, modalVisible: false})}
             >

                 <View style={{alignItems: 'center'}}>

                    <MyTextInput iconName= "credit-card-plus-outline" placeholder="Write here..."
                    
                    onChangeText={(amount) => setAllValues({ ...allValues, money: amount})}/>
                    <AppIconButtons iconName="credit-card-plus-outline"
                    
                            onPress={() => {
                                onInputMoney(allValues.money);

                                setAllValues({ ...allValues, modalVisible: false});
                            }}
                            
                            size={70}
                        />
                    </View>
            </Modal>

        </React.Fragment>       
        
    );
}

const styles = StyleSheet.create({
    addButton: {
        justifyContent: 'center',
        alignItems: 'center',
    },

})

export default AddMoney;