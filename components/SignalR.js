import React, {Component} from 'react';
import {View} from 'react-native';
import * as signalR from '@aspnet/signalr';

class SignalR extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      playId: 'fsadfas213dfasdf',
      battleLife: 50,
      battleStrength: 50,
      battleMode:true,
      location:{
        longitude:100,
        latitude:100
      }
    };
  }
  componentDidMount() {
    const hubUrl = "http://10.0.2.2/battle";
    const connectionHub = new signalR.HubConnectionBuilder()
      .withUrl(hubUrl)
      .configureLogging(signalR.LogLevel.Debug)
      .build();

    const {playId, battleLife, battleStrength,battleMode,location} = this.state;

    connectionHub
    .start()
    .then(() => console.log('Connection started!'))
    .catch(err => console.log('Error while establishing connection', err));

    connectionHub.on('BattleHandler', (nick, message) => {
      const text = `${nick}: ${message}`;
      const messages = this.state.messages.concat([text]);
      this.setState({messages});
    });
    setTimeout(()=>{connectionHub.invoke('BattleHandler',{playId,battleLife,battleStrength,battleMode,location}).then((res)=>console.log(`SENDTOCHANNEL INVOKED!`+ res.data)); }, 3000);
  }
  render() {
    return <View />;
  }
}

export default SignalR;
