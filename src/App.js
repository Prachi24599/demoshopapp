import "./App.css";
import Item from "./components/Item";
import ItemDate from "./components/ItemDate";
import Card from "./components/Card";
const randomNum = require("random-num");

function App() {
  const response = [
    {
      itenName: "Nirma",
      itemDay: 24,
      itemMonth: "May",
      itemYear: "1999",
    },
    {
      itenName: "SurfExcel",
      itemDay: 14,
      itemMonth: "March",
      itemYear: "1995",
    },
    {
      itenName: "Ghadi",
      itemDay: 9,
      itemMonth: "Dec",
      itemYear: "2004",
    },
  ];
  return (
    <div>
      <Card>
        <Item name={response[0].itenName}>This is your first Item</Item>
        <ItemDate
          day={response[0].itemDay}
          month={response[0].itemMonth}
          year={response[0].itemYear}
        ></ItemDate>
        <Item name={response[1].itenName}></Item>
        <ItemDate
          day={response[1].itemDay}
          month={response[1].itemMonth}
          year={response[1].itemYear}
        ></ItemDate>
        <Item name={response[2].itenName}></Item>
        <ItemDate
          day={response[2].itemDay}
          month={response[2].itemMonth}
          year={response[2].itemYear}
        ></ItemDate>

        {/* <div className="App">Hello Ji</div> */}
        <div className="App"> {randomNum(1, 100)}</div>
      </Card>
    </div>
  );
}

export default App;
