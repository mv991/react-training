import { useMemo, useState } from "react";
import {AgGridReact} from "ag-grid-react"
import "ag-grid-community/styles/ag-grid.css"
import "ag-grid-community/styles/ag-theme-quartz.css"
import './App.css';


const AlertComponent = (p) => {
  return <button onClick={() => alert("Button CLicked")}>{p.value}</button>
}



function App() {
  const defaultColDef = useMemo( () => {
    return {
      flex:1,
      filter:true,
      editable:true
    }
  })
  const [rowData, setRowData] = useState([
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ]);
  
 
  const [colDefs, setColDefs] = useState([
    { field: "make",
      cellRenderer: AlertComponent,
     
     },
    { field: "model" ,
      cellEditorParams:{values: ["Tesla", "Toyota","ford"]}
    },
    { field: "price" ,
      // checkBoxSelection:true,
      cellClassRules: {
        "green-cell":p => p.value > 30000
      }
    },
    { field: "electric",
 
     }
  ]);
  return (
    <div className="ag-theme-quartz" style={{height:500}}>
     <AgGridReact
       rowData={rowData}
       columnDefs={colDefs}
       defaultColDef={defaultColDef}
       pagination={true}
       paginationPageSize={1}
       
     />
    </div>
  );
}

export default App;


