/* Задание 1

Создание компонента Приветствия
Создайте новый проект React при помощи create-react-app.
Подготовьте проект к работе.
Создайте функциональный компонент с именем Greeting
Этот компонент должен принимать проп name, после чего выводить приветственное сообщение в формате: 
"Привет, [name]!", где [name] — это значение переданного пропа.
Импортируйте компонент в App для его отображения.
Запустите программу, проверьте работоспособность.  */

/* import Greeting from "./Greeting";

function App() {
  return (
    <div className="App">
      <Greeting name='World' />
    </div>
  );
}

export default App; */

/* Задание 2

Компонент Списка Покупок
В компоненте App определите массив, содержащий названия любых товаров.
Создайте компонент ShoppingList.
Компонент должен принимать массив с названиями товаров через проп items.
Также ShoppingList должен отображать каждый элемент из массива в виде <li> элемента <ul> списка.
Если массив пуст, должно отображаться сообщение: "Список покупок пуст".
Импортируйте ShoppingList в App, запустите приложение.
Проверьте, выводится ли сообщение, если список покупок пуст. */

/* import ShoppingList from "./ShoppingList.";

function App() {
  const cosmetics = [
    { name: "Hydra Zen", brand: "Lancôme", type: "Увлажняющий крем" },
    { name: "Double Wear", brand: "Estée Lauder", type: "Тональный крем" },
    { name: "Better Than Sex", brand: "Too Faced", type: "Тушь для ресниц" },
    { name: "Soft Matte Lip Cream", brand: "NYX", type: "Матовая помада" },
    { name: "Fix+ Spray", brand: "MAC", type: "Фиксатор макияжа" },
    {
      name: "Glow Recipe Watermelon Serum",
      brand: "Glow Recipe",
      type: "Сыворотка для лица",
    },
    { name: "Hoola", brand: "Benefit", type: "Бронзер" },
    { name: "Tattoo Liner", brand: "KVD Beauty", type: "Подводка для глаз" },
    { name: "Luminous Silk", brand: "Giorgio Armani", type: "Фонд" },
    {
      name: "Cicapair Tiger Grass",
      brand: "Dr.Jart+",
      type: "Корректирующий крем",
    },
  ];

  return (
    <div className="App">
      <ShoppingList items={cosmetics} />
    </div>
  );
}

export default App; */

/* Задание 3 *

Компонент Статуса Заказа
В компоненте App определите массив, содержащий информацию о заказах в
 формате [{orderId: 123, status: ‘в пути’}].
Создайте компонент OrderStatus который принимает два пропа: orderId (номер заказа) 
и status (статус заказа, например, "обработан", "в пути", "доставлен").
Компонент должен отображать информацию в следующем формате: "Заказ #[orderId]: [status]".
Импортируйте компонент в App, проверьте его работоспособ */

import OrderStatus from "./OrderStatus";
function App() {
  const orders = [
    { orderId: 101, status: "обработан" },
    { orderId: 102, status: "в пути" },
    { orderId: 103, status: "доставлен" },
    { orderId: 104, status: "отменён" },
  ];

  return (
    <div className="App">
      <OrderStatus orderItems={orders} />
    </div>
  );
}
export default App;
