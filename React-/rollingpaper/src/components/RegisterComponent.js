import {Button, TextField} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const RegisterComponent = () => {
    return (
        <div className="register-component">
            <p className={"register-title"}>사용자 정보 입력</p>
            <Grid container={true} className="register-form">
                <Grid xs={12}>
                    <TextField label={"TO"}></TextField>
                </Grid>
                <Grid xs={12}>
                    <TextField type={"email"} label={"E-MAIL"}></TextField>
                </Grid>
                <Grid xs={12}>
                    <TextField type={"tel"} label={"PHONE"}></TextField>
                </Grid>
                <Grid xs={12}>
                    <TextField type={"password"} label={"PASSWORD"}></TextField>
                </Grid>
                <Grid xs={12}>
                    <TextField type={"password"} label={"RE-PASSWORD"}></TextField>
                </Grid>
                <Grid className={"register-button"}>
                    <Button variant={"contained"} color={"success"}>REGISTER</Button>
                </Grid>
            </Grid>
        </div>
    )
}


export default RegisterComponent;