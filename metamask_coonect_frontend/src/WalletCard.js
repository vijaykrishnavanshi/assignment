import { useState } from "react";

const Walletcard = () => {
    const [errorMessage, setErrorMessage] = useState(null);
    const [defaultAccount, setDefaultAccount] = useState(null);
    const [userBalance, setUserBalance] = useState(null);
    const [buttonText, setButtonText] = useState("Connect");

    const walletConnectHandler = () => {
        if (window.ethereum) {
            // metamask is installed
            setErrorMessage("Metamask is Installed");
        } else {
            setErrorMessage("Install Metamask");
        }
    };
    return (
        <div className="walletCard">
            <h1>Ether Wallet</h1>
            <button onClick={walletConnectHandler}>{buttonText}</button>
            <div className="accountDisplay">
                <h4>
                    Address: <span>{defaultAccount}</span>
                </h4>
            </div>
            <div>
                <h3 className="balanceDisplay">
                    Balance: <span>{userBalance}</span>
                </h3>
            </div>
            <p className="errorDisplay">{errorMessage}</p>
        </div>
    );
};

export default Walletcard;
