import './App.css';
import elephant from "./images/elephant.jpeg";

function App(props) {
  const img = props.myData();
console.log(img); 

  return (
    <>
      {img.map(item => (
        <img key={item.id} src={item.img} alt="" />
      ))}
    </>
  );
}

export default App;
