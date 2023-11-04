import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function App() {
  const[result,setResult] = useState("")
  const handleClick = (e)=>{
    setResult(result.concat(e.target.name));

  }


const clear = (e)=>{
  setResult("")
}

const back = (e)=>{
  setResult(result.slice(0, result.length - 1));
}

const calculate = ()=>{
 try{
  setResult(eval(result).toString());
 }catch(err){
setResult('Invalid')
 }

}

  return (
    <>
       
<div className='container '>

<Form className='w-100'>

       
        <Form.Control className='box' style={{height:'90px',backgroundColor:'black', border:'none', color:'white'}} type="text" placeholder="" value={result} />
      
    </Form>

    <div className='keypad'>


<Button onClick={clear} id='clear' className='text'>Clear</Button>
<Button  onClick={back} id='back'  className='text'>C</Button>
<Button name='/'  onClick={handleClick} style={{backgroundColor:" #56cbdb"}} className='text'>&divide;</Button>
<Button style={{backgroundColor:'#262834 '}} name='7' onClick={handleClick}  className='text'>7</Button>
<Button name='8'style={{backgroundColor:'#262834 '}} onClick={handleClick}  className='text'>8</Button>
<Button name='9'style={{backgroundColor:'#262834 '}} onClick={handleClick}  className='text'>9</Button>
<Button name='*'  onClick={handleClick}  style={{backgroundColor:" #56cbdb"}}  className='text'>&times;</Button>
<Button name='4' style={{backgroundColor:'#262834 '}}  onClick={handleClick}  className='text'>4</Button>
<Button  name='5' style={{backgroundColor:'#262834 '}}  onClick={handleClick} className='text'>5</Button>

  <Button name='6' style={{backgroundColor:'#262834 '}} onClick={handleClick}  className='text'>6</Button>
  <Button name='-' onClick={handleClick}  style={{backgroundColor:" #56cbdb"}} className='text'>&ndash;</Button>
  <Button name='1' style={{backgroundColor:'#262834 '}} onClick={handleClick}  className='text'>1</Button>
  <Button name='2' style={{backgroundColor:'#262834 '}} onClick={handleClick}  className='text'>2</Button>
  <Button name='3' style={{backgroundColor:'#262834 '}} onClick={handleClick}  className='text'>3</Button>
  <Button name='+' onClick={handleClick}  style={{backgroundColor:" #56cbdb"}}  className='text'>+</Button>
  <Button name='0' style={{backgroundColor:'#262834 '}} onClick={handleClick}  className='text'>0</Button>
  <Button  name='.' style={{backgroundColor:'#262834 '}} onClick={handleClick}   className='text'>.</Button>
  <Button id='result' name='=' onClick={calculate}  style={{backgroundColor:" #56cbdb"}} className='text'>=</Button>



    </div>


</div>

    </>
  );
}

export default App;
