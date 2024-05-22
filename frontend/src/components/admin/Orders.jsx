import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';

const Orders = () => {
  const [order, setOrder] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/order/getorder', {
          withCredentials: true
        });
        console.log(res.data);
        setOrder(res.data.data);
        setLoading(false); // Set loading to false after successfully fetching data
      } catch (error) {
        console.log(error);
        setError('Error fetching orders'); // Set error message if there's an error
        setLoading(false); // Set loading to false
      }
    };
    fetchOrder();
  }, []);

  if (loading) return <div className="text-center mt-4">Loading...</div>; // Display loading message if data is still loading
  if (error) return <div className="text-center mt-4">{error}</div>; // Display error message if there's an error fetching data

  return (
    <div className='grid gap-10 p-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-4'>
      {order.map((item, index) => (
        <div key={index}>
          <Card>
            <CardContent sx={{ fontSize: 13 }}>
              <Typography sx={{ fontSize: 11, fontWeight: 'bold', color: '#333' }} gutterBottom>
                Order ID: {item._id}
              </Typography>
              <Typography variant="h5" component="div">
                {item.user.name}
              </Typography>
              <Typography variant="h8" component="div">
                Start Date: {new Date(item.startDate).toLocaleDateString()}
              </Typography>
              <Typography variant="h9" component="div">
                End Date: {new Date(item.endDate).toLocaleDateString()} (Month {new Date(item.endDate).getMonth() + 1})
              </Typography>
              <Typography variant="h9" component="div">
                Days: {Math.round((new Date(item.endDate) - new Date(item.startDate)) / (1000 * 60 * 60 * 24))}
              </Typography>
              <Typography variant="h9" component="div">
                Months: {(new Date(item.endDate).getMonth() + 1) - (new Date(item.startDate).getMonth() + 1)}
              </Typography>
              <Typography color="text.secondary" sx={{ fontWeight: 'bold', color: '#333' }}>
                Billboard ID: {item.billboard._id}
              </Typography>
              <Typography color="text.secondary" sx={{ fontWeight: 'bold', color: '#333' }}>
                Location: {item.billboard.name}
              </Typography>
              <Typography color="text.secondary" sx={{ fontWeight: 'bold', color: '#333' }}>
                Description: {item.billboard.description}
              </Typography>
              <Typography color="text.secondary" sx={{ fontWeight: 'bold', color: '#333' }}>
                City: {item.billboard.city}
              </Typography>
              <Typography sx={{ fontSize: 12, textWrap: 'nowrap', fontWeight: 'bold', color: '#333' }} color="text.secondary">
                Email: {item.user.email}
              </Typography>
            </CardContent>
            <CardActions className='flex justify-end'>
              <Button size="small" sx={{ backgroundColor: '#3f51b5', color: '#fff', borderRadius: '4px', '&:hover': { backgroundColor: '#303f9f' } }}>Confirm Order</Button>
            </CardActions>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Orders;
