import "../styles/DetailItem.css";
const DetailItem = (prop) => {
    const { heading, content, id } = prop;
    return (
        <div className="detail-item" key={id}>
            <span className="heading">{heading}</span>
            <span>{content}</span>
        </div>
    );
};

export default DetailItem;
