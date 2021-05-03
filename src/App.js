import React from 'react'
import Map from './components/Map'

class App extends React.Component {
  render() {
    return (
      <>
        <div style={{ margin: 20 }}>
          <Map
            google={this.props.google}
            // center={{ lat: 18.5204, lng: 73.8567 }}
            // 10.7634029,106.6810705
            center={{ lat: 10.7634029, lng: 106.6810705 }}
            height='600px'
            zoom={15}
          />
        </div>
      </>
    )
  }
}

export default App
