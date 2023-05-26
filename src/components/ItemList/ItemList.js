import Item from "../Item/Item";
import "./ItemList.css";
const ItemList = ({ products }) => {
  return (
    <section className="item-list__container">
      {products.length > 0 ? (
        products.map((item) => {
          return <Item key={item.id} item={item} />;
        })
      ) : (
        <p>No hay elementos</p>
      )}
    </section>
  );
};

export default ItemList;
