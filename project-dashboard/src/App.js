import React, { Component } from 'react'
import Header from './assets/header'
import Menu from './assets/menu'
import ReadUser from './models/read.user'
import Footer from './assets/footer'

export default class App extends Component {
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
