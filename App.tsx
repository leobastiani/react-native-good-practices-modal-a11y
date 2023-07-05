import React, {useState} from 'react';
import {Button, Modal, SafeAreaView, Text, View} from 'react-native';

function App(): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => setIsVisible(true)} title="Abrir modal" />
      <Modal visible={isVisible} transparent animationType="slide">
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <View
            style={{backgroundColor: '#fff', padding: 20, borderRadius: 10}}>
            <Text>Estou no modal</Text>
            <Button onPress={() => setIsVisible(false)} title="Fechar modal" />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

export default App;
