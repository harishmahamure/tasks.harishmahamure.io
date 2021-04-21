import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import DeleteIcon from "@material-ui/icons/Delete";
import Edit from "@material-ui/icons/Edit";

const useStyles = makeStyles((theme) => ({
	py5: {
		paddingTop: "4rem",
	},
	start: {
		margin: 0,
	},
}));

export default function TaskList() {
	const classes = useStyles();

	return (
		<React.Fragment>
			<div className={classes.py5}></div>
			<Grid container>
				<Grid item xs={12}>
					<List>
						<ListItem>
							<div className={classes.start}>
								<Grid item xs={3}>
									<ListItemAvatar>
										<Avatar>
											<AccountCircle />
										</Avatar>
									</ListItemAvatar>
								</Grid>
							</div>
							<Grid item xs={6}>
								<ListItemText primary="Single-line item" />
							</Grid>
							<Grid item xs={3}>
								<ListItemSecondaryAction>
									<IconButton edge="end" aria-label="delete">
										<Edit />
									</IconButton>
									<IconButton edge="end" aria-label="delete">
										<DeleteIcon />
									</IconButton>
								</ListItemSecondaryAction>
							</Grid>
						</ListItem>
					</List>
				</Grid>
			</Grid>
		</React.Fragment>
	);
}
