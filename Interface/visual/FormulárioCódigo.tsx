import React, from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

class Formulário__Código extends React.Component {

    constructor(propriedades) {
      super(propriedades)
      this.state = {
        códigoDeServiço: ''
      }
    }

    render() { 
      return (
        <SafeAreaView style={custom.fundo}>
          <StatusBar barStyle={'light-content'}/>

          <View style={ { display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'flex-end' } }>
            <View>
              <Text 
                style={custom.texto_destacado}
              >
                KRSTTMC
              </Text>
              <Text 
                style={custom.texto}
              >
                Tratado com Mecânico
              </Text>
            </View>
          </View>

          <View 
            style=
              {{ 
                display: 'flex', 
                flexDirection: 'column', 
                flex: 0, 
                justifyContent: 'center' 
              }}
          >

            <View>
              <TextInput 
                id='códigoDeServiço'
                style={custom.intro} 
                placeholder='Código de serviço'
                cursorColor={'coral'}
                value={this.state.códigoDeServiço}
                onChangeText={(texto) => this.setState({códigoDeServiço: texto}) }
              >
                  
              </TextInput>
            </View>
          </View>

          <View style=
            {{ 
              display: 'flex', 
              flexDirection: 'column', 
              flex: 1, 
              justifyContent: 'flex-end' 
            }}
          >
          </View>
        </SafeAreaView>
      );
    }
}

const custom = StyleSheet.create({
  fundo: {
    backgroundColor: 'gray',
    height: '100%'
  },

  texto_destacado: {
    fontWeight: '900',
    textAlign: 'center',
    color: 'white'
  },

  texto: {
    textAlign: 'center',
    color: 'white'
  },

  intro: {
    textAlign: 'center',
    margin: 12,
    borderRadius: 4,
    padding: '4%',
    backgroundColor: 'white',
    color: 'coral',
  }
});

export default Formulário__Código;