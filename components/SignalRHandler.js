import * as signalR from '@aspnet/signalr';

const HubPath = 'http://10.0.2.2/battle';

export const BattleHandler = async (
  playId,
  battleLife,
  battleStrength,
  battleMode,
  location,
) => {
  const connectionHub = new signalR.HubConnectionBuilder()
    .withUrl(HubPath)
    .configureLogging(signalR.LogLevel.Debug)
    .build();
  connectionHub
    .start()
    .then(() => console.log('Connection started!'))
    .catch(err => console.log('Error while establishing connection', err));

  connectionHub.on('BattleHandler', (nick, message) => {
    const text = `${nick}: ${message}`;
    const messages = this.state.messages.concat([text]);
    this.setState({messages});
  });
  setTimeout(() => {
    connectionHub
      .invoke('BattleHandler', {
        playId,
        battleLife,
        battleStrength,
        battleMode,
        location,
      })
      .then(res => console.log('SENDTOCHANNEL INVOKED!' + res.data));
  }, 3000);
};
