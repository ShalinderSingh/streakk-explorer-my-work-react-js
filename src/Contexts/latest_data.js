import { useEffect, useState } from "react";
import { io } from "socket.io-client";

export function LatestDataProvider() {
    const [blocks, setBlocks] = useState([]);
    console.log(blocks, 'llkkkk');

    let cosmoSocket;

    // Initialize the WebSocket connection
    useEffect(() => {
        const initCosmoSocket = async (ws) => {
            if (!cosmoSocket?.status || !cosmoSocket) {
                cosmoSocket = io.connect(ws, {
                    transports: ["websocket"],
                    reconnect: true,
                });

                cosmoSocket.on("connect", () => {
                    console.log("Connected to CosmoSocket");
                });

                cosmoSocket.on("error", (error) => {
                    console.error("WebSocket Error:", error);

                });
            }
        };

        const subscribeLatestBlocksCosmo = async (cb) => {
            await initCosmoSocket("wss://ws.streakkscan.com");

            cosmoSocket.on("LATEST_BLOCK", (data) => {
                cb(data);
            });
        };

        subscribeLatestBlocksCosmo((data) => setBlocks(data));


        return () => {
            if (cosmoSocket) {
                cosmoSocket.disconnect();
                cosmoSocket = null;
                console.log("Disconnected from CosmoSocket");
            }
        };
    }, []);

    return blocks
}

