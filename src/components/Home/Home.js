import { useEffect, useState } from 'react';
import TeamList from '../TeamList/TeamList';
import './Home.css';

const Home = () => {
    const [team, setTeam] = useState([]);
    useEffect(() => {
        const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League';
        fetch(url)
            .then(res => res.json())
            .then(data => setTeam(data.teams.slice(0, 12)))
    }, []);

    // const teamStyle = {
    //     backgroundColor: "lightgray",
    // }
    return (
        <div className='home-body'>
            <div className='banner'>
                <div className='text-center name-headline'>
                    <h1>English Premier League</h1>
                </div>
            </div>

            <div className="container" >
                <div className="row">
                    {
                        team.map(teams => <TeamList team={teams}></TeamList>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;