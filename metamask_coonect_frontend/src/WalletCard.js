import { useState } from "react";
import { ethers } from "ethers";

const Walletcard = () => {
    const [errorMessage, setErrorMessage] = useState(null);
    const [defaultAccount, setDefaultAccount] = useState(null);
    const [userBalance, setUserBalance] = useState(null);
    const [buttonText, setButtonText] = useState("Connect");

    const getAccountBalance = (address) => {
        window.ethereum
            .request({ method: "eth_getBalance", params: [address, "latest"] })
            .then((res) => {
                setUserBalance(ethers.utils.formatEther(res));
            })
            .catch((err) => {
                setErrorMessage("Error in fetching balance");
            });
    };

    const walletConnectHandler = () => {
        if (window.ethereum) {
            // metamask is installed
            window.ethereum
                .request({ method: "eth_requestAccounts" })
                .then((res) => {
                    setButtonText("Disconnect");
                    setDefaultAccount(res[0]);
                    getAccountBalance(res[0]);
                })
                .catch((err) => {
                    setErrorMessage("Error in connecting account");
                });
        } else {
            setErrorMessage("Install Metamask");
        }
    };
    return (
        <div className="walletCard">
            <h1>Ether Wallet</h1>
            <button onClick={walletConnectHandler}>{buttonText}</button>
            <div className="accountDisplay">
                <span>
                    <b>Address:</b> <span>{defaultAccount}</span>
                </span>
            </div>
            <div>
                <span className="balanceDisplay">
                    <b>Balance:</b> <span>{userBalance}</span>
                </span>
            </div>
            <p className="errorDisplay">{errorMessage}</p>
        </div>
    );
};

export default Walletcard;
