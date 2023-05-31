// Instructions can be found in destructuring_objects.md

export function introduction(person) {
  const personInfo = Object.entries(person);
  {
    return (
      "Hello my name is " +
      person.name +
      " and I live in " +
      person.city +
      " with " +
      person.pet
    );
  }
}
