const App = () => {
    return (
        <div>
            <Tweet
                username="EcmaScripp"
                date="03-03-03"
                body="Wait... what's a tweet?"
                name="ECMA"
            />
            <Tweet
                username="JaysSon"
                date="02-02-02"
                body="Check it OUT!!! I'M ALIVE!!!"
                name="JSON"
            />
            <Tweet
                username="JaysSon"
                date="01-01-01"
                body="I won't be created for another 4 months"
                name="JSON"
            />
            <Tweet
                username="EcmaScripp"
                date="12-12-00"
                body="I feel like something big is about to happen..."
                name="ECMA"
            />

        </div>
    );
}

ReactDOM.render(<App />,
    document.getElementById("root"));