import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

class FormulárioCódigo extends React.Component {

    constructor(propriedades) {
      super(propriedades)
      this.state = {
        códigoDeServiço: '',
        erroCódigoDeServiço: ''
      }

      
    }

    render() { 
      const regexCódigoDeServiço = new RegExp('[a-zA-Z0-9]')
      var códigoVálido = '1q2w3e'

      return (
        <SafeAreaView style={custom.fundo}>
          <StatusBar barStyle={'light-content'}/>

          <View style=
            {{ 
              display: 'flex', 
              flexDirection: 'column', 
              flex: 1, 
              justifyContent: 'flex-end' 
            }}
          >
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
                autoCapitalize='none'
                value={this.state.códigoDeServiço}
                onChangeText={(texto) => {
                  this.setState({códigoDeServiço: texto}, () => {
                    var códigoTratado = this.state.códigoDeServiço.replaceAll(' ', '');

                    if (códigoTratado.length == 6 || códigoTratado.length > 6) {
                      if (regexCódigoDeServiço.test(códigoTratado) && códigoTratado.length == 6 && códigoTratado === códigoVálido) {
                        this.setState({erroCódigoDeServiço: 'CÓDIGO CORRECTO'})
                      }
                      else {
                        this.setState({erroCódigoDeServiço: 'O código está demasiado grande!'})
                      }
                    } else {
                      this.setState({erroCódigoDeServiço: ''})
                    }
                  });
                }}
              >
                  
              </TextInput>

            </View>
              <Text>{this.state.erroCódigoDeServiço}</Text>
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

export default FormulárioCódigo;