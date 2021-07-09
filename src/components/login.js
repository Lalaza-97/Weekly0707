import LockOutlinedIcon from "@material-ui/core/lockOutlinedIcon";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Grid, Paper, Avatar, Button, TextField, Link, Typography } from "@material-ui/core";
import {Formik, Form} from 'Formik'

const Login=(handleChange)=>{

    const paperStyle={padding:20, height:'20vh', width:300, margin:'20px auto'}
    const avatarStyle={background: '#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    const initialValues={
        Username:"",
        Password:"",
        Remember: false,
    }
    return(
        <Grid>
            <Paper style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign in</h2>                
                </Grid>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    {(props) => {
                        <Form>

                        </Form>
                    }}
                </Formik>
                <TextField label='Username' name="username" placeholder='Enter username' fullWidth required/>
                <TextField label='Password' name="password" placeholder='Enter password' type='password' fullWidth required/>
                <FormControlLabel
                name='remember'
                    control={
                    <Checkbox
                    name="Checked8"
                    color="primary"
                    />
                    }
                    label="Remember me"
                />
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                <Typography>
                    <Link href="#">
                        forgot password ?
                    </Link>
                </Typography>
                <Typography> Do you have an account ?
                    <Link href="#" onClick={()=>handleChange}>
                        Sign up
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}
export default Login