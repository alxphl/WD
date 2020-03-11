import * as signalR from '@aspnet/signalr';

const HubPath = 'http://10.0.2.2/';

export const BattleHandler = async (
  playId,
  battleLife,
  battleStrength,
  battleMode,
  location,
) => {
  const connectionHub = new signalR.HubConnectionBuilder()
    .withUrl(HubPath + 'battle')
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

export const UserHandler = async (
  playId,
  battleLife,
  Life,
  battleStrength,
  Strength,
) => {
  const connectionHub = new signalR.HubConnectionBuilder()
    .withUrl(HubPath + 'user')
    .configureLogging(signalR.LogLevel.Debug)
    .build();
  connectionHub
    .start()
    .then(() => console.log('Connection started!'))
    .catch(err => console.log('Error while establishing connection', err));

  connectionHub.on('UserHandler', (nick, message) => {
    const text = `${nick}: ${message}`;
    const messages = this.state.messages.concat([text]);
    this.setState({messages});
  });
  setTimeout(async () => {
    await connectionHub
      .invoke('SignInUp', playId)
      .then(res => console.log('SENDTOCHANNEL INVOKED!' + res.data));
  }, 3000);

  var User;
  connectionHub.on('UserFill', user => {
    console.log(
      '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!USER FROM USERFILL :    ' +
        user.wins +
        '     !!!!!!!!!!!!!!!!!!!',
    );
    User = user;
  });
  return User;
};
//const UserFill = async (user) => {console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!USER FROM USERFILL :    "+user+"     !!!!!!!!!!!!!!!!!!!")}
