import React, { useState } from 'react';
import { View, StyleSheet, Modal} from 'react-native';

import defaultProps from '../config/defaultProps';
import MyTextInput from './MyTextInput';

function AppPicker({iconName, description }) {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <React.Fragment>
            <View style={styles.addButton}>
                    <AppIconButtons iconName={iconName}
                        onPress={() => setModalVisible(true)}
                        size={66}
                    />
                    <AppText text={description} style={defaultProps.mainText} />

            </View>
            <Modal visible={modalVisible} animationType= "fade">
                <MyTextInput iconName= {iconName} placeholder="Write here..."/>
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

export default AppPicker;