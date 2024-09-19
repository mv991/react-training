import {Button,Select,Checkbox,Input,Tab,Table,ConfigProvider, Space,Radio, Switch, theme} from "antd"
import './App.css';
import { useState } from "react";
// import {FloatButton} from "antd";
function App() {
const [theme,setTheme] = useState("light");
const lightTheme = {
  colorPrimary:"blue",
  colorTextBase:"black",
  colorTextLightSolid:"white",
  lineWidth:2
}
const darkTheme = {
  colorPrimary:"black",
  colorTextBase:"black",
  colorTextLightSolid:"white",
  fontFamily:"Roboto"
}
  return (
    <div className="App">
     {/* <Button type="primary" danger loading>Primary Button</Button>
     <FloatButton>Float Button</FloatButton> */}
     <ConfigProvider theme={{token: theme === "light"?  lightTheme  : darkTheme,
     components:{
      Checkbox:{
        colorPrimary:"red"
      }
     }
     }}>
      <Space direction="vertical" size={12}>
     <Button type="primary"> Theme Button</Button>
     <Checkbox>Checkbox</Checkbox>
     <ConfigProvider theme={{
      inherit:false
     }}>
     <Radio>Radio witjout theme</Radio>
     </ConfigProvider>
     <Radio>Radio</Radio>
     <ConfigProvider theme={{
      inherit:false,
      token:{
        colorPrimary:"purple"
     }}}>
     <Radio>Radio with child theme</Radio>
     </ConfigProvider>
     <Radio.Group onChange={(e) => setTheme(e.target.value)} value={theme}>
       <Radio value={"light"}>Light</Radio>
       <Radio value={"dark"}>Dark</Radio>
     </Radio.Group>
     <Switch checkedChildren="ON" unCheckedChildren="OFF"/>
     </Space>
     <Input placeholder="Type Here"/>
     <Select options={[{
      label:"label",
      value:"value"
     }]}/>
     <Table columns={[{title:"Column", dataIndex:"col"}]} dataSource={[{col:"value1"}]}/>
     <Para/>
     </ConfigProvider>
  
    </div>
  );
}
function Para() {
  const {token} = theme.useToken();
  console.log(token,"token")
  return <h3 style={{color: token.colorPrimary}}>Theme from a function</h3>
}
export default App;
