import React, {Component} from 'react'
import axios from 'axios';
import CreateUser from './create.user';
import EditUser from './edit.user';
import Config from '../config/config';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';

/**
 * @description kelas readuser merupakan kelas untuk menampilkan tabel berisi data user yang tersimpan didatabase
 */
class readUser extends Component {
  /**
   * @description konstruktor kelas readuser untuk menginisialisasi atribut yang dibutuhkan pada kelas readuser
   * @param {*} props properti untuk kelas form
   * Terdapat state berisi listUser.
   * listUser untuk menampung data yang terdapat pada database
   */
  constructor(props){
    super(props);
    this.state = {
      listUser:[]
      // activeId:'305'
    }
    // console.log(this.state.activeId);
    // this.onEdit=this.onEdit.bind(this);
    this.child = React.createRef();
    
    
  }

  /**
   *@description fungsi untuk memanggil dan memanipulasi data agar data dapat ditampil 
   * sesuai dengan paging short, limit entry
   */
  componentDidMount(){
    this.loadUser()
    const script = document.createElement("script");
      script.src = 'js/content.js';
      script.async = true;

      document.body.appendChild(script);
  }

  /**
   * loadUser
   * 
   * @description fungsi untuk memanggil dan memanipulasi data dari database ke server
   */
  loadUser(){
    const url = Config.baseUrl+"/users"
    return axios.get(url)
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

    render() {
      return (
        <div>
          <div className="content-wrapper">
            {/* Main content */}
            <section className="content">
              <div className="row">
                <div className="col-xs-12">
                  {/* /.box */}
                  <div className="box">
                    <div className="box-header">
                      <section className="content-header">
                        <h3 className="box-title">Daftar User</h3>
                        <ol className="breadcrumb">
                          <button type="button" className="btn btn-warning" data-toggle="modal" data-target="#modal-default">
                          Create User
                          </button>
                        </ol>
                      </section>        
                    </div>
                    <br></br>
                    <CreateUser/>
                    {/* <EditUser activeId={this.state.activeId}/> */}
                    <EditUser ref={this.child}/>
                    
                    <div className="box-body">
                      <table id="example1" className="table table-bordered table-striped">
                        <thead>
                          <tr>
                            <th scope="col">Nama</th>
                            <th scope="col">Email</th>
                            <th scope="col">No. Handphone</th>
                            <th scope="col">Role</th>
                            <th scope="col">Options</th>
                          </tr>
                        </thead>
                        <tbody>
                          {this.loadFillData()}
                        </tbody>
                      </table>
                    </div>
                    {/* /.box-body */}
                   </div>
                {/* /.box */}
                </div>
              {/* /.col */}
              </div>
            </section>
          </div>
        </div>
      );
    }

    /**
     * loadFillData
     * 
     * @description fungsi untuk memanggil data sesuai dengan kolom tabel
     */
    loadFillData(){
      return this.state.listUser.map((data)=>{
        return(
          <tr key={data.id}>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>{data.phone}</td>
            <td>{data.role.role}</td>
            <td>
              <div className="input-group-btn">
              <button type="button" className="btn btn-default btn-block" data-toggle="dropdown">...</button>
                <ul className="dropdown-menu">
                  <li>
                  <a data-toggle="modal" data-target="#modal-default2" onClick={()=>this.onEdit(data.id)}>
                      <i className="fa fa-pencil"/> <span>Edit</span>
                    </a>                
                  </li>
                  
                  <li className="divider"></li>
                  <li>
                    <a onClick={()=>this.onDelete(data.id)}>
                      {/* <a data-toggle="modal" data-target="#modal-default3"> */}
                      <i className="fa fa-trash" /> <span>Delete</span>
                    </a>
                  </li>
                </ul>
              </div>
            </td>
          </tr>
        )
      })
    }

    /**
     * onEdit
     * 
     * @description fungsi untuk mengambil id sesuai dengan kolom yang dipilih 
     * dan mengirimnya ke fungsi getData yang pada file edit.user
     * @param {Integer} id variabel untuk menampung id user
     */
    onEdit(id){ 
      // this.setState({
      //   activeId:id
      // })
      // console.log(this.state.activeId);
      // console.log(id);
      this.child.current.getData(id);
    }  

    /**
     * onDelete
     * 
     * @description fungsi untuk memanggil id sesuai dengan kolom yang dipilih, 
     * dan akan diberi pilihan "apakah yakin untuk dihapus", jika iya maka akan memanggil fungsi sendDelete
     * jika tidak, maka akan kembali ke dashboard, dan mendapat notif bahwa tidak jadi menghapus kolom
     * @param {Integer} id variabel untuk menampung id user 
     */
    onDelete(id){
      Swal.fire({
        title: 'Delete User',
        text: 'Are you sure want to delete this data?',
        // type: 'warning',
        showCloseButton: true,
        showCancelButton: true,
        confirmButtonColor: '#d33',
        confirmButtonText: 'Delete',
        cancelButtonText: 'Cancel'
      }).then((response) => {
        if (response.value) {
          this.sendDelete(id)
        } else if (response.dismiss === Swal.DismissReason.cancel) {
          // window.location.href="";
          Swal.fire(
            'Cancelled',
            'Your data is safe :)',
            'error')
        }
      })
    }

  /**
   * sendDelete
   * 
   * @description fungsi untuk menghapus data sesuai dengan id yang didapatkan di fungsi onDelete
   * @param {Integer} userId 
   */  
  sendDelete(userId)
  {
    // url backend
    const url = Config.baseUrl+"/users/"+userId    // parameter data post
    // network
    return axios.delete(url,{id:userId})
    .then(response =>{
      console.log(response)
      if (response.data.success) {
        Swal.fire(
          'Successfull',
          'Your data has been deleted.',
          'success'
        )
        this.loadUser()
      }
    })
    .catch ( error => {
      alert("Error 325 ")
    })
  }
 


}
export default readUser;