import { IoStar } from "react-icons/io5";
import { IoStarHalf } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";

/*eslint-disable react/prop-types */
function StarsComponent({ starAverage }) {
  const fullStars = Math.floor(starAverage);

  const starArr = [];

  for (let i = 1; i <= fullStars; i++) starArr.push(1);

  if (starAverage < 5) {
    const partialStar = starAverage - fullStars;

    starArr.push(partialStar);

    const emptyStars = 5 - starArr.length;

    for (let i = 1; i <= emptyStars; i++) {
      starArr.push(0);
    }
  }

  //   const stars = starArr.map((val, i) => {
  //     return <div key={i}
  //       className={style.starBox}
  //       style={{background: `linear-gradient(90deg, #ff643d
  //       ${val * 100}%, #bbbac0 ${val * 100}%)`}}>★</div>
  //     })

  return (
    <>
      {starArr.map((star, i) => {
        if (star > 1) {
          <IoStar key={i} />;
        } else if (star < 1 && star > 0) {
          <IoStarHalf key={i} />;
        } else if (star === 0) {
          <IoStarOutline key={i} />;
        }
      })}
    </>
  );
}

export default StarsComponent;

/*
const fullStars = Math.floor(starAverage);
  // Gets the number of full stars. starAverage is the rating, for example 
  // if the rating were 4.3, fullStars would now be 4.

const starArr = [];
  // Create an empty array. We will add 1s, 0s, and a decimal value for the 
  // partial star.

for(let i = 1; i <= fullStars; i++)
{
  starArr.push(1);
}
  // This adds a 1 to the array for each full star in our rating

if(starAverage < 5) {
  // Wrapped in an if block because the following only needs to occur if 
  // it's not a full 5.

  const partialStar = starAverage - fullStars;
    // Calculates the partial star. For example 4.3 - 4 = 0.3. 0.3 will get 
    // added to the array in the next line to represent the partial star

  starArr.push(partialStar);
    // Adds the partial star to the array

  const emptyStars = 5 - starArr.length;
    // Calculates the number of empty stars

  for(let i=1; i<=emptyStars; i++) {
    starArr.push(0);
  }
    // This for loop adds 0s to the array to represent empty stars
}

const stars = starArr.map((val, i) => {
  return <div key={i} 
    className={style.starBox} 
    style={{background: `linear-gradient(90deg, #ff643d 
    ${val * 100}%, #bbbac0 ${val * 100}%)`}}>★</div>
  })
  // This last block is explained in the following paragraphs below
*/
