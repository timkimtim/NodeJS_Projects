if(process.env.NODE_ENV === 'production') {
  module.exports = {mongoURI: 'mongodb://Tim:k3070885@ds145921.mlab.com:45921/vidjot-live'};
} else {
  module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'};
}