import './App.css'
import Balance from "./components/Balance.jsx";
import Operation from "./components/Operation.jsx";
import {useState} from "react";

function App() {
    const [balance, setBalance] = useState(0);

    const withdraw = sum => setBalance(prevBalance => prevBalance >= sum ? prevBalance - sum : prevBalance);

    const deposit = sum => setBalance(prevBalance => prevBalance + sum);

    return (
        <div>
            <Balance balance={balance}/>
            <Operation deposit={deposit} withdraw={withdraw}/>
        </div>
    )
}

export default App
