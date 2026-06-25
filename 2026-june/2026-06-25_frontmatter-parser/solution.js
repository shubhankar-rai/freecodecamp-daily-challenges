function getValue(value) {
  if (value !== "" && !isNaN(Number(value))) {
    return Number(value);
  }
  if (value === "false" || value === "true") {
    return value === "true";
  }
  return value;
}

function parseFrontmatter(str) {
  if (typeof str !== "string") return {};

  const strObj = {};

  for (const line of str.split("\n")) {
    if (line.trim() === "---") continue;

    const colonIndex = line.indexOf(":");
    if (colonIndex === -1) continue;

    const key = line.slice(0, colonIndex).trim();
    const val = getValue(line.slice(colonIndex + 1).trim());
    strObj[key] = val;
  }

  return strObj;
}
