import { Circles } from "react-loader-spinner";

const Loading = () => {
    return (
        <div
            style={{
                height: "100vh",
                width: "100%",
                backgroundColor: "#002f40",
                zIndex: 10000000000,
                position: "fixed",
                top: 0,
                left: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "35px",
            }}
        >
            <Circles color="#00BFFF" height={80} width={80} />
        </div>
    );
};

export default Loading