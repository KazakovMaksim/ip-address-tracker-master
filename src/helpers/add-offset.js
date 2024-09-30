export const addOffset = (map) => {
  const offsetY = map.getSize().y * 0.15;
  map.panBY([0, -offsetY], {});
};
