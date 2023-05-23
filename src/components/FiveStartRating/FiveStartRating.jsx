import { StarFill, StarHalf, Star as StarEmtpy } from "react-bootstrap-icons";

export function FiveStartRating({ rating }) {
  // Declare star icon array
  const starList = [];

  // Store number of filled stars
  const starFillCount = Math.floor(rating);

  // Store if yes or no there is a haft star
  const hasHalfStar = rating - parseInt(rating) >= 0.5;

  // Store the number of empty stars
  const emptyStarCount = 5 - starFillCount - (hasHalfStar ? 1 : 0);

  // Push the filled star icons
  for (let i = 1; i <= starFillCount; i++) {
    starList.push(<StarFill key={"star-fill" + i} />);
  }

  // Push an half star icon if necessary
  if (hasHalfStar) {
    starList.push(<StarHalf key="star-half" />);
  }

  // Push the empty star icons
  for (let i = 1; i <= emptyStarCount; i++) {
    starList.push(<StarEmtpy key={"star-empty" + i} />);
  }

  // Render the star icon array
  return <div>{starList}</div>;
}
