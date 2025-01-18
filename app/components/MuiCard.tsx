import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";

const MuiCard = () => {
  return (
    <Box width="300px">
      <Card>
        <CardMedia
          component="img"
          height="140px"
          image="https://source.unsplash.com/random"
          alt="unsplash image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            React
          </Typography>
          <Typography variant="body2" color="text.secondary">
            React is the library for web and native user interfaces. Build user
            interfaces out of individual pieces called components written in
            JavaScript.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button>Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default MuiCard;
