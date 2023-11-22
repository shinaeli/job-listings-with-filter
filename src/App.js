import React, { useState } from 'react'
// import { useFetchData } from './hooks/fetchHook'
import ProfileList from './components/ProfileList';
// import ErrorPage from './components/ErrorPage';
import { jobListings } from './custom data/sample_data';


const App = () => {
  // Create a state-array 'data' that will contain all job-listings data.
  const [data, setData] = useState(jobListings);
  // Create a state-array 'category' that will contain all filter-parameters provided by the user.
  const [category, setCategory] = useState([]);
  
  // Using json-server to fetch data from a resource by calling the custom hook 'useFetchData'
  // const { data, isLoading, errorMessage } = useFetchData('http://localhost:8000/allDevsDetails', {});

  // 'handleCategory' handles the filtering of jobs based on the filter-parameter provided by the user.
  const handleFilter = choice => {
    // Create a new id 'uid' for the filter-parameter 'choice'.
    let uid = new Date().getMilliseconds();
    // Assign 'choice' and 'uid' to a new object 'newChoice'.
    const newChoice = {choice, uid};
    // Create an array of values from the 'category' array which contains the categories which the user has clicked on.
    let arrayObj = Object.values(category);
    // Create an array of values by mapping through 'arrayObj'.
    // Destructure each element of the array while mapping(each element is an object).
    let choices = arrayObj.map(item => {
      const { choice } = item;
      return choice;
    });
    // Checks to confirms if a filter-parameter already exist in the 'category' array.
    if((category.length > 0) && (choices.includes(newChoice.choice))) {
      setCategory([...category]);
    } else {
      setCategory([newChoice, ...category]);
    }
    console.log(arrayObj);
    // Checks if there are job listings that matches the filter-parameter provided by the user.
    setData(data.filter(item => ((item.role == choice) || (item.level == choice) || 
    (item.languages.includes(choice)) || (item.tools.includes(choice)))));
    console.log(data);
  };

  // Delete a filter-parameter when the close button is clicked.
  const handleFilterCategory = choice => setCategory(category.filter(item => item.uid !== choice));

  // Clears out all filter-parameter.
  const handleClear = () => {
    setCategory([]);
    setData(jobListings);
  }

  //Display 'Loading...' on the screen while data is being fetched(using json-server).
  // if(isLoading) {
  //   return <div>Loading...</div>
  // }

  return (
    <div className='container'>
      <div className="header"></div>
      {(category.length > 0) && (
          <div className="category-container">
              {
                category.map(choiceItem => {
                  const { choice:item, uid } = choiceItem;
                  return (
                    <span className="category" key={uid}>
                      <p>{item}</p>
                      <img onClick={() => handleFilterCategory(uid)} 
                      className="close-btn" src="./images/icon-remove.svg" alt="" />
                    </span>
                  )
              })
              }
              {(category.length > 0) && (<button className="clear-btn" onClick={handleClear}>Clear</button>)}
          </div>
        )
      }
      <div className="main-container">
        {data && <ProfileList data={data} handleFilter={handleFilter} />}
        {/* If there was an error encountered while fetching data by using json-server,
        'errorMassage' component should be dispayed */}
        {/* {errorMessage && <ErrorPage errorMessage={errorMessage} />} */}
      </div>
    </div>
  )
}

export default App
