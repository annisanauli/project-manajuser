import React, { Component } from 'react';
import axios from 'axios';
import Config from '../config/config';

class createUser extends Component{
  constructor(props){
    super(props);
    this.state = {
      campName: "",
      campEmail:"",
      campPhone:"",
      campPassword:"",
      selectRole:0
    }
  }

render() {
    return (
        <div>
            <div className="box-body">
                <div className="form-group">
                    <label htmlFor="exampleInputName1">Nama</label>
                    <input type="text" class="form-control"  placeholder="Name" value={this.state.campName} onChange={(value)=> this.setState({campName:value.target.value})}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputHandphone1">No. Handphone</label>
                    <input type="number" class="form-control"  placeholder="Phone"  value={this.state.campPhone} onChange={(value)=> this.setState({campPhone:value.target.value})}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email</label>
                    <input type="email" class="form-control"  placeholder="Email" value={this.state.campEmail} onChange={(value)=> this.setState({campEmail:value.target.value})}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="inputPassword" placeholder="password" value={this.state.campPassword} onChange={(value)=> this.setState({campPassword:value.target.value})}/>
                </div>
                <div class="form-group">
                    <label for="inputState">User Role</label>
                    <select id="inputState" class="form-control" onChange={(value)=> this.setState({selectRole:value.target.value})}>
                        <option selected>Choose...</option>
                        <option value="1">Role 1</option>
                        <option value="2">Role 2</option>
                        <option value="3">Role 3</option>
                    </select>
                </div>

                <div className="modal-footer">
                    <button type="button" className="btn btn-default" data-dismiss="modal">Batal</button>
                    <button type="submit" class="btn btn-primary" onClick={()=>this.sendSave()}>Simpan</button>
                </div>
            </div>           
        </div>
    )
}

// Event to send and save data to the database on the Node.js server
sendSave(){
  if (this.state.selectRole==0) {
    alert("Pilih Role")
  }
  else if (this.state.campPhone=="") {
     alert("Masukkan no handphone")
  }
  else if (this.state.campName=="") {
     alert("Masukkan nama")
  }
  else if (this.state.campEmail=="") {
     alert("Masukkan email")
  }
  else if (this.state.campPassword=="") {
     alert("Masukkan password")
  }
  else {
  
    console.log(this.state)

  
  //post data parameters
  const datapost = {
      name : this.state.campName,
      email : this.state.campEmail,
      phone : this.state.campPhone,
      password : this.state.campPassword,
      role  : this.state.selectRole
    }

    const url = Config.baseUrl+"/user/create"
    axios.post(url,datapost)
    .then(response=>{
      if (response.data.success===true) {
        alert(response.data.message)
      }
      else {
        alert(response.data.message)
      }
    }).catch(error=>{
      alert("Error 34 "+error)
    })

  }

  window.location.href="http:localhost:3001";
}
}
export default createUser;