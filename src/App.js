import React from "react";
import { Typography } from "antd";

const { Title, Text } = Typography;

function App() {
  return (
    <div className="App">
      <Title level={2}>My Title</Title>
      <Text>Some text</Text>
    </div>
  );
}

export default App;
