import './App.css';
import React, {Component} from 'react';
const ipfsClient = require('ipfs-http-client');

class App extends Component {

  constructor () {
    super()
    this.state = {
      added_file_hash: null
    }
    this.ipfs = ipfsClient('/ip4/127.0.0.1/tcp/5001')
  }

  state = {
    selectedFile: null,
    fileHash: null,
    filePath: null
  };

  onFileChange = event => {
    this.setState({ selectedFile: event.target.files[0] });
  };

  onFileUpload = async() => {
    const formData = new FormData();
    formData.append(
      "myFile",
      this.state.selectedFile,
      this.state.selectedFile.name
    );
    const source = await this.ipfs.add(this.state.selectedFile);
    console.log("result = " + JSON.stringify(source));
    
    this.setState({fileHash: source.cid.toString(), filePath: source.path});


    console.log(this.state.selectedFile);
  };

  fileData = () => {

    if (this.state.selectedFile) {

      /*
      const reader = new FileReader();
      reader.readAsDataURL(this.state.selectedFile);
      reader.onloadend = (fileContents) => {
        console.log('contents = ' + reader.result);
      }
      */
    
      console.log("fileHash = " + this.state.fileHash);
      console.log("filePath = " + this.state.fileHash);
      console.log('https://ipfs.io/ipfs/' + this.state.fileHash);

      return (
        <div>
          <h2>File Details:</h2>
          <p>File Name: {this.state.selectedFile.name}</p>
          <p>File Type: {this.state.selectedFile.type}</p>
          <p>
            Last Modified:{" "}
            {this.state.selectedFile.lastModifiedDate.toDateString()}
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h4>Choose before Pressing the Upload button</h4>
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        <h1>
          IPFS File Upload
          </h1>
        <h3>
          File Upload using React!
          </h3>
        <div>
          <input type="file" onChange={this.onFileChange} />
          <button onClick={this.onFileUpload}>
            Upload!
              </button>
        </div>
        <div></div>
        <div>
          <p></p>
          File from IPFS:
          <p></p>
          <a target='_blank' rel="noreferrer"
            href={'https://ipfs.io/ipfs/' + this.state.fileHash}>
            {this.state.fileHash}
          </a>
          <p></p>
          <img alt="filefromipfs" src={'https://ipfs.io/ipfs/' + this.state.fileHash} />
        </div>
      </div>
    );
  }
}

export default App;
