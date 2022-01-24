import { Button } from "react-bootstrap"
import Navbar from "../components/Navbar"
import { ListGroup } from "react-bootstrap";
/* export async function getStaticProps() {
    // GET: Request */




const getBreeds = () => {
    {

        try {
            headers['x-api-key'] = "ed3d739e-cb79-4e16-ba31-07308efa3202"
            let response = fetch('https://api.thecatapi.com/v1/breeds/')
            let data = response.data;


            console.log(data)
        } catch (err) {
            console.log(err)
        }

        getImages()
        {
            try {

                let query_params = {
                    breed_ids: this.selected_breed.id,
                    limit: 8
                }

                let response = fetch('https://api.thecatapi.com/v1/images/search', { params: query_params })

                this.pagination_count = response.headers['pagination-count'];
                this.images = response.data
                this.current_image = this.images[0]



                console.log("-- (" + this.images.length + ") Images from TheCatAPI.com")
                console.log(this.pagination_count, 'images available for this query.')

            } catch (err) {
                console.log(err)
            }
        }
    }
}

/*     const breedsList = await res.data;
    // returning a value from our JSON data
 
    return {
       props: {},
    }
  }
 
} */

function Breeds() {

    return (

        <div>
            <Navbar />
            <h3 className="text-muted text-center">Breed List</h3>
            {/*    {data.map((breed) =>
                <li key={breed.id}>
                    {breed.id}
                </li>
            )

            } */}
            <ListGroup as="ul">
                <a href="/cat-search/{id}"><ListGroup.Item><Button variant="contained">   </Button></ListGroup.Item> </a>
                <a href="/cat-search/{id}"> <ListGroup.Item></ListGroup.Item> </a>
                <a href="/cat-search/{id}"><ListGroup.Item></ListGroup.Item> </a>
                <a href="/cat-search/{id}"> <ListGroup.Item></ListGroup.Item></a>
                <a href="/cat-search/{id}">  <ListGroup.Item></ListGroup.Item></a>
                <a href="/cat-search/{id}"><ListGroup.Item></ListGroup.Item> </a>
            </ListGroup>


        </div>

    )


}

export default Breeds