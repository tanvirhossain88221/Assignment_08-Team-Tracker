import React, { useEffect, useState } from 'react';
import './TeamDetail.css';
import { useParams } from 'react-router';
import maleImg from '../../img/male.png';
import feMaleImg from '../../img/female.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMapMarkerAlt,
    faFlag,
    faFutbol,
    faVenusMars,

} from '@fortawesome/free-solid-svg-icons';
import twitterLogo from '../../img/Twitter.png';
import facebookLogo from '../../img/Facebook.png';
import youtubeLogo from '../../img/YouTube.png';

const TeamDetail = () => {
    const { idTeam } = useParams();
    const [teamDetails, setTeamDetails] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTeamDetails(data.teams[0]))
    }, [idTeam]);
    const { strTeam, strCountry, strSport, strGender, intFormedYear, strTeamLogo, strDescriptionEN, strFacebook, strTwitter, strYoutube } = teamDetails;

    return (
        <div className='background'>
            <div className='banner'>

                <div className='text-center'>
                    <img
                        className='my-5 team-logo'
                        src={strTeamLogo}
                        alt='Team Logo'
                    />
                </div>
            </div>

            <div className='container'>
                <div className='card mb-3 bg-success my-3 details'>
                    <div className='row no-gutters p-1'>
                        <div className='col-md-8'>
                            <div className='card-body'>
                                <h4 className='card-title text-white font-weight-bold'>
                                    {strTeam}
                                </h4>
                                <p className='card-text text-white font-weight-bold'>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                            Founded: {intFormedYear}
                                </p>
                                <p className='card-text text-white font-weight-bold'>
                                    <FontAwesomeIcon icon={faFlag} /> Country:
                                {strCountry}
                                </p>
                                <p className='card-text text-white font-weight-bold'>
                                    <FontAwesomeIcon icon={faFutbol} /> Sport
                            Type: {strSport}
                                </p>
                                <p className='card-text text-white font-weight-bold'>
                                    <FontAwesomeIcon icon={faVenusMars} />
                            Gender: {strGender}
                                </p>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            {strGender === 'Male' ? (
                                <img
                                    className='conditional-image'
                                    src={maleImg}
                                    alt='Male'
                                />
                            ) : (
                                <img
                                    className='conditional-image'
                                    src={feMaleImg}
                                    alt='Female'
                                />
                            )}
                        </div>
                    </div>
                </div>
                <div>
                    <p className='card-text text-white'>{strDescriptionEN}</p>
                    <div className='text-center'>
                        <a
                            href={strTwitter}
                            target='_blank'
                            rel='noreferrer'>
                            <img
                                className='social-icon'
                                src={twitterLogo}
                                alt='Twitter'
                            />
                        </a>
                        <a
                            href={strFacebook}
                            target='_blank'
                            rel='noreferrer'>
                            <img
                                className='social-icon'
                                src={facebookLogo}
                                alt='Facebook'
                            />
                        </a>
                        <a
                            href={strYoutube}
                            target='_blank'
                            rel='noreferrer'
                        >
                            <img
                                className='social-icon'
                                src={youtubeLogo}
                                alt='YouTube'
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div >
    );
};


export default TeamDetail;