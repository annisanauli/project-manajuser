import React, { Component } from 'react'
import Header from './assets/header'
import Menu from './assets/menu'
import ReadUser from './models/read.user'
import Footer from './assets/footer'

/**
 * class App.js
 * 
 * @author Rizqi Kartika Safitri <https://github.com/rizqikartika>
 * @author Satrio Krisna Murti
 * @author Annisa Nauli Hasibuan <https://github.com/annisanauli>
 * 
 * @description kelas App merupakan default class pada project-dashboard
 * yang akan menjalankan
 */
export default class App extends Component {
  /**
   * @description method untuk menampilkan halaman dashboard yang berisi kelas komponen header, menu, content, dan footer 
   */
  render() {
    return (
      <div>
        <Header/>
        <Menu/>
        <ReadUser/>
        <Footer/>
      </div>
    )
  }
}
