import React,{useState,useEffect} from 'react';
import axios from 'axios';
import MissionsContainers from './Missions.style';

const Missions = () => {
    const [missionInfo, setMissionInfo] = useState([]);
    const [specificMissions, setSpecificMissions] = useState([]);

    useEffect(() => {
     axios.get('https://api.spaceXdata.com/v3/launches?limit=100')
     .then(res =>{
         console.log(res);
       setMissionInfo(res.data);
     })
     .catch(err => {
       console.log(err);
     })
   }, []);

 useEffect(()=>{
    setSpecificMissions(missionInfo);
 }, [missionInfo])

   const years=[
    {
      year: '2005'
    },
    {
        year: '2006'
    },
    {
        year: '2007'
    },
    {
        year: '2008'   
    },
    {
        year: '2009'
    },
    {
        year: '2010'
    },
    {
        year: '2011'
    },
    {
        year: '2012'
    },
    {
        year: '2013'
    },
    {
        year: '2014'
    },
    {
        year: '2015'
    },
    {
        year: '2016'
    },
    {
        year: '2017'
    },
    {
        year: '2018'
    },
    {
        year: '2019'
    },
    {
        year: '2020'
    },
]
const showSpecificMissions = (year) => {
    if(year !== '' || year !== undefined)
    {
    setSpecificMissions(
      missionInfo.filter((mission) => mission.launch_year === year)
    );
    }
};
console.log('a',specificMissions);
return(
    <MissionsContainers>
      <div className='years'>
        {
                years.map((y) => (
                    <button key={y.year} onClick={() => showSpecificMissions(y.year)}  className="year">{y.year}</button>
                ))
            }
            </div>
            <div className='missions'>
        { 
           specificMissions.map(
            mission => <div key={mission.mission_name} className="mission">
                      <img src={mission.links.mission_patch_small} alt="mission" />
                      <h2>{mission.mission_name}#{mission.flight_number}</h2>
                      <h2>Mission ID:{mission.mission_id}</h2>
                      <h2>Launch Year:{mission.launch_year}</h2>
                      <h2>Succesfull Launch:{mission.launch_success ? "true" : "false"}</h2>
                      <h2>Sucessfull Landing:{mission.land_success ? "true" : "false"}</h2>
                       </div>
        
        )
        }
        </div>
    </MissionsContainers>
);
};
export default Missions;