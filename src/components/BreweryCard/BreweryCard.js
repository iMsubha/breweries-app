import React from 'react';
import { Link } from 'react-router-dom';
import { Col } from "react-bootstrap";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
const BreweryCard = (props) => {
    const {id,name,brewery_type,city} = props.brewery;
    return (
      <Col className="mb-4">
        <Card sx={{ minWidth: 275 }} style={{ borderTop: '2px solid #f06c4e'}}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {name}
            </Typography>
            <Typography variant="h6" component="div" color="text.primary">
            City: {city}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Brewery Type: {brewery_type}
            </Typography>
          </CardContent>
          <CardActions>
          <Button size="small">
                <Link  className="text-decoration-none" style={{ color: '#f06c4e'}} to={`/${id}`}>View Detail</Link>
          </Button>
          </CardActions>
        </Card>
      </Col>
    );
};

export default BreweryCard;