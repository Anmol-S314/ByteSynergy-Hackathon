import UBPP from '../abis/UBPP.json'
import React, { Component } from 'react';
import Navbar from './Navbar'
import Main from './Main'
import Web3 from 'web3';
import 'antd/dist/antd.css';

// const fs = require('fs')
// const pdfparse = require('pdf-parse')
// const pdffile = fs.readFileSync('https://ipfs.infura.io/ipfs/${image.hash}')

//Declare IPFS
const ipfsClient = require('ipfs-http-client')
const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' }) // leaving out the arguments will default to these values

class App extends Component {

  async componentWillMount() {
    await this.loadBlockchainData()
  }

  async loadBlockchainData() {
    const web3 = window.web3
    // Load account
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    // Network ID
    const networkId = await web3.eth.net.getId()
    const networkData = UBPP.networks[networkId]
    if(networkData) {
      const app = new web3.eth.Contract(UBPP.abi, networkData.address)
      this.setState({ app })
      const imagesCount = await app.methods.imageCount().call()
      const docsCount = await app.methods.docCount().call()
      this.setState({ imagesCount })
      this.setState({ docsCount })
      // Load images
      for (var i = 1; i <= imagesCount; i++) {
        const image = await app.methods.images(i).call()
        this.setState({
          images: [...this.state.images, image]
        })
      }
      for (var i = 1; i <= docsCount; i++) {
        const doc = await app.methods.docs(i).call()
        this.setState({
          docs: [...this.state.docs, doc]
        })
      }
      // Sort images. Show highest tipped images first
      this.setState({
        images: this.state.images.sort((a,b) => b.tipAmount - a.tipAmount )
      })
      this.setState({ loading: false})
    } else {
      window.alert('UBPP contract not deployed to detected network.')
    }
  }

  captureFile = event => {

    event.preventDefault()
    const file = event.target.files[0]
    const reader = new window.FileReader()
    reader.readAsArrayBuffer(file)

    reader.onloadend = () => {
      this.setState({ buffer: Buffer(reader.result) })
      console.log('buffer', this.state.buffer)
    }
  }

  uploadImage = description => {
    console.log("Submitting file to ipfs...")

    //adding file to the IPFS
    ipfs.add(this.state.buffer, (error, result) => {
      console.log('Ipfs result', result)
      if(error) {
        console.error(error)
        return
      }

      this.setState({ loading: true })
      this.state.app.methods.uploadImage(result[0].hash, description).send({ from: this.state.account }).on('transactionHash', (hash) => {
        this.setState({ loading: false })
      })
    })
  }

  uploadDoc = description => {
    console.log("Submitting file to ipfs...")

    //adding file to the IPFS
    ipfs.add(this.state.buffer, (error, result) => {
      console.log('Ipfs result', result)
      if(error) {
        console.error(error)
        return
      }

      this.setState({ loading: true })
      this.state.app.methods.uploadDoc(result[0].hash, description).send({ from: this.state.account }).on('transactionHash', (hash) => {
        this.setState({ loading: false })
      })
    })
  }

  tipImageOwner(id, tipAmount) {
    this.setState({ loading: true })
    this.state.app.methods.tipImageOwner(id).send({ from: this.state.account, value: tipAmount }).on('transactionHash', (hash) => {
      this.setState({ loading: false })
    })
  }

  constructor(props) {
    super(props)
    this.state = {
      account: '',
      app: null,
      images: [],
      docs: [],
      loading: true
    }

    this.uploadImage = this.uploadImage.bind(this)
    this.uploadDoc = this.uploadDoc.bind(this)
    this.tipImageOwner = this.tipImageOwner.bind(this)
    this.captureFile = this.captureFile.bind(this)
  }

  render() {
    return (
      <div>
        <Navbar account={this.state.account} />
        { this.state.loading
          ? <div id="loader" className="text-center mt-5"><p>Connecting to cryptowallet...</p></div>
          : <Main
              images={this.state.images}
              docs={this.state.docs}
              captureFile={this.captureFile}
              uploadImage={this.uploadImage}
              uploadDoc={this.uploadDoc}
              tipImageOwner={this.tipImageOwner}
            />
        }
      </div>
    );
  }
}

export default App;