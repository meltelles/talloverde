import { useParams } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer";

export default function CategoryPage() {
    const {id} = useParams();
    const greeting = `Soy la categoria: ${id}`;
    return (
        <ItemListContainer greeting={greeting} />
    );
}
