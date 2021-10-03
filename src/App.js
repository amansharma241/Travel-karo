import logo from './logo.svg';
import './App.css';
import { CssBaseline, Grid } from '@material-ui/core';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Maps/Map';
import PlaceDetails from './components/PlaceDetails/PlaceDetails';
import useStyles from './components/Header/Style';
import { useEffect, useState } from 'react';
import {getPlacesData} from './api/index';

function App() {
  const [places, setPlaceData] = useState([]);
  const [coordinates,setCoordinates] = useState({});
  const [bounds,setBounds] = useState({});


  const classes = useStyles();

  // this use-effect will fire first of all , when we first load our page
  useEffect(()=>{
    //console.log(2);
    navigator.geolocation.getCurrentPosition((position)=>{
      //console.log(position);
      setCoordinates({lat:position.coords.latitude,lng:position.coords.longitude});
    })
  },[])
  // then everytime ther is a change in coords or bounds this useeffect will fire and will fetch data according to these coords.
  // how will it know that there is a change in coordinates or bounds? that will be done by google map react component, chech at maps.js-22. 
  // when there will be a change in coordinates or bounds, usestate will change the state/value of coordinates and bounds and component re-renders then this 
  //useeffect will know it and then it will fire.
  useEffect(() => {
    getPlacesData(bounds.sw,bounds.ne).then((data) => {
       //console.log(data);
      setPlaceData(data);
    })
  },[coordinates,bounds]);

  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <div className="spacify">a</div>
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4} >
          <List places={places} />
        </Grid>
        <Grid item xs={12} md={8} >
    {/* // setCoordinates,setBounds,coordinates are passed as parameters, whenever there will be a change in these parameters(which will be done by 
    // usestate), component will be rerendered and after rerendering this second useeffect will be fired. */}
          <Map 
          setCoordinates={setCoordinates}
          setBounds = {setBounds}
          coordinates={coordinates}
          places={places}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
