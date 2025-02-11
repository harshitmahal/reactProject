import { useState } from "react"

export function Login() {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");


    async function handleSubmit() {
        console.log("Submitted!");
        if (userName !== "" && password !== "") {


            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                const data = await response.json();
                for (let i = 0; i < data.length; i++) {
                    if (data[i].username === userName) {
                        console.log(data[i]);
                    }
                }
            } catch (e) { console.log(e) }
        } else {
            console.log("Please enter both username and password!")
        }
    }


    return (
        <div>
            <div>
                Username:
                <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
            </div>
            <div>
                Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button onClick={handleSubmit}>Login</button>
        </div>
    )

}