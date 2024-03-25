import './App.css';
import { useState, useEffect } from 'react';

import {apiUrl, filterData} from './data';
import Header from './components/Header';
import Filter from './components/Filter';
import CardContainer from './components/CardsContainer';
import Spinner from './components/Spinner';

function App() {
  const [ courses, setCourses ] = useState([]);
  const [ loading, setLoading ] = useState(false);
  const [ apiData, setApiData ] = useState({});

  async function fetchCourses() {
    try{
      setLoading(true);

      const response = await fetch(apiUrl);
      const fetchedCourses = await response.json();

      allCourses(fetchedCourses);

    } catch(err) {

      console.log("Check Your Internet Connection");

    }
    setLoading(false);
  }

  function allCourses(fetchedCourses) {
    let Courses = [];

      Object.keys(fetchedCourses).forEach(item=>{
        Object.keys(fetchedCourses[item]).forEach(subCourses=>{
          fetchedCourses[item][subCourses].map((obj)=>{
                Courses.push(obj);
            })
        })
    })
    setCourses(Courses);
    setApiData(fetchedCourses);

  }

  useEffect(()=>{
    fetchCourses();
  },[])

  
  function handleFilter(buttonName) {
    let newCourses = []
    Object.keys(apiData).forEach(item=>{
      Object.keys(apiData[item]).forEach(subCourses=>{
        if(subCourses === buttonName) {
          newCourses = apiData[item][subCourses];
        }
      });
    })
    if(newCourses.length !== 0)
      setCourses(newCourses);
    else 
      allCourses(apiData);
  }

  return (
    <div className="wrapper">

      <div className='heading-section'>
        <Header></Header>
      </div>

      <div className='filter-section'>
        <Filter filterData={filterData} handleFilter={handleFilter}></Filter>
      </div>

      <div className='card-section'>
        {
          loading ? <Spinner></Spinner> : <CardContainer courses = { courses }  ></CardContainer>
        }
      </div>
    </div>
  )
}



export default App;

