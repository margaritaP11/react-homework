import Shopping from "./Shopping";

const ShoppingList = ({ items }) => {
  if(!items || items.length === 0){
    return <p>Список покупок пуст</p>
  }
  
  
  
  return (
    <ul>
      {items &&
        items.map((cosmetic, index) => (
          <Shopping
            key={index}
            name={cosmetic.name}
            brand={cosmetic.brand}
            type={cosmetic.type}
          />
        ))}
    </ul>
  );
};
export default ShoppingList;
