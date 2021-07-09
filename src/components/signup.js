import React from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core';
import AddCircleOutlineOutlinedIcon from '@material-ui/core/AddCircleOutlineOutlined';
import Radio from '@material-ui/core/Radio';
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";
import {Formik, Field, Form} from 'formik'

const Signup = () => {
    const paperStyle = {padding:'30px 20px', width:300, margin:'0 auto'}
    const headerStyle = {margin: 0}
    const avatarStyle = {backgroundColor: '#1bbd7e'}
    const marginTop = {marginTop:5}
    return(
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon/>
                    </Avatar>
                    <h2 style={headerStyle}>Sign up</h2>
                    <Typography variant='caption' gutterBottom>Create an account</Typography>
                </Grid>
                <form>
                    <TextField fullWidth label='Name'/>
                    <TextField fullWidth label='Email'/>
                    <FormControl component='fieldset' style={marginTop}>
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup arial-label="gender" name="gender" style={{display: 'initial'}}>
                            <FormControlLabel value="female" control={<Radio/>} label="Female"/>
                            <FormControlLabel value="male" control={<Radio/>} label="Male"/>
                        </RadioGroup>
                    </FormControl>
                    <TextField fullWidth label='Phone Number' placeholder="Enter your phone number"/>
                    <TextField fullWidth label='Password' placeholder="Enter your password"/>
                    <TextField fullWidth label='Confirm Password' placeholder="Confirm your password"/>
                    <FormControlLabel
                    control={<Checkbox name="CheckedA" />}
                    label="i accept the terms and conditions."
                     />
                    <Button type='submit' variant='contained' color/>
                </form>
            </Paper>
        </Grid>
    )
}

export default Signup;