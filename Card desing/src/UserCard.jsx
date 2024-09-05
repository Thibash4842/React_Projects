import React from 'react';
import './UserCard.css';
import PropTypes from 'prop-types';
import img1 from './asserts/photo1.jpeg';
import img2 from './asserts/photo2.jpeg';
import img3 from './asserts/photo3.jpeg';

const userData = [
    {
        name: "Antony",
        city: "New York",
        discreption: "Front End Developer",
        skill: ["HTML & CSS", "Bootstrap", "Javascript", "React JS", "Java & SQL", "GitHub"],
        online: true,
        profile: img1,
    },
    {
        name: "Sharuk",
        city: "Munbai",
        discreption: "Back End Developer",
        skill: ["Java", "SpringBoot", "Maven", "Tomcat", "Api", "GitHub"],
        online: false,
        profile: img2,
    },
    {
        name: "Gunak",
        city: "Austrelia",
        discreption: "Web Developer",
        skill: ["UI UX", "Html", "CSS", "Javascript", "node js", "php", "sql","GitHub"],
        online: true,
        profile: img3,
    },
    {
        name: "Sharuk",
        city: "Munbai",
        discreption: "Back End Developer",
        skill: ["Java", "SpringBoot", "Maven", "Tomcat", "Api", "GitHub"],
        online: false,
        profile: img2,
    },
]

function User(props) {
    return (
        <div className='card-container'>
            <span className={props.online ? 'pro online' : 'pro offline'}>{props.online ? "ONLINE" : "OFFLINE"}</span>
            <img src={props.profile} alt="user1" />
            <h3>{props.name}</h3>
            <h4>{props.city}</h4>
            <p>{props.discreption}</p>
            <div className='buttons'>
                <button>Message</button>
                <button className='outline'>Following</button>
            </div>
            <div className='skills'>
                <h5>Skills</h5>
                <ul>
                    {props.skills.map((skill, index) => (<li key={index}>{skill}</li>))}
                </ul>
            </div>
        </div>
    )
}

const UserCard = () => {
    return (
        <div className='container'>
            {/* <h2>User Card</h2> */}
            {/* <User profile={img1} name="Antony" city="New York" discreption="Front End Developer" skills={["HTML & CSS","Bootstrap","Javascript","React JS","Java & SQL","GitHub"]} online={false}/> */}
            {
                userData.map((user, index) => (<User key={index} name={user.name} city={user.city} discreption={user.discreption} skills={user.skill} online={user.online} profile={user.profile} />))
            }
        </div>
    )
}

export default UserCard;
userData.propTypes={
    name:PropTypes.string.isRequired,
    city:PropTypes.string.isRequired,
    discreption:PropTypes.string.isRequired,
    skills:PropTypes.string.isRequired,
    online:PropTypes.bool.isRequired,
    profile:PropTypes.string.isRequired,
};