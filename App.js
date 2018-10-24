import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  
  constructor(props){
    
    super(props)
    this.state = {
      number: 0,
      goOrStop: 'Iniciar',
      test: 'white'
    }
    this.timer = null;
    this.go = this.go.bind(this);
    this.clean = this.clean.bind(this);

  }

  go(){
    const state = this.state;
    if(this.timer != null){
      clearInterval(this.timer);
      this.timer = null;
      state.goOrStop = 'Iniciar';
      this.setState(state);
    } else {
      state.goOrStop = 'Parar'
      this.timer = setInterval(()=>{
        state.number += 1;
        this.setState(state);
      }, 100);
    }
  }

  clean(){
    const state = this.state;
    if(this.timer != null || this.timer == null){
      clearInterval(this.timer);
      this.timer = null;
      state.number = 0;
      this.setState(state);
    } 
  }

  //toFixed irá colocar o número com casas decimais
  render() {
    return (
      <View style={styles.body}>

        <Image source={require('./images/relogio.png')} />

        <Text style={styles.timer}>{this.state.number.toFixed(1)}</Text>

        <View style={styles.areaButton}>

          <TouchableOpacity style={styles.button} onPress={this.go}>
            <Text style={styles.buttonTxt}>{this.state.goOrStop}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={this.clean}>
            <Text style={styles.buttonTxt}>Limpar</Text>
          </TouchableOpacity>

        </View>

      </View>
    );
  }
}

//'#886532'
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2c1f30'
  },
  timer: {
    fontSize: 65,
    color: '#baa07a',
    marginTop: -150
  },
  areaButton: {
    flexDirection: 'row',
    height: 40,
    marginTop: 80
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#886532',
    height: 40,
    borderRadius: 5,
    margin: 10
  },  
  buttonTxt: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white'
  }
});
