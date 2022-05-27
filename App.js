import React, { Component } from 'react';
import { View, Text, Button, ScrollView, TouchableOpacity } from 'react-native';

import styles from './src/styles/index.js'

class Cronometro extends Component {
  constructor(props) {
    super(props);

    this.state = {
      horas: 0,
      minutos: 0,
      segundos: 0,
      cronoAtivo: false,
      voltas: []
    }

    this.pulsoDeClock = this.pulsoDeClock.bind(this);
    this.iniciaCrono = this.iniciaCrono.bind(this);
    this.pararCrono = this.pararCrono.bind(this);
    this.marcarVolta = this.marcarVolta.bind(this);
    this.zerarCrono = this.zerarCrono.bind(this);
  }

  iniciaCrono() {
    if (!this.state.cronoAtivo) {
      this.setState({ clock: setInterval(this.pulsoDeClock, 1000) });
      this.setState({ cronoAtivo: true })
    }
  }

  pulsoDeClock() {
    var h = this.state.horas;
    var m = this.state.minutos;
    var s = this.state.segundos;

    if (s < 59) {
      s++;
    } else {
      s = 0;
      if (m < 59) {
        m++;
      } else {
        m = 0;
        h++
      }
    }

    this.setState({ segundos: s, minutos: m, horas: h })
  }

  pararCrono() {
    if (this.state.cronoAtivo) {
      clearInterval(this.state.clock);
      this.setState({ cronoAtivo: false });
    }
  }

  marcarVolta() {
    var txtDoCronometro = this.formatar(this.state.horas) + ":" + this.formatar(this.state.minutos) + ":" + this.formatar(this.state.segundos) + "\n";
    this.state.voltas.push(txtDoCronometro);
    this.forceUpdate();
  }

  formatar(t) {
    return (t < 10) ? "0" + t.toString() : t.toString();
  }

  zerarCrono() {
    this.pararCrono();
    this.setState({ segundos: 0, minutos: 0, horas: 0 });

    if (this.state.voltas.length > 0) {
      this.state.voltas.push(' ------- \n');
    }
  }

  render() 
  {
    var txtH = this.formatar(this.state.horas);
    var txtM = this.formatar(this.state.minutos);
    var txtS = this.formatar(this.state.segundos);
    

    return(
      <ScrollView>
        <View>
          <Text>Cronômetro</Text>
          <Text>{txtH}:{txtM}:{txtS}</Text>
        </View>
        <View>
          <Button
            onPress={(this.state.cronoAtivo ? this.pararCrono : this.iniciaCrono)}
            title={(this.state.cronoAtivo ? 'Pausar' : 'Iniciar')} />
          <Button onPress={this.marcarVolta} title='Marcar Voltas' />
          <Button onPress={this.zerarCrono} title='Zerar' />
        </View>
        <View>
          <Text>
            {this.state.voltas}
          </Text>
        </View>
      </ScrollView>
    )
  }
}

export default Cronometro;


