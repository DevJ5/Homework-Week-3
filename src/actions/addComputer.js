export default function addComputer(newName, newDetails) {
  return {
    type: 'ADD_COMPUTER',
    payload: {
      name: newName,
      ...newDetails
    }
  };
}
