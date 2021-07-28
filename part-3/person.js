const Person = (props) => {
    const message = props.age > 17 ? "Please go vote!" : "You must be 18"
    return (
        <p>
            <h2>Learn some information about this person.</h2>
            <hr />
            {props.name} is {props.age} years old.
            <h3> Voter status: {message} </h3>

            <h3> Hobbies: </h3>
            <ul>
                {props.hobbies.map(h =>
                (
                    <li> {h} </li>
                )
                )}
            </ul>

        </p>
    )
}