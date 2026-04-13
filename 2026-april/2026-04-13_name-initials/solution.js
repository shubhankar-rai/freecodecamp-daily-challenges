function getInitials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .reduce((acc, val) => acc + val[0].toUpperCase() + ".", "");
}
