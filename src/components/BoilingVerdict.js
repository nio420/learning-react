export default function BoilingVerdict({ celsius }) {
    if (celsius === null) {
        return null; 
    }

    if (celsius >= 100) {
        return <p>The water is boiling</p>;
    } else {
        return <p>The water is not boiling</p>;
    }
}
