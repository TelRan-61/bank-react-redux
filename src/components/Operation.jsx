import {useState} from "react";
import {deposit, withdraw} from "../actions/accountActions.js";
import {useDispatch} from "react-redux";

const Operation = () => {
    const [sum, setSum] = useState(0);
    const dispatch = useDispatch();

    return (
        <div className={'flex justify-center'}>
            <button
                className={'bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg rounded-lg py-2 px-4'}
                onClick={() => dispatch(withdraw(sum))}>Withdraw</button>
            <input
                className={'text-center border rounded-lg text-white text-lg font-bold'}
                type="number"
                onChange={e => setSum(+e.target.value)}
                value={sum}
            />
            <button
                className={'bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg rounded-lg py-2 px-4'}
                onClick={() => dispatch(deposit(sum))}>Deposit</button>
        </div>
    );
};

export default Operation;