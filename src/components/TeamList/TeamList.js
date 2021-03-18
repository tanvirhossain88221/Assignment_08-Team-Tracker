import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'

const TeamList = (props) => {
    const { strTeam, strSport, strTeamBadge, idTeam } = props.team;
    return (
        <div className="col-md-4 g-4">
            <div className="py-3">
                <div >
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={strTeamBadge} />
                        <Card.Body>
                            <Card.Title>{strTeam}</Card.Title>
                            <Card.Text>Sports type: {strSport}</Card.Text>
                            <Link to={`/team/${idTeam}`}><Button variant="success">Team Details <FontAwesomeIcon icon={faAngleDoubleRight} /></Button></Link>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default TeamList;