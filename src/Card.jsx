const Card = (prop) => {
    console.log(prop);

    return (
        <div
            style={{
                padding: "1rem",
                borderRadius: "5px",
                background: "green",
                color: "white",
                minWidth: "100px",
                textAlign: "center",
            }}
        >
            {prop.text}
        </div>
    );
};

export default Card;
