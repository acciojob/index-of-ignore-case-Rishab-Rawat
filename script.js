function indexOfIgnoreCase(str, subStr) {
  // Convert both strings to lowercase
  const lowerStr = str.toLowerCase();
  const lowerSubStr = subStr.toLowerCase();
  
  // Use the indexOf method to find the first occurrence
  return lowerStr.indexOf(lowerSubStr);
}
