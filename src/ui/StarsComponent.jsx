import styled from "styled-components";

import { IoStar } from "react-icons/io5";
import { IoStarHalf } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";

const StarsBox = styled.div`
  width: max-content;
  display: flex;
  /* background-color: red; */
  gap: 0.3rem;

  padding: 0.5rem;

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-stars);
  }
`;

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

  console.log(starArr);

  //   const stars = starArr.map((val, i) => {
  //     return <div key={i}
  //       className={style.starBox}
  //       style={{background: `linear-gradient(90deg, #ff643d
  //       ${val * 100}%, #bbbac0 ${val * 100}%)`}}>★</div>
  //     })

  return (
    <StarsBox>
      {starArr.map((star, i) => {
        return (
          <div key={i}>
            {star === 1 && <IoStar />}
            {star < 1 && star > 0 && <IoStarHalf />}
            {star === 0 && <IoStarOutline />}
          </div>
        );
      })}
    </StarsBox>
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
