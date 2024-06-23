function App() {
    const current_date=new Date();
    return (
        <div>
     
        <h1>Hello World</h1>
        <h2>The time now is {current_date.toLocaleTimeString()}.</h2>
               
        </div>
    );
  }
  
  export default App;