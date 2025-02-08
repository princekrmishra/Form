import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { isVisible } from '@testing-library/user-event/dist/utils';



function App() {
  
  // const[firstName, setFirstName] = useState("");
  // const[lastName, setLastName] = useState("");

  // console.log(firstName);
  // console.log(lastName);
  // function changeFirstNameHandler(event){
  //   //console.log("Printing first name")
  //   //console.log(event.target.value);
  //   setFirstName(event.target.value);
  // }

  // function changelastNameHandler(event){
  //   //console.log("Printing last name")
  //   //console.log(event.target.value);
  //   setLastName(event.target.value);
  // }

  const [formData, setFormData] = useState({firstName:"", lastName:"", email:"", comments:"", isVisible:true, mode:"", favCar:""});
  //console.log(formData.email);
  console.log(formData)
  function changeHandler(event){
   const{name, value, checked, type} = event.target
    setFormData(prevFormData => {
      return{
        ...prevFormData,
        [name] :type === "checkbox" ? checked : value
      }
    });
  }

  function submitHandler(event){
    event.preventDefault();
    //print
    console.log("FInally priting the entire data: ")
    console.log(formData)
  }
  
  return (
    <div className="App">

      <form onSubmit={submitHandler}>
        <input
        type="test"
        placeholder='first name'
        onChange={changeHandler}
        name="firstName"
        value={formData.firstName}  //controlled components
        /> 
        
<br></br>
<br/>
        <input
        type="text"
        placeholder='last name'
        onChange={changeHandler}
        name="lastName"
        value={formData.lastName} //controlled components
        />

<br></br>
<br/>
        <input
        type="email"
        placeholder='Enter your email here'
        onChange={changeHandler}
        name="email"
        value={formData.email}  //controlled components
        />

        <br></br>
        <br/>
        <textarea
        placeholder='Enter your comments here'
        onChange={changeHandler}
        name='comments'
        value={formData.comments}
        />
        <br/>
        <br/>
        <input
        type="checkbox"
        onChange={changeHandler}
        name="isVisible"
        id='isVisible'
        checked={formData.isVisible}
        />
      
        <label htmlFor='isVisible'>Am I visible ?</label>
        <br/>
        <br/>
        <fieldset>
          <legend>Mode: </legend>
          <input
        type="radio"
        onChange={changeHandler}
        name='mode'
        value="Online-Mode"
        id="Online-Mode"
        checked={formData.mode === "Online-Mode"}
        />

    <label htmlFor='Online-Mode'>Online-Mode</label>

    <input
        type="radio"
        onChange={changeHandler}
        name='mode'
        value="Offline-Mode"
        id="Offline-Mode"
        checked={formData.mode === "Offline-Mode"}
        />

    <label htmlFor='Offine-Mode'>Offline-Mode</label>

    {/* <input
        type="radio"
        onChange={changeHandler}
        name='modex'
        value="Offline-Mode"
        id="Offline-Mode"
        />

    <label htmlFor='Offine-Mode'>Offline-Mode</label> */}

        </fieldset>


        <label htmlFor='favcar'>Tell me your favorite car </label>
        <select
          onChange={changeHandler}
          name="favCar"
          id="favCar"
          value={formData.favCar}
          >

            <option value="scorpio">Scorpio</option>
            <option value="fortuner">Fortuner</option>
            <option value="thar">Thar</option>
            <option value="Defender">Defender</option>

        </select>

        {/* <input
        type='submit'
        value='submit'
        /> */}

        <br/>
        <br/>
        <button>Submit</button>

      </form>
    </div>
  );
}

export default App;