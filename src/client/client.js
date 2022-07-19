import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';

ReactDOM.hydrate(<Home />, document.querySelector('#root'))

// const client = () => {
//   return (
//     <div>
//         <button onClick={()=> console.log('this is console.log')}>Click on me</button>
//     </div>
//   )
// }

// export default client