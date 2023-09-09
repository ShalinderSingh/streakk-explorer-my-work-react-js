const BASE_URL_EXPLORER_NEW = window.env.REACT_APP_EXPLORER_URL_NEW;

const BASE_URL_SOCKET_MAIN = window.env.REACT_APP_BASE_URL_SOCKET_MAIN;

const BASE_URL_EXPLORER_MAIN = window.env.REACT_APP_EXPLORER_URL_MAIN;

const BASE_URL_APP = window.env.REACT_APP_BASE_URL;

const IPADDRESS_URL = window.env.REACT_APP_IP_ADDRESS_URL;

const BASE_URL_SOCKET = window.env.REACT_APP_BASE_URL_SOCKET;

const BASE_URL_EXPLORER_VALIDATOR = window.env.REACT_APP_EXPLORER_VALIDATOR;

const BASE_URL_DECIMAL_PLACES = window.env.REACT_APP_DECIMAL_PLACES;

const EVM_SOCKET_SERVICE = window.env.REACT_APP_EVM_SOCKET_URL;

const EVM_WRITE_SERVICE = window.env.REACT_APP_EXPLORER_URL_NEW;

//3.132.5.129 :: staging ip

//10.1.5.97

//https://ws-gemma.stage-gxt.com/socket
//http://3.132.5.129:3002

const NETWORKS_AVIALABLE = ["Test Network", "EVM Network"];

const NETWORKS_AVAILABLE_LABEL = ["STREAKK BLOCKCHAIN EXPLORER - TESTNET"];

const SkeltonProps = {
    baseColor: "#2B2A31",
    highlightColor: "#36343D",
    borderRadius: "0rem",
    duration: 1,
    height: 27,
};
const secretPass = "bICTZxCpya";

export {
    // TransactionTableHeaders,
    // TransactionsByBlockHeader,
    // BlocksTableHeaders,
    // DefaultOffset,
    // DefaultLimit,
    BASE_URL_EXPLORER_VALIDATOR,
    BASE_URL_EXPLORER_NEW,
    BASE_URL_EXPLORER_MAIN,
    IPADDRESS_URL,
    BASE_URL_SOCKET,
    BASE_URL_SOCKET_MAIN,
    BASE_URL_APP,
    NETWORKS_AVIALABLE,
    // TransactionsInBlockDetail,
    // LimitTen,
    SkeltonProps,
    // RecentBlockTableHdr,
    // TransactionsAddressHeader,
    NETWORKS_AVAILABLE_LABEL,
    BASE_URL_DECIMAL_PLACES,
    EVM_SOCKET_SERVICE,
    EVM_WRITE_SERVICE,
    secretPass,
};