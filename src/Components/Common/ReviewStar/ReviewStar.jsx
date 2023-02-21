const ReviewStar = ({ starNumber, className }) => {
    const list = [];
    if (starNumber > 0) {
        var starTotal = Math.floor(starNumber);
        for (let index = 0; index < starTotal; index++) {
            list.push(
                <li key={index}>
                    <i className="fa-solid fa-star text-[#fbb71c]"></i>
                </li>
            );
        }
    }
    return (
        <ul className={`${className}`}>{list}</ul>
    )
}
export default ReviewStar;