import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const Detail = () => {
    const [detail, setDetail] = useState({})
    let {id} = useParams();
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/home')
    }
    useEffect(() => {
       const url = `https://api.openbrewerydb.org/breweries/${id}`;
       fetch(url)
       .then((res) => res.json())
       .then((data) => setDetail(data))
    },[])
    return (
    <div className="container d-flex justify-content-center mt-5">
        <Card className="d-flex flex-column  align-items-center" style={{ borderTop: '2px solid #f06c4e', width: '40%'}}>
        <CardContent >
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Brewery type: {detail.brewery_type}
            </Typography>
            <Typography variant="h5" component="div">
                {detail.name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Street: {detail.street}
            </Typography>
            <Typography variant="body2">
                Address_2: {detail.address_2} 
            </Typography>
            <Typography variant="body2">
                Address_3: {detail.address_3} 
            </Typography>
            <Typography variant="body2">
                City: {detail.city} 
            </Typography>
            <Typography variant="body2">
                State: {detail.state} 
            </Typography>
            <Typography variant="body2">
                County province: {detail.county_province} 
            </Typography>
            <Typography variant="body2">
                Postal code: {detail.postal_code} 
            </Typography>
        </CardContent>
        <CardActions>
            <Button  style={{ color: '#f06c4e',outlineColor: '#f06c4e' }} onClick={handleClick}>Go Back</Button>
        </CardActions>
        </Card>
    </div>
    );
};

export default Detail;