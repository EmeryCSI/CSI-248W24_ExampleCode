function MyList(props) {
  // log the numbers to the console
  //console.log(props.numbers);
  props.numbers.forEach((number) => console.log(number));
  return (
    <ul>
      {/* printed our the numbers by using the index */}
      {/* <li>{props.numbers[0]}</li>
      <li>{props.numbers[1]}</li>
      <li>{props.numbers[2]}</li> */}
      {/* the map() function */}
      {/* its kind of like a foreach() */}
      {/* map() lets you take an array of one type
      and turn it into an array of another type
       using a callback function */}
      {props.numbers.map((number) => (
        <li>{number}</li>
      ))}
    </ul>
  );
}

export default MyList;
