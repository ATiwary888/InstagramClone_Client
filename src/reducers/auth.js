// import * as actionType from '../constants/actionTypes';
// import {useHistory} from 'react-router-dom';

// const history = useHistory();

export default (xyz= [], action) => {
  switch (action.type) {
    case 'AUTH':
      localStorage.setItem('profile', JSON.stringify({ ...action?.payload }));
      console.log(action.payload);
     
      xyz = [action.payload]
      console.log(xyz);
      // history.push('/')
      console.log('waiting man....');

    
        console.log(xyz);
        return xyz;
    case 'LOGOUT':
      localStorage.clear();
      const temp = {name:"",email:"",message:"",password:""}
        xyz = [temp]
        return xyz;
    //   return { ...state, authData: null, loading: false, errors: null };
    default:
      return xyz;
  }
};

