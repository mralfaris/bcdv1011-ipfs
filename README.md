# IPFS File store and fetch using React.

Upload a file on your local IPFS Daemon and then view the uploaded file from IPFS network.

## How to run the project?
* Install packages using `npm install` and start react server using `npm start`.
* Start your local IPFS by running `ipfs init` and `ipfs daemon`.
* Make sure that your local IPFS Daemon allows CORS, if not run this command before startup by calling `ipfs config --json API.HTTPHeaders.Access-Control-Allow-Origin '["*"]'`.
* Open a new browser and check the URL: [http://localhost:3000](http://localhost:3000)
* Upload a file using UI, if successfull your file will be viewed below the form and file hash CID will be shown.
