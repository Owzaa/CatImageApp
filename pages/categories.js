import Navbar from "../components/Navbar"


const url = "https://api.thecatapi.com/v1/categories"
const headers = {
    "x-api-key": "ed3d739e-cb79-4e16-ba31-07308efa3202"
}
export default function Categories() {
    return <div>
        <Navbar />
        <h3 className="text-muted text-center"> Categories</h3>
    </div>;
}

