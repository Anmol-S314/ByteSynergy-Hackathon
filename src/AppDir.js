import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Component } from 'react';
import Web3 from 'web3';
import TumblrCloneDapp from './abis/TumblrCloneDapp.json'
import LandingPage from './components/pages/LandingPage'
import LoginPage from './components/pages/LoginPage'
import MedicalForm from './components/pages/MedicalForm'
import App from './components/App'
import Footer from './components/pages/Footer'

import './App.css'

const ipfsClient = require('ipfs-http-client')
const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' })

class AppDir extends Component
{
	async componentWillMount() {
    await this.loadWeb3()
  }

	async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
    await this.loadBlockchainData()
  }

  async loadBlockchainData() {
    const web3 = window.web3
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })

    const networkId = await web3.eth.net.getId()
    const networkData = TumblrCloneDapp.networks[networkId]
    if(networkData) {
      const app = new web3.eth.Contract(TumblrCloneDapp.abi, networkData.address)
      this.setState({ app })
      const mformsCount = await app.methods.mformCount().call()
      this.setState({ mformsCount })
      for (var i = 1; i <= mformsCount; i++) {
        const mform = await app.methods.mforms(i).call()
        this.setState({
          mforms: [...this.state.mforms, mform]
        })
      }

      const fullname = await app.methods.fullname().call()
      this.setState({fullname})

      const mail = await app.methods.mail().call()
      this.setState({mail})

      const phno = await app.methods.phno().call()
      this.setState({phno})

      const gender = await app.methods.gender().call()
      this.setState({gender})

      const date = await app.methods.date().call()
      this.setState({date})

      const height = await app.methods.height().call()
      this.setState({height})

      const weight = await app.methods.weight().call()
      this.setState({weight})

      const blood = await app.methods.blood().call()
      this.setState({blood})

      const vacc = await app.methods.vacc().call()
      this.setState({vacc})

      const all = await app.methods.all().call()
      this.setState({all})

      const pres = await app.methods.pres().call()
      this.setState({pres})

      const sym = await app.methods.sym().call()
      this.setState({sym})

      const trav = await app.methods.trav().call()
      this.setState({trav})

      const his = await app.methods.his().call()
      this.setState({his})

      const ename = await app.methods.ename().call()
      this.setState({ename})

      const eno = await app.methods.eno().call()
      this.setState({eno})

      const ex = await app.methods.ex().call()
      this.setState({ex})

    }
    else{
      window.alert('TumblrCloneDapp contract not deployed to detected network.')
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      varcount: 0,
      vars: [],
      fullname: 'unanswered',
      mail : 'unanswered',
      phno : 'unanswered',
      gender : 'unanswered',
      date : 'unanswered',
      height : 'unanswered',
      weight : 'unanswered',
      blood : 'unanswered',
      vacc : 'unanswered',
      all : 'unanswered',
      pres : 'unanswered',
      sym : 'unanswered',
      trav : 'unanswered',
      his : 'unanswered',
      ename : 'unanswered',
      eno : 'unanswered',
      ex : 'unanswered',
      mforms: []
    }
    this.uploadName = this.uploadName.bind(this)
    this.uploadMail = this.uploadMail.bind(this)
    this.uploadPhno = this.uploadPhno.bind(this)
    this.uploadGender = this.uploadGender.bind(this)
    this.uploadDob = this.uploadDob.bind(this)
    this.uploadHeight = this.uploadHeight.bind(this)
    this.uploadWeight = this.uploadWeight.bind(this)
    this.uploadBg = this.uploadBg.bind(this)
    this.uploadVacc = this.uploadVacc.bind(this)
    this.uploadAller = this.uploadAller.bind(this)
    this.uploadPres = this.uploadPres.bind(this)
    this.uploadSym = this.uploadSym.bind(this)
    this.uploadTrav = this.uploadTrav.bind(this)
    this.uploadHist = this.uploadHist.bind(this)
    this.uploadEmNam = this.uploadEmNam.bind(this)
    this.uploadEmNo = this.uploadEmNo.bind(this)
    this.uploadExt = this.uploadExt.bind(this)
  }

  uploadName = name => {
    this.setState({ loading: true })
      this.state.app.methods.uploadName(name).send({ from: this.state.account }).on('transactionHash', (hash) => {
        this.setState({ loading: false })
      })
  }
  uploadMail = mail => {
    this.setState({ loading: true })
      this.state.app.methods.uploadMail(mail).send({ from: this.state.account }).on('transactionHash', (hash) => {
        this.setState({ loading: false })
      })
  }
  uploadPhno = ph_no => {
    this.setState({ loading: true })
      this.state.app.methods.uploadPhno(ph_no).send({ from: this.state.account }).on('transactionHash', (hash) => {
        this.setState({ loading: false })
      })
  }
  uploadGender = gen => {
    this.setState({ loading: true })
      this.state.app.methods.uploadGender(gen).send({ from: this.state.account }).on('transactionHash', (hash) => {
        this.setState({ loading: false })
      })
  }
  uploadDob = date => {
    this.setState({ loading: true })
      this.state.app.methods.uploadDob(date).send({ from: this.state.account }).on('transactionHash', (hash) => {
        this.setState({ loading: false })
      })
  }
  uploadHeight = ht => {
    this.setState({ loading: true })
      this.state.app.methods.uploadHeight(ht).send({ from: this.state.account }).on('transactionHash', (hash) => {
        this.setState({ loading: false })
      })
  }
  uploadWeight = wt => {
    this.setState({ loading: true })
      this.state.app.methods.uploadWeight(wt).send({ from: this.state.account }).on('transactionHash', (hash) => {
        this.setState({ loading: false })
      })
  }
  uploadBg = blood => {
    this.setState({ loading: true })
      this.state.app.methods.uploadBg(blood).send({ from: this.state.account }).on('transactionHash', (hash) => {
        this.setState({ loading: false })
      })
  }
  uploadVacc = vacc  => {
    this.setState({ loading: true })
      this.state.app.methods.uploadVacc(vacc).send({ from: this.state.account }).on('transactionHash', (hash) => {
        this.setState({ loading: false })
      })
  }
  uploadAller= all => {
    this.setState({ loading: true })
      this.state.app.methods.uploadAller(all).send({ from: this.state.account }).on('transactionHash', (hash) => {
        this.setState({ loading: false })
      })
  }
  uploadPres = pres => {
    this.setState({ loading: true })
      this.state.app.methods.uploadPres(pres).send({ from: this.state.account }).on('transactionHash', (hash) => {
        this.setState({ loading: false })
      })
  }
  uploadSym=sym => {
    this.setState({ loading: true })
      this.state.app.methods.uploadSym(sym).send({ from: this.state.account }).on('transactionHash', (hash) => {
        this.setState({ loading: false })
      })
  }
  uploadTrav=trav => {
    this.setState({ loading: true })
      this.state.app.methods.uploadTrav(trav).send({ from: this.state.account }).on('transactionHash', (hash) => {
        this.setState({ loading: false })
      })
  }
  uploadHist = his => {
    this.setState({ loading: true })
      this.state.app.methods.uploadHist(his).send({ from: this.state.account }).on('transactionHash', (hash) => {
        this.setState({ loading: false })
      })
  }
  uploadEmNam = ename => {
    this.setState({ loading: true })
      this.state.app.methods.uploadEmNam(ename).send({ from: this.state.account }).on('transactionHash', (hash) => {
        this.setState({ loading: false })
      })
  }
  uploadEmNo = eno => {
    this.setState({ loading: true })
      this.state.app.methods.uploadEmNo(eno).send({ from: this.state.account }).on('transactionHash', (hash) => {
        this.setState({ loading: false })
      })
  }
  uploadExt = ex => {
    this.setState({ loading: true })
      this.state.app.methods.uploadExt(ex).send({ from: this.state.account }).on('transactionHash', (hash) => {
        this.setState({ loading: false })
      })
  }

	render() {
    return (
            <div>
                <Routes>
                    <Route path="/" element = {<div><LandingPage/><Footer/></div>}/>
                    {/* <Route path="/login" element = {<LoginPage/>}/> */}
					          <Route path="/UploadImages" element = {<App/>}/>
                    <Route path="/register" element = {<MedicalForm 
                    uploadName={this.uploadName}
                    uploadMail={this.uploadMail}
                    uploadPhno={this.uploadPhno}
                    uploadGender={this.uploadGender}
                    uploadDob={this.uploadDob}
                    uploadHeight={this.uploadHeight}
                    uploadWeight={this.uploadWeight}
                    uploadBg={this.uploadBg}
                    uploadVacc={this.uploadVacc}
                    uploadAller={this.uploadAller}
                    uploadPres={this.uploadPres}
                    uploadSym={this.uploadSym}
                    uploadTrav={this.uploadTrav}
                    uploadHist={this.uploadHist}
                    uploadEmNam={this.uploadEmNam}
                    uploadEmNo={this.uploadEmNo}
                    uploadExt={this.uploadExt}

                    fullname={this.state.fullname}
                    mail={this.state.mail}
                    phno={this.state.phno}
                    gender={this.state.gender}
                    date={this.state.date}
                    height={this.state.height}
                    weight={this.state.weight}
                    blood={this.state.blood}
                    vacc={this.state.vacc}
                    all={this.state.all}
                    pres={this.state.pres}
                    sym={this.state.sym}
                    trav={this.state.trav}
                    his={this.state.his}
                    ename={this.state.ename}
                    eno={this.state.eno}
                    ex ={this.state.ex}
                    mforms={this.state.mforms} /> }/>
                </Routes>
            </div>
    );
	}
}

export default AppDir;
