import React from 'react';
import axios from 'axios';

const handlePost = async () => {
  try {
    const resp = await axios.post("http://localhost:3000/server", {
      fullName: this.state.fullName,
      dob: this.state.dob,
    });
    this.setState({
      userId: response.data.user_id,
      isPostSuccess: response.data.is_success,
    });
  } catch (error) {
    console.error(error);
  }
};

const handleGet = async () => {
  try {
    const response = await axios.get("http://localhost:3000/server");
    this.setState({
      operationCode: response.data.operation_code,
    });
  } catch (error) {
    console.error(error);
  }
};

const App = () => {
  return (
    <div>App</div>
  )
}

export default App