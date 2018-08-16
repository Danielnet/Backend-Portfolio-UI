import React from 'react';

const pStyle = {
  fontSize: '15px',
  textAlign: 'center',
  border:'1px solid black',
  margin:'5px'
};

const SmallDisplay= (props) =>
 <div style={pStyle}>

  { props.data ?  <div><h1>{props.data.h1}</h1><h2>{props.data.p}</h2></div> :
   "no data" }


</div>;

export default SmallDisplay;
