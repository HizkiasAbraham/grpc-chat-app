import React from "react"
import Grid from "@mui/material/Grid"
import Divider from "@mui/material/Divider"
import TextField from "@mui/material/TextField"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import Papper from "@mui/material/Paper"

const useStyles = {
  table: {
    minWidth: 650,
  },
  chatSection: {
    width: "100%",
    height: "80vh",
  },
  headBG: {
    backgroundColor: "#e0e0e0",
  },
  borderRight500: {
    borderRight: "1px solid #e0e0e0",
  },
  messageArea: {
    height: "70vh",
    overflowY: "auto",
  },
}

const Chat = () => {
  const classes = useStyles

  return (
    <div>
      <Grid
        container
        // component={Paper}
        style={{ width: "100%", height: "80vh" }}
      >
        <Grid item xs={12}>
          <List style={{ height: "70vh", overflowY: "auto" }}>
            <ListItem key="1">
              <Grid container>
                <Grid p={2} component={Papper} item xs={6}>
                  <ListItemText
                    primary="Hey man, What's up ?"
                    secondary="09:30"
                  ></ListItemText>
                </Grid>
              </Grid>
            </ListItem>
            <ListItem key="2">
              <Grid container>
                <Grid item xs={6}></Grid>
                <Grid p={2} component={Papper} item xs={6}>
                  <ListItemText
                    primary="Hey, Iam Good! What about you ?"
                    secondary="09:31"
                  ></ListItemText>
                </Grid>
              </Grid>
            </ListItem>
          </List>
          <Divider />
          <Grid container style={{ padding: "20px" }}>
            <Grid item xs={12}>
              <TextField
                id="outlined-basic-email"
                label="Type Something"
                fullWidth
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Chat
