import 'react-notifications/lib/notifications.css';
import {NotificationManager} from 'react-notifications';
import {SETLOADER} from '../constants/constants'
import axios from 'axios'


export const registerEmail=(data,history)=>async(dispatch,getState)=>{

  await axios.post('http://localhost:5000/auths/earlyAccess',data)

  .then(res=>{
      setTimeout(()=>{
        history.push('/verification')
        },4000)
       
  })

}
export const setLoader=()=>async(dispatch,getState)=>{
dispatch({
  type:SETLOADER,
  payload:""
})
}

export const codeVerification=(data,history)=>async(dispatch,getState)=>{
  
  await axios.post('http://localhost:5000/auths/verifyCode',data)

  .then(res=>{
    NotificationManager.success(res.data.message, '', 2000)
    setTimeout(()=>{
      history.push('/dashboard')
    },2500)

  })
  .catch(err=>{

    NotificationManager.error(err.response.data.message,'',2500)
   
  }
    )
}