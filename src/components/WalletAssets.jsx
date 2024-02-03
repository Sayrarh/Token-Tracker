import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "@covalenthq/goldrush-kit/styles.css";
import {
  GoldRushProvider,
  TokenBalancesListView,
} from "@covalenthq/goldrush-kit";

const WalletAssets = () => {
    const params = useParams();
    const { address } = params;
    const history = useHistory();

    const [chains, setChains] = useState([]);

    const handleGoBack = () => {
        history.goBack();
    }

    useEffect(() => {
        setChains(JSON.parse(localStorage.getItem('chains')))
    }, []);

    const handleTransferClick = (e) => {
        history.push(`/token-transfers/${address}/${e}`);
    }

    return (
        <div className="container mt-4 mb-5">
            <GoldRushProvider apikey={process.env.REACT_APP_COVALENT_API_KEY} mode="dark" color="emerald">
                <button className="btn btn-dark btn-block mb-4" onClick={handleGoBack}>Go Back</button>

                <h2 className='mb-4' style={{ fontSize: "36px", fontWeight: "bold" }}>Your wallet address has the following tokens:</h2>

                <TokenBalancesListView
                    chain_names={chains.length > 0 ? chains.map(({ name }) => name) : ["eth-mainnet"]}
                    address={address}
                    on_transfer_click={(e) => {
                        handleTransferClick(e)
                    }}
                />
            </GoldRushProvider>
        </div>
    )
}

export default WalletAssets