// import { io } from "socket.io-client";

// let polkaSocket = null; // Initialize as null initially
// let evmSocket;

// export const initPolkaSocket = async (ws) => {
//     if (!polkaSocket) {
//         polkaSocket = io(ws, {
//             transports: ["websocket"],
//             reconnection: true, // It's "reconnection" not "reconnect"
//         });

//         polkaSocket.on("connect", () => {
//             console.log("Connected to PolkaSocket");
//         });
//     }
// };

// export const initEvmSocket = async (ws) => {
//     polkaSocket?.disconnect();

//     if (!evmSocket) {
//         evmSocket = io.connect(ws, {
//             transports: ["websocket"],
//             reconnect: true,
//         });
//         evmSocket.on("connect", () => {
//             console.log("Connected to evmSocket");
//         });
//     }
// };

// export const disconnectPolkaSocket = () => {
//     if (polkaSocket) {
//         polkaSocket.disconnect();
//         polkaSocket = null; // Reset the socket to null when disconnected
//         console.log("Disconnected from PolkaSocket");
//     }
// };
// export const disconnectEvmSocket = () => {
//     if (evmSocket) {
//         evmSocket.disconnect();
//         evmSocket = null;
//         console.log("Disconnected from evm socket.");
//     }
// };


// export const subscribeLatestBlocksPolka = (cb) => {
//     if (polkaSocket) {
//         polkaSocket.on("LATEST_BLOCK", (data) => {
//             console.log(data, "DATDATATDTADATA");
//             cb(data);
//         });
//     }
// };

// export const subscribeLatestBlocksEvm = (cb) => {
//     if (evmSocket) {
//         evmSocket.on("LATEST_BLOCK", (data) => {
//             console.log(data, "DATDATATDDTA")
//             cb(data);
//         });
//     };
// };
