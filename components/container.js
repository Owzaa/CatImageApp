import React, { useState, useEffect } from "react";
import Card from "../components/Card"; // Importing the card component
import Grid from "@material-ui/core/Grid";  //Importing the Grid component
import { Button } from "@material-ui/core";
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'

const Container = () => {
    const { breeds, setBreeds } = useState([]);

    const getBreeds = () => { //fetching data
        fetch("https://api.thecatapi.com/v1/images/search")
            .then((response) => {
                setBreeds(response.breeds); //updating state with new information
            })
            .catch((err) => console.log(JSON.stringify(err))); // catching any errors
    };

    useEffect(() => {
        getBreeds();
    },
    );

    return (
        <section className="content">
            <Carousel variant="dark" style={{ width: 'fill', height: 'fill' }}>
                <Carousel.Item>
                    <Image
                        className="d-block w-100"
                        src="holder.js/800x400?text=First slide&bg=f5f5f5"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        className="d-block w-100"
                        src="holder.js/800x400?text=Second slide&bg=eee"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        className="d-block w-100"
                        src="holder.js/800x400?text=Third slide&bg=e5e5e5"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h5>Third slide label</h5>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <Grid container spacing={4}>

                <Card />

            </Grid>
        </section>
    );
};

export default Container;