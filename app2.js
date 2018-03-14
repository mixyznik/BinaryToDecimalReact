class Converter extends React.Component {
 constructor(props){
      super(props)           
      this.state = {converted: "", binaryNum: "" };                
      this.onFormSubmit=this.onFormSubmit.bind(this)
      this.onInputChange=this.onInputChange.bind(this)
      
    }

onFormSubmit(e) {
      e.preventDefault();
      if (e.target.elements.fromInput.value=="") {
        alert("Enter valid binary number!");
        }
      else {
        let inputValue=e.target.elements.fromInput.value;
        this.setState({binaryNum: inputValue});
        let decimal = parseInt(inputValue, 2); 
        this.setState({converted: decimal});
        e.target.elements.fromInput.value="";
        console.log(decimal);
        }
    }

onInputChange(event) {
      event.preventDefault();
      let inputValue1=event.target.value;
      if (!inputValue1.match("^[01]+$")) {
            alert("Enter valid binary number!")
            event.target.value=event.target.value.slice(0,-1);
           }
      }  


render() {

    return (
     <div>
        <form onSubmit={this.onFormSubmit} >
          <input type="number"  name="fromInput" id="numInput" placeholder="enter binary number"  onChange={this.onInputChange}/>
          <button>Convert</button>
        </form>
        <p id="binary">Binary number:{this.state.binaryNum}</p>
        <p id="result">Converted to decimal:{this.state.converted}</p>
     </div>
       );
};

}

const root=document.getElementById('root');
ReactDOM.render(<Converter/>, root);
