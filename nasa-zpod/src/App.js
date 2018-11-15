import React, { Component } from 'react';
import ViewerTemplate from './components/ViewerTemplate';
import SpaceNavigator from './components/SpaceNavigator';
import Viewer from './components/Viewer';

import * as api from './lib/api';

class App extends Component {
  componentDidMount() {
    this.getAPOD();
  }

  getAPOD = async (date) => {
    try {
      const response = await api.getAPOD(date);
      // eslint-disable-next-line
      console.log(response);
    } catch (e) {
      // eslint-disable-next-line
      console.log(e);
    }
  }

  render() {
    return (
      <ViewerTemplate
        spaceNavigator={<SpaceNavigator />}
        viewer={(
          <Viewer
            url="https://www.youtube.com/embed/uj3Lq7Gu94Y?rel=0"
            mediaType="video"
          />
        )}
      />
    );
  }
}

export default App;
