import React, {Component} from 'react'
import TableRow from './TableRow'




class Table extends Component {
  constructor() {
      super();
      this.state = {
          rows: 1,
          columns: 1,

          color: null,
          colorThem: false,
          clearThem: false,
          colorAllFlag: false,
      }
  }



  addRow = () => {
      this.setState({rows: this.state.rows + 1});
  }
  addColumn = () => {
      this.setState({columns: this.state.columns + 1});
  }
  removeRow = () => {
      
    if(this.state.rows > 0) {
          this.setState({rows: this.state.rows - 1});
      }
      else {
          alert("Went past 0");
      }
  }
  removeColumn = () => {
      if(this.state.columns > 0) {
          this.setState({columns: this.state.columns - 1});
      }
      else {
          alert("Went past 0");
      }
  }
  setColor = (e) => {
      this.setState({color: e.target.value});
  }
  colorIt = (e) => {
      e.target.style.backgroundColor = this.state.color;
  }
  colorAll = () => {
      let newTable = [];

      for (let i = 0; i < this.state.rows; i++) {
        for (let i = 0; i < this.state.columns; i++) {
          newTable.push (
              <TableRow
              columns = {this.state.columns}
              color = {this.state.color}
              colorIt = {this.colorIt}
              colorAllFlag = {this.state.colorAllFlag}
              clearAll = {this.clearAll}
              colorThem = {this.state.colorThem}
              clearThem = {this.state.clearThem}
              
              />);

          }
          }
}
  clearAll = () => {
      this.setState(prevState => ({
          clearThem: !prevState.clearThem, colorThem: false}));
  }



  // chgBackground = (e) => {
  //     this.setState(prevState => ({
  //         background: !prevState.background, colorThem: false
  //     }))
  // }

  render() {
      let newTable = [];

      for (let i = 0; i < this.state.rows; i++) {
          newTable.push (
              <TableRow
              columns = {this.state.columns}
              color = {this.state.color}
              colorIt = {this.colorIt}
              colorAllFlag = {this.state.colorAllFlag}
              clearAll = {this.clearAll}
              colorThem = {this.state.colorThem}
              clearThem = {this.state.clearThem}
              
              />);


          }





          
      return (
          <div>
            <div className = "add-remove">
              <button className = "button setMargin" onClick = {this.removeRow}>-</button>
              <h3>Rows: </h3> {this.state.rows}
              <button className = "button setMargin" onClick = {this.addRow}>+</button>
              <p></p>
              <button className = "button setMargin" onClick = {this.removeColumn}>-</button>
              <h3>Columns: </h3> {this.state.columns}
              <button className = "button setMargin" onClick = {this.addColumn}>+</button>
              </div>
              <div className = "add-remove">
              <select className = "button setMargin my-1 mr-sm-2" onChange = {this.setColor}>
                  <option> None </option>
                  <option value = "#FF0000" >Red</option>
                  <option value = "#00FF00" >Green</option>
                  <option value = "#0000FF" >Blue</option>
                  <option value = "#FF0066" >Pink</option>
                  <option value = "#660099" >Purple</option>
                  <option value = "#33FFFF" >Teal</option>
                  <option value = "#00CCCC" >Cyan</option>
                  <option value = "#FFFF00" >Yellow</option>
              </select>
              <button className = "button setMargin" onClick = {this.colorAll}>Color All</button>
              <button className = "button setMargin" onClick = {this.clearAll}>Clear All</button>
              </div>
              <p></p>
              <table className = "center">
                  {newTable}
              </table>
          </div>
      )
  }
}

export default Table;