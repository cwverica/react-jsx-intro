const Tweet = ({ username, name, date, body }) => {
    return (
        <div>
            <h3>On {date}, {name} tweeted: </h3>
            <p> {body} </p>
            <a href="#">@{username}</a>
        </div>
    );
};