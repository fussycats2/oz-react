import './Card.css';

const Card = ({ children }) => {
    return (
        <div className="card">
            {children ? (
                children
            ) : (
            <>
                <h1>Card Title</h1>
                <p>Card Content</p>
            </>
            )};
        </div>
    );
};

export default Card;