import axios from 'axios';
import Config from '../config/config';

export default function loadUser(){
    const url = Config.baseUrl+"/user/list"

    axios.get(url)
    .then(res=>{
      if (res.data.success) {
        const data = res.data.data
        this.setState({listUser:data})
      }
      else {
        alert("Error web service")
      }
    })
    .catch(error=>{
      alert("Error server "+error)
    })
  } 