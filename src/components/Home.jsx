import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import "@covalenthq/goldrush-kit/styles.css";
import {
  GoldRushProvider,
} from "@covalenthq/goldrush-kit";

import '../App.css';

const Home = () => {
    const [address, setAddress] = useState('');

    const history = useHistory();


    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    }

    const handleLookupClick = (e) => {
        e.preventDefault();

        if(address === "") {
            alert("Input a valid address to lookup");
        } else {
            console.log(address);
            history.push(`/activities/${address}`);
        }
    }

    return (
        <div className="container mt-4 mb-5">
            <GoldRushProvider apikey={process.env.REACT_APP_COVALENT_API_KEY} mode="dark" color="emerald">
                
                <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "70%" }}>
                    <div className="lineOne "></div>
                    <div className="lineTwo R"></div>

                    <div style={{ marginTop: "200px", marginBottom: "200px" }}>
                        <h2 className='mb-4' style={{ fontSize: "40px", textAlign: "center", fontWeight: "bold" }}>Crypto Intelligence Tool</h2>
                        <form className='mb-2'>
                            <div className="input-group mb-3">
                            <input onChange={handleAddressChange} style={{ height: "50px", backgroundColor: "#10172A", color: "#ffffff" }} type="text" className="form-control" placeholder="Enter Wallet Address ..." />

                            <div className="input-group-append">
                                <button onClick={handleLookupClick} className="btn btn-info">Lookup</button>
                            </div>
                            </div>
                        </form>
                        <p className='text-center mr-5 ml-5 text-light'>Unveiling Blockchain Connections & Interactions: Explore wallet interactions and token portfolios seamlessly across multiple chains with our Crypto Intelligence Tool.</p>
                    </div>

                    <div className="lineOne L"></div>
                    <div className="lineTwo R"></div>
                </div>

            </GoldRushProvider>
        </div>
    )
}

export default Home