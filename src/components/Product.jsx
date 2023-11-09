import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';

const Product = () => {
    const [products, setProducts] = useState([]);

    useEffect( () => {
  
      fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  
    }, []);

    const cards = products.map(product => (
        <div className='col-md-3 text-center' key={product.id} style={{marginBottom: "10px"}}>
            <Card style={{ width: '18rem' }} className='h-100'>
            <div className='text-center'>
                <Card.Img variant="top" src={product.image} style={{width: '100px', height: '130px'}} />
            </div>
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                Price: ${product.price}
                </Card.Text>
            </Card.Body>

            <Card.Footer style={{background: "white"}}>
                <Button variant="primary">Add to Cart</Button>
            </Card.Footer>
            </Card>
        </div>
    ))

    return (
        <div>
            <h3 className='text-center'>Product Dashboard</h3>
            <div className='row'>
                {cards}
            </div>
        </div>
    );
};

export default Product;