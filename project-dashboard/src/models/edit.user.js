import React, { Component } from 'react';
import axios from 'axios';
import Config from '../config/config';

class form extends Component{
/**
   * konstruktor kelas form edit user
   * 
   * @description konstruktor kelas form edit user untuk menginisialisasi atribut yang dibutuhkan pada kelas form
   * 
   * Pada state terdapat fields dan error. 
   * fields berfungsi untuk menampung data inputan form.
   * Sedangkan errors berfungsi untuk menampung data inputan form yang error.
   * 
   * userId  {Integer} variabel menampung id user
   * dataUser sebuah objek untuk menampung data user yang akan diedit
   * campName  {string} variabel menampung nama
   * campEmail {string}  variabel menampung email
   * campPassword {string} variabel menampung password
   * campPhone {Integer} variabel menampung no handphone
   */
constructor(props){
    super(props);
    this.state = {
      userId:'',
    dataUser:{},
      fields: {campName:'', campEmail:'', campPhone:'', campPassword:''},
      errors: {}
    }
  }

  /**
   * getData
   * 
   * @description fungsi untuk mengambil data sesuai id pada fungsi onEdit yang ada di file read.user
   * @param {Integer} id variabel menampung id 
   */
  getData(id){
    this.setState({
      userId:id
    });
    const url = Config.baseUrl+"/users/"+id;
    axios.get(url)
    .then((result) => {
      const dataUser= result.data.data;
      this.setState({
        fields :{
          campName: dataUser.name,
          campEmail:dataUser.email,
          campPhone:dataUser.phone,
          campPassword:dataUser.password
          },
          // stringRole:dataUser.role.role,
          selectRole:dataUser.roleId
      })
    })
  }

  /**
   * handleValidation
   * 
   * @description fungsi untuk melakukan validasi setiap data inputan pada form 
   * 
   * @return formIsValid
   */
  handleValidation(){
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //mengecek inputan nama tidak boleh kosong
    if(!fields["campName"]){
      formIsValid = false;
      errors["campName"] = "Cannot be empty";
    }

    //mengecek inputan nama berisi alfabet dan spasi
    if(typeof fields["campName"] !== "undefined"){
      if(!fields["campName"].match(/^[a-zA-Z\s]+$/)){
        formIsValid = false;
        errors["campName"] = "Only letters";
      }      	
    }

    //mengecek inputan email tidak boleh kosong
    if(!fields["campEmail"]){
      formIsValid = false;
      errors["campEmail"] = "Cannot be empty";
    }

    //mengecek inputan email harus valid email address
    if(typeof fields["campEmail"] !== "undefined"){
      let lastAtPos = fields["campEmail"].lastIndexOf('@');
      let lastDotPos = fields["campEmail"].lastIndexOf('.');

      if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["campEmail"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["campEmail"].length - lastDotPos) > 2)) {
        formIsValid = false;
        errors["campEmail"] = "Email is not valid";
      }
    }

    //mengecek inputan password tidak boleh kosong
    if(!fields["campPassword"]){
      formIsValid = false;
      errors["campPassword"] = "Cannot be empty";
    }

    //mengecek inputan password harus berisi minimal 1 karakter, huruf besar, huruf kecil, angka, simbol
    if(typeof fields["campPassword"] !== "undefined"){
      if(!fields["campPassword"].match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/)){
        formIsValid = false;
        errors["campPassword"] = "Password must contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character";
      }      	
    }

    //mengecek inputan nomor handphone tidak boleh kosong
    if(!fields["campPhone"]){
      formIsValid = false;
      errors["campPhone"] = "Cannot be empty";
    }

    // mengecek inputan nomor handphone harus valid nomor handphone indonesia
    if(typeof fields["campPhone"] !== "undefined"){
      if(!fields["campPhone"].match(/^(0814|0815|0816|0855|0858|0856|0857|0827|0828|0811|0812|0821|0822|0851|0852|0853|0823|0817|0818|0819|0877|0878|0859|0831|0832|0833|0838|0881|0882|0883|0884|0885|0886|0887|0888|0889|0895|0896|0897|0898|0899)[0-9]{6,8}$/gm)){
        formIsValid = false;
        errors["campPhone"] = "Phone number is not valid";
      }      	
    }

    //apabila terdapat error maka akan kembali form create user
    this.setState({errors: errors});
    return formIsValid;
  }

  /**
   *handleSubmit
   * 
   * @description fungsi untuk menyimpan data yang telah valid pada fungsi handlevalidation ke database
   * @param {*} e menampung data yang telah valid
   * @param {Integer} userId variabel menampung id
   */
  handleSubmit(e,userId){
    e.preventDefault();
    if(this.handleValidation()){
      const datapost = {
        name : this.state.fields["campName"],
        email : this.state.fields["campEmail"],
        phone : this.state.fields["campPhone"],
        password : this.state.fields["campPassword"],
        role  : this.state.selectRole
      }
      userId = this.state.userId;
      const url = Config.baseUrl+"/users/"+userId
      axios.post(url,datapost)
      // alert("Form submitted");
      window.location.href="";
    }else{
      // alert("Form has errors.")
      console.log(this.state)
    } 
  }

  handleChange(field, e){    		
    let fields = this.state.fields;
    fields[field] = e.target.value;        
    this.setState({fields});
  }

  render(){
    return (
      <div className="modal fade" id="modal-default2">
        <div className="modal-dialog">
          <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span></button>
                <h4 className="modal-title">Edit User</h4>
          </div>
          <div>
        <div className="box-body">      	
        <form name="contactform" className="contactform" onSubmit= {this.handleSubmit.bind(this)}>
          <fieldset>
            <div className="form-group">
              <label htmlFor="exampleInputName1">Nama</label>
              <input refs="name" type="text" className="form-control" size="30" placeholder="Name" 
                     onChange={this.handleChange.bind(this, "campName")} value={this.state.fields["campName"]} required/>
              <span className="help-block">{this.state.errors["campName"]}</span>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputHandphone1">No. Handphone</label>
              <input refs="phone" type="telp" className="form-control" size="12" placeholder="Phone" 
                     onChange={this.handleChange.bind(this, "campPhone")} value={this.state.fields["campPhone"]}/>
              <span className="help-block">{this.state.errors["campPhone"]}</span>
            </div> 
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email</label>
              <input refs="email" type="email" className="form-control" size="30" placeholder="Email" 
                     onChange={this.handleChange.bind(this, "campEmail")} value={this.state.fields["campEmail"]}/>
              <span className="help-block">{this.state.errors["campEmail"]}</span>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input refs="password" type="password" className="form-control" size="15" placeholder="Password" 
                     onChange={this.handleChange.bind(this, "campPassword")} value={this.state.fields["campPassword"]}/>
              <span className="help-block">{this.state.errors["campPassword"]}</span>
            </div>
            <div className="form-group">
              <label htmlFor="inputState">User Role</label>
              <select id="inputState2" className="form-control select2" onChange={(value)=> this.setState({selectRole:value.target.value})}>
                <option value={this.state.dataUser.roleId}>{this.state.stringRole}</option>
                <option value="1">Role 1</option>
                <option value="2">Role 2</option>
                <option value="3">Role 3</option>
              </select>
            </div>
          </fieldset>
          <div className="col-md-12">
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Batal</button>
              <button type="submit" id="submit2" className="btn btn-primary" >Update</button>
            </div>
          </div>

        </form>
        </div>  
        </div>
        {/* /.modal-content */}
        </div>
        {/* /.modal-dialog */}
        </div>
        {/* /.box-header */}
      </div>     
    )  
  }
}

export default form;