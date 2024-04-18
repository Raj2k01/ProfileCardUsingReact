function User(props){
    return <div className="card-container">
        <span className={props.online ? "profile online":"profile offline"}>{props.online ? "ONLINE":"OFFLINE"}</span>
        <img src={props.profile}className="img"/>
        <h3>{props.name}</h3>
        <h3>{props.city}</h3>
        <p>{props.description}</p>
        <div className="buttons">
            <button className="primary">Message</button>
            <button className="primary outline">Following</button>
        </div>
        <div className="skills">
            <h6>Skills</h6>
            <ul>
                {props.skills.map((skill,index)=>(<li key={index}>{skill}</li>))}
            </ul>
        </div>
    </div>
}

export const UserCard = () => {
  return (
        <User name="Capybara" city="SouthAmerica" skills={["UI/UX","Front-end Development","HTML","CSS","Javascript","React","NodeJS"]} description="Capy-a-slay" online={true} profile="images/capybara.jpg" />
  )
}
