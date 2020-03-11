import axios from 'axios';

const ApiPath = 'http://10.0.2.2/api/';

export const Get = async () => {
  //await fetch(ApiPath).then(res=>{console.log("res:"+res)});

  await axios
    .get(ApiPath + 'User')
    .then(res => {
      console.log('res:' + res.data);
    })
    .catch(error => {
      console.log('Error:' + error);
    });
};

export const Post = async () => {
  axios
    .post(ApiPath + '/signup', {
      username: 'AlxPhl',
      PlayId: '59ab607c-33d8-4d4d-ad2d-48a660c75575',
    })
    .then(res => {
      console.log(res.data);
    })
    .catch(error => {
      console.log(error.response);
    });
};

export const SignUp = async playId => {
  const response = await axios.post(ApiPath + 'User/' + playId);
  console.log(response.data);
  console.log('PATH    :       ' + ApiPath + 'User/' + playId);
  return response.data;
};

export const BattleModeHandler = async (
  playId,
  battleLife,
  battleStrength,
  battleMode,
  location,
) => {
  const response = await axios.post(ApiPath + 'Battle/BattleMode', {
    PlayId: playId,
    BattleLife: battleLife,
    BattleStrength: battleStrength,
    BattleMode: battleMode,
    Location: location,
  });
  console.log(response.data);
  console.log('PATH    :       ' + ApiPath + 'Battle/BattleMode');
  return response.data;
};
