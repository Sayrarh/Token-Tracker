import { useHistory, useParams } from "react-router-dom";

import "@covalenthq/goldrush-kit/styles.css";
import {
  GoldRushProvider,
  AddressActivityListView,
} from "@covalenthq/goldrush-kit";

const Activities = () => {
    const params = useParams();
    const { address } = params;
    const history = useHistory();

    const handleGoBack = () => {
        history.goBack();
    }

    const handleContinue = (e) => {
        e.preventDefault();
        history.push(`/wallet-assets/${address}`);
    }

    return (
        <div className="container mt-4 mb-5">
            <GoldRushProvider apikey={process.env.REACT_APP_COVALENT_API_KEY} mode="dark" color="emerald">
                <button className="btn btn-dark btn-block mb-4" onClick={handleGoBack}>Go Back</button>

                <h2 className='mb-1' style={{ fontSize: "36px", fontWeight: "bold" }}>Your address have interacted with the following chains</h2>
                <p className="mb-5">Select chains and click <strong>Continue</strong></p>
                <AddressActivityListView 
                    address={address}
                    get_all_row_selection={(e) => {
                        localStorage.setItem('chains', JSON.stringify(e));
                    }}
                />

                <button className="btn btn-info btn-block mb-4 mt-4 btn-lg" onClick={handleContinue}>Continue</button>
            </GoldRushProvider>
        </div>
    )
}

export default Activities;