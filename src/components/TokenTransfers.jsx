import { useHistory, useParams } from "react-router-dom";

import "@covalenthq/goldrush-kit/styles.css";
import {
  GoldRushProvider,
  TokenTransfersListView,
} from "@covalenthq/goldrush-kit";

const TokenTransfers = () => {
    const params = useParams();
    const { address, token } = params;
    const history = useHistory();

    const handleGoBack = () => {
        history.goBack();
    }

    return (
        <div className="container mt-4 mb-5">
            <GoldRushProvider apikey={process.env.REACT_APP_COVALENT_API_KEY} mode="dark" color="emerald">
                <button className="btn btn-dark btn-block mb-4" onClick={handleGoBack}>Go Back</button>

                <h2 className='mb-4' style={{ fontSize: "36px", fontWeight: "bold" }}>Token transfer history of your address.</h2>

                <TokenTransfersListView
                    chain_name="eth-mainnet"
                    address={address}
                    contract_address={token}
                />
            </GoldRushProvider>
        </div>
    )
}

export default TokenTransfers