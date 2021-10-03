import React from 'react'
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './Style'
import Link from "@material-ui/core/Link";
const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position="static" >
            <Toolbar className={classes.toolbar}  >
                
                <Box display="flex">
                <Typography variant="h5" className={classes.title} >
                    Travel Karo
                </Typography>
                {/* <Typography variant="h5" className={classes.title} >
                    Travel Karo
                </Typography>
                <Typography variant="h5" className={classes.title} >
                    Travel Karo
                </Typography> */}
                </Box>


                <Box display="flex">
                    <Typography variant="h6" className={classes.title} >
                        Explore places!!
                    </Typography>

                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase placeholder="Search..." classes={{ root: classes.root, input: classes.inputInput }} />
                    </div>

                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header
