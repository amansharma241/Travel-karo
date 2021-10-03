import React ,{useState} from 'react'
import {CircularProgress,Grid,Typography,InputLabel,MenuItem,FormControl,Select} from '@material-ui/core';
import useStyles from './Styles';
import PlaceDetails from '../PlaceDetails/PlaceDetails';


const List = ({places})=> {
    const classes = useStyles();
    const [type,setType] = useState('restaurants');
    const [rating,setRating] = useState('0');

     return (
        <div className={classes.container}>
            <Typography variant="h4">
                Restaurants,Hotels around you!
            </Typography>
        <FormControl className={classes.formControl}>
            <InputLabel> Type</InputLabel>
            <Select value={type} onChange={(e)=>setType(e.target.value)}>
                <MenuItem value="restaurants">Restaurants</MenuItem>
                <MenuItem value="hotels">Hotels</MenuItem>
                <MenuItem value="attractions">Attractions</MenuItem>
            </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
            <InputLabel> Rating</InputLabel>
            <Select value={rating} onChange={(e)=>setRating(e.target.value)}>
                <MenuItem value={0}>All</MenuItem>
                <MenuItem value={3.5}>Above 3.5</MenuItem>
                <MenuItem value={4}>Above 4.0</MenuItem>
                <MenuItem value={4.5}>Above 4.5</MenuItem>
            </Select>
        </FormControl>
        <Grid container spacing={3} className={classes.list}>
            {places?.map((place,i)=>(                                // here we are iterating through the places array and places.? represents that if places array is non empty then traverse through it.
                                                                    // here place represents every individual place in the places array. here place(jo pehle likha hai) works as a prop or parameter that we will pass into PlaceDetails component
                  <Grid item key={i} xs={12}>
                      <PlaceDetails place = {place}/>           
                  </Grid>
            ))}
        </Grid>    
        </div>
    )
}

export default List