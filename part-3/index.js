const App = () => {
    return (
        <div>
            <Person
                name="JSON"
                age={20}
                hobbies={
                    [
                        "Delivering information",
                        "Verifying people",
                        "Encoding and Decoding messages"
                    ]
                } />

            <Person
                name="Svelte"
                age={4}
                hobbies={
                    [
                        "Coloring things in",
                        "Organizing things to look pretty",
                        "Showing off to people."
                    ]
                }
            />
        </div>
    );
}

ReactDOM.render(<App />,
    document.getElementById("root"));