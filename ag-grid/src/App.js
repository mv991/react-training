
// Basic AG grid
// import { useMemo, useState } from "react";
// import {AgGridReact} from "ag-grid-react"
// import "ag-grid-community/styles/ag-grid.css"
// import "ag-grid-community/styles/ag-theme-quartz.css"
// import './App.css';


// const AlertComponent = (p) => {
//   return <button onClick={() => alert("Button CLicked")}>{p.value}</button>
// }



// function App() {
//   const defaultColDef = useMemo( () => {
//     return {
//       flex:1,
//       filter:true,
//       editable:true
//     }
//   })
//   const [rowData, setRowData] = useState([
//     { make: "Tesla", model: "Model Y", price: 64950, electric: true },
//     { make: "Ford", model: "F-Series", price: 33850, electric: false },
//     { make: "Toyota", model: "Corolla", price: 29600, electric: false },
//   ]);
  
 
//   const [colDefs, setColDefs] = useState([
//     { field: "make",
//       cellRenderer: AlertComponent,
     
//      },
//     { field: "model" ,
//       cellEditorParams:{values: ["Tesla", "Toyota","ford"]}
//     },
//     { field: "price" ,
//       // checkBoxSelection:true,
//       cellClassRules: {
//         "green-cell":p => p.value > 30000
//       }
//     },
//     { field: "electric",
 
//      }
//   ]);
//   return (
//     <div className="ag-theme-quartz" style={{height:500}}>
//      <AgGridReact
//        rowData={rowData}
//        columnDefs={colDefs}
//        defaultColDef={defaultColDef}
//        pagination={true}
//        paginationPageSize={1}
       
//      />
//     </div>
//   );
// }

// export default App;



// import './App.css';

// import {AgGridReact} from 'ag-grid-react';
// import "ag-grid-community/styles/ag-grid.css"
// import "ag-grid-community/styles/ag-theme-quartz.css"

// import {useState, useRef, useEffect, useMemo, useCallback, Component} from 'react';

// const PushComp = p => {
//   const onAt = useCallback( ()=> window.alert('Push'));
//   return (
//     <>
//       <button onClick={onAt}>Push</button>
//       {p.value}
//     </>);
// }

// class PullComp extends Component {
//   render() {
//     return (
//       <>
//         <button onClick={ ()=> window.alert('Pull')}>Pull</button>
//         {this.props.value}
//       </>);
//   }
// }
// // Customizing Cells
// // function App() {

// //   const gridRef = useRef();
// //   const [rowData, setRowData] = useState();
// //   const [columnDefs, setColumnDefs] = useState([
// //         { field: 'athlete', cellRenderer: PushComp },
// //         { field: 'age', cellRenderer: p => <><b>Age is: </b>{p.value}</> },
// //         { field: 'country', cellRenderer: PullComp },
// //         { field: 'year', 
// //               cellRendererSelector: p => {
// //                 if (p.value==2000) {
// //                   return {component: PushComp, params: {}};
// //                 }
// //                 if (p.value==2004) {
// //                   return {component: PullComp};
// //                 }
// //               }
// //           },
// //         { field: 'date' },
// //         { field: 'sport' },
// //         { field: 'gold' },
// //         { field: 'silver' },
// //         { field: 'bronze' },
// //         { field: 'total' }
// //   ]);
// //   const defaultColDef = useMemo( ()=> ( {
// //       sortable: true, 
// //       filter: true      
// //   }), []);

// //   useEffect(() => {
// //     fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
// //     .then(result => result.json())
// //     .then(rowData => setRowData(rowData))
// //   }, []);

// //   return (
// //     <div className="ag-theme-quartz" style={{height: '100vh'}}>
// //       <AgGridReact ref={gridRef}
// //           rowData={rowData} animateRows={true} 
// //           columnDefs={columnDefs} defaultColDef={defaultColDef}          
// //           />
// //     </div>
// //   );
// // }

// export default App;


// Filtering

// import {AgGridReact} from 'ag-grid-react';
// import "ag-grid-community/styles/ag-grid.css"
// import "ag-grid-community/styles/ag-theme-quartz.css"
// import 'ag-grid-enterprise'

// import {useState, useRef, useEffect, useMemo, useCallback, Component} from 'react';
// function App() {


//   const gridRef = useRef();
//   const [rowData, setRowData] = useState();
//   const [columnDefs, setColumnDefs] = useState([
// { field: 'athlete', 
//   floatingFilter:true,
//   filter: 'agTextColumnFilter' 
 
// },
// { field: 'age',  filter: 'agNumberColumnFilter' },
// { field: 'year', filter: 'agSetColumnFilter' },
// { field: 'country', filter: 'agMultiColumnFilter' },
// { field: 'date',  filter: 'agDateColumnFilter' }
//   ]);
//   const defaultColDef = useMemo( ()=> ( {
//      flex:1,
//      floatingFilter:true,
//      filterParams: {
//       buttons:['apply','clear','cancel','reset']
//      }
//   }), []);

//   useEffect(() => {
//     fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
//     .then(result => result.json())
//     .then(rowData => setRowData(rowData))
//   }, []);

//   const savedFilterState = useRef();

//   const onBtSave = useCallback( ()=> {
//     const filterModel = gridRef.current.api.getFilterModel();
//     console.log('Saving Filter Model', filterModel);
//     savedFilterState.current = filterModel;
//   }, []);

//   const onBtApply = useCallback( ()=> {
//     const filterModel = savedFilterState.current;
//     console.log('Applying Filter Model', filterModel);
//     gridRef.current.api.setFilterModel(filterModel);
//   }, []);

//   return (
//     <div className="ag-theme-quartz" style={{height: '300px'}}>
//        <div>
//         <button onClick={onBtSave}>Save</button>
//         <button onClick={onBtApply}>Apply</button>
//       </div>
//       <AgGridReact ref={gridRef}
//           popupParent={document.body}
//           rowData={rowData} animateRows={true} 
//           columnDefs={columnDefs} defaultColDef={defaultColDef}          
//           />
//     </div>
//   );
// }

// export default App;

// Create own filter

// import {AgGridReact} from 'ag-grid-react';
// import "ag-grid-community/styles/ag-grid.css"
// import "ag-grid-community/styles/ag-theme-quartz.css"
// import 'ag-grid-enterprise'

// import {useState, useRef, useEffect, useMemo, useCallback, Component} from 'react';
// import { useGridFilter } from "ag-grid-react";


// const Myfilter = ({model,onModelChange,getValue,colDef,title}) => {

//   const valueChanged = useCallback( p => {
//     const newValue = p.target.value;
//     onModelChange(newValue == '' ? null : newValue);
// });

// const doesFilterPass = useCallback( ({data, node}) => {
//     const value = getValue(node);
//     return value == model;
// });

// useGridFilter({doesFilterPass});

// return <>
//     <div>
//         <h3>{title}</h3>
//         <input
//             type="text"
//             value={model || ''}
//             onChange={valueChanged}
//             />
//     </div>
// </>;
// }

// function App() {


//   const gridRef = useRef();
//   const [rowData, setRowData] = useState();
//   const [columnDefs, setColumnDefs] = useState([
// { field: 'athlete', 
//   floatingFilter:true,
//   filter: 'agTextColumnFilter' 
//  },
// { field: 'age' },
// { field: 'year', filter: Myfilter ,
//   filterParams: {title:"Title"}
// },
// { field: 'country'},
// { field: 'date' }
//   ]);
//   const defaultColDef = useMemo( ()=> ( {
//      flex:1,
//      floatingFilter:true,
//      filterParams: {
//       buttons:['apply','clear','cancel','reset']
//      }
//   }), []);

//   useEffect(() => {
//     fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
//     .then(result => result.json())
//     .then(rowData => setRowData(rowData))
//   }, []);


//   return (
//     <div className="ag-theme-quartz" style={{height: '100vh'}}>
       
//       <AgGridReact ref={gridRef}
//           
//           popupParent={document.body}
//           rowData={rowData} animateRows={true} 
//           columnDefs={columnDefs} defaultColDef={defaultColDef}          
//           />
//     </div>
//   );
// }

// export default App;


// custom floating filter
// import './App.css';
// import 'ag-grid-community/styles/ag-grid.css';
// import 'ag-grid-community/styles/ag-theme-quartz.css';import {AgGridReact} from 'ag-grid-react';
// import {useState, useRef, useEffect, useMemo, useCallback} from 'react';

// const MyFilter = () => {
//   const valueChanged = useCallback( p => {
//     const newValue = p.target.value;
//     onModelChange(newValue == '' ? null : newValue);
// });

// const doesFilterPass = useCallback( ({node}) => {
//     const value = getValue(node);
//     return value == model;
// });

// const getModelAsString = useCallback( ()=> {
//     return model;
// }, [model]);

// useGridFilter({doesFilterPass, getModelAsString});

// useEffect( ()=> {
//     console.log('Filter Created');
//     return () => console.log('Filter Destroyed');
// }, []);

// return <>
//     <div className="MyFilter">
//         Filter:
//         <input
//             className="MyFilterInput"
//             type="text"
//             value={model || ''}
//             onChange={valueChanged}
//             />
//     </div>
// </>;
// }

// const MyFloatingFilter = () => {
//   const valueChanged = useCallback( p => {
//     const newValue = p.target.value;
//     onModelChange(newValue == '' ? null : newValue);
// });

// useEffect( ()=> {
//     console.log('Floating Filter Created');
//     return () => console.log('Floating Filter Destroyed');
// }, []);

// return <>
//     <div className="MyFloatingFilter">
//         <input
//             className="MyFloatingFilterInput"
//             type="text"
//             value={model || ''}
//             onChange={valueChanged}
//             />
//     </div>
// </>;
// }

// function App() {

//   const gridRef = useRef();
//   const [rowData, setRowData] = useState();
//   const [columnDefs] = useState([
//     { field: 'athlete' },
//     { 
//         field: 'year', 
//         filter: MyFilter,
//         floatingFilter: true,
//         floatingFilterComponent: MyFloatingFilter
//     },
//     { field: 'age' },
//     { field: 'country' },
//     { field: 'date' },
//     { field: 'sport' },
//     { field: 'gold' },
//     { field: 'silver' },
//     { field: 'bronze' },
//     { field: 'total' }
//   ]);

//   useEffect(() => {
//     fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
//     .then(result => result.json())
//     .then(rowData => setRowData(rowData))
//   }, []);

//   return (
//     <div className="ag-theme-quartz" style={{height: '100%'}}>
//       <div style={{height: '100%'}}>
//         <AgGridReact 
//             reactiveCustomComponents
//             rowData={rowData} columnDefs={columnDefs}
//             ref={gridRef} animateRows={true}             
//             />
//       </div>
//     </div>
//   );
// }

// export default App;

// upfating row data

import './App.css';

import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

import {useState, useRef, useEffect, useMemo, useCallback} from 'react';
let sequence = 0;
let carTypes = ['Mazda MX5','BMW M3','Porsche 911',
                'Mercedes S-Class','Aston Martin DBX',
                'Bentley Bentayga'];
let colors = ['Red','Blue','Green','White','Black'];

 function createOneCarRecord() {
    const res = {
        id: sequence,
        type: carTypes[sequence%carTypes.length],
        year: 2010 + (sequence * 7) % 10,
        color: colors[sequence%colors.length],
        price: 20000 + (sequence * 3 * 17 * 19 * 5 * 7) % 40000
    }
    sequence++;
    return res;
}



var numberFormatter = Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0
});
var myValueFormatter = p => numberFormatter.format(p.value);

let cars = [...new Array(4)].map(() => createOneCarRecord());

function App() {

  const gridRef = useRef();
  const [rowData, setRowData] = useState(cars);
  const [columnDefs, setColumnDefs] = useState([
        { field: 'type', sortable: true },
        { field: 'year' },
        { field: 'color' },
        { 
          field: 'price', 
          valueFormatter: myValueFormatter,
          cellRenderer: 'agAnimateShowChangeCellRenderer'
        }
  ]);

  const onInsertOne = useCallback( ()=> {
    const newRecord = createOneCarRecord();
    cars = [newRecord, ...cars];
    setRowData(cars);
  });

  const onTxInsertOne = useCallback( ()=> {
    const newRecord = createOneCarRecord();
    const res = gridRef.current.api.applyTransaction({
      add: [newRecord]
    });
    console.log(res);
  });

  const onTxAsyncInsertOne = useCallback( ()=> {
    const newRecord = createOneCarRecord();
    gridRef.current.api.applyTransactionAsync({
      add: [newRecord]
    }, res => {
      console.log(res);
    });
  });

  const getRowId = useCallback( params => {
    return params.data.id;
  });

  const onRemove = useCallback( () => {
    const selectedNodes 
            = gridRef.current.api.getSelectedNodes();
    const selectedIds = selectedNodes.map( 
              node => node.data.id);
    cars = cars.filter( 
              car => selectedIds.indexOf(car.id) < 0 );
    setRowData(cars);
  });

  const onTxRemove = useCallback( () => {
    const selectedNodes 
            = gridRef.current.api.getSelectedNodes();
    const selectedData = selectedNodes.map( 
              node => node.data);

    gridRef.current.api.applyTransaction({
      remove: selectedData
    });
  });

  const onUpdate = useCallback( () => {
    cars = cars.map( car => {
      if (Math.random()>0.5) { return car; }

      return {
        ...car,
        price: car.price 
            + (1000-Math.floor(Math.random()*2000))
      }
    });
    setRowData(cars);
  });

  const onTxUpdate = useCallback( () => {
    const updatedRecords = [];

    gridRef.current.api.forEachNode( node => {
      if (Math.random()>0.5) { return; }

      const car = node.data;

      updatedRecords.push({
        ...car,
        price: car.price 
            + (1000-Math.floor(Math.random()*2000))        
      });
    });

    gridRef.current.api.applyTransaction({
      update: updatedRecords
    });
  });

  const onReverse = useCallback( () => {
    cars = [...cars].reverse();
    setRowData(cars);
  });

  const onAsyncTxFlushed = useCallback( e => {
    console.log('=============');
    console.log(e);
    console.log('=============');
  }, []);

  const onFlushAsyncTx = useCallback( () => {
    gridRef.current.api.flushAsyncTransactions();
  }, []);

  return (
    <div className="ag-theme-alpine" style={{height: '100vh'}}>
      <div>
        <button onClick={onInsertOne}>Insert One</button>
        <button onClick={onReverse}>Reverse</button>
        <button onClick={onRemove}>Remove Selected</button>
        <button onClick={onUpdate}>Update Some</button>
      </div>
      <div>
        <button onClick={onTxInsertOne}>Tx Insert One</button>
        <button onClick={onTxRemove}>Tx Remove Selected</button>
        <button onClick={onTxUpdate}>Tx Update Some</button>
      </div>
      <div>
        <button onClick={onTxAsyncInsertOne}>Tx Async Insert One</button>
        {/* <button onClick={onFlushAsyncTx}>Flush Async Tx</button> */}
      </div>
      <AgGridReact ref={gridRef}
          // enableCellChangeFlash={true}
          // onAsyncTransactionsFlushed={onAsyncTxFlushed}
          asyncTransactionWaitMillis={5000}
          getRowId={getRowId}
          // rowSelection={'multiple'}
          rowData={rowData} 
          animateRows={true} 
          columnDefs={columnDefs}
          />
    </div>
  );
}

export default App;


