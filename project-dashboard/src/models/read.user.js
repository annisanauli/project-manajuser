import React, {Component} from 'react'
import axios from 'axios';
import CreateUser from './create.user';
import Config from '../config/config';

class readUser extends Component {
  /**
   * @description konstruktor kelas konten
   * @param {*} props untuk menampung daftar user yang terdapat pada database
   */
  constructor(props){
    super(props);
    this.state = {
      listUser:[]
    }
  }

  /**
   * @description method untuk memanggil dan memanipulasi data agar data dapat ditampil sesuai dengan paging short, limit entry
   */
  componentDidMount(){
     this.loadUser()
     const script = document.createElement("script");

        script.src = 'js/content.js';
        script.async = true;
        
        document.body.appendChild(script);
  }

  /**
   * @description method untuk memanggil dan memanipulasi data dari database ke server
   */
  loadUser(){
    const url = Config.baseUrl+"/users"
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

    /**
     * @description method untuk manampilkan tabel daftar user pada halaman dashboard
     */
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
                      <section class="content-header">
                        <h3 className="box-title">Daftar User</h3>
                        <ol class="breadcrumb">
                          <button type="button" className="btn btn-warning" data-toggle="modal" data-target="#modal-default">
                          Create User
                          </button>
                        </ol>
                      </section>        
                    </div>
                      <br></br>
                    <div className="modal fade" id="modal-default">
                      <div className="modal-dialog">
                      <div className="modal-content">
                      <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">×</span></button>
                          <h4 className="modal-title">Buat User Baru</h4>
                      </div>

                      <CreateUser/>

                      </div>
                      {/* /.modal-content */}
                      </div>
                      {/* /.modal-dialog */}
                      </div>
                      {/* /.box-header */}
                      <div className="box-body">
                        <table id="example1" className="table table-bordered table-striped">
                          <thead>
                            <tr>
                              <th scope="col">Nama</th>
                              <th scope="col">Email</th>
                              <th scope="col">No. Handphone</th>
                              <th scope="col">Role</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Amanda manopo</td>
                              <td>amandamanda@gmail.com</td>
                              <td>08572349423</td>
                              <td>Role 3</td>
                            </tr>
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
     * @description method untuk memanggil sesuai dengan permintaan kedalam tabel
     */
    loadFillData(){
      return this.state.listUser.map((data)=>{
        return(
          <tr>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>{data.phone}</td>
            <td>{data.role.role}</td>
          </tr>
        )
      })
    }

}
export default readUser;
