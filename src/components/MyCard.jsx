import React,{useState} from 'react';
import { Button, Card, CardActions, CardContent, Typography, Grid } from '@material-ui/core';
import {getMatchDetails} from '../api';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function MyCard({ match }) {

        const [detail , setDetails] = useState({});
        const [open , setOpen] = useState(false);
        

    const handleClick = async (id)  =>{
            const data = await getMatchDetails(id);
            setDetails(data);
            console.log(data);
            handleOpen();
    
    }



    const getMatchCard = ()=>{
        return (
            <Card style={{marginTop:20}}>
                <CardContent>
                     <Grid container justify="center" spacing={4} alignContent="center">
                         <Grid item>
                            <Typography varient="h5">{match["team-1"]}</Typography>
                         </Grid>
                         <Grid item>
                         <Typography varient="h1">Vs</Typography>
                         </Grid>
                         <Grid item>
                            <Typography varient="h5">{match["team-2"]}</Typography>
                         </Grid>
                     </Grid>   
                </CardContent>
                <CardActions>
                    <Grid container justify="center" spacing={3}>
                    <Button onClick={ ()=>{ handleClick(match.unique_id)}} style={{margin:15}} item variant="contained" color="primary">Show Details</Button>
                    <Button item variant="contained" color="primary">Start Time: {new Date(match.dateTimeGMT).toLocaleString()}</Button>
                    </Grid>
                </CardActions>
            </Card>
      );
    }

    const handleClose= () =>{
        setOpen(false);
    }

    const handleOpen = () =>{
        setOpen(true);
    }

  
   return (

       <>
       {match.type === "Twenty20" ? getMatchCard() : ""}
      <Dialog open={open} onClose={handleClose}>
            <DialogTitle id="alert-dialog-title">{"Match Details..."}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <Typography>{detail.stat}</Typography>
                    <Typography>
                            Match <span style={{ fontStyle: "italic", fontWeight: "bold"}}> 
                                     {detail.matchStarted ? "Started" : "Still not started"} 
                                  </span>
                    </Typography>
                    <Typography>
                            Score <span style={{ fontStyle: "italic", fontWeight: "bold"}}> 
                                     {detail.score} 
                                 </span>
                    </Typography>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                 <Button onClick={handleClose} color="primary" autoFocus>
                  Close
                 </Button>
            </DialogActions>

        </Dialog>
       </>
   );
}

export default MyCard;
