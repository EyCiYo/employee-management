import Navbar from "../components/Navbar";

const Home = () => {
    return (
        <div
            style={{
                height: "100dvh",
            }}
        >
            <Navbar />
            <div
                style={{
                    width: "100%",
                    height: "calc(100% - 70px)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                }}
            >
                <h3
                    style={{
                        fontSize: "30px",
                        color: "red",
                    }}
                >
                    KeyValue
                </h3>
                <h1
                    style={{
                        fontSize: "72px",
                    }}
                >
                    Employee Application
                </h1>
            </div>
        </div>
    );
};

export default Home;
