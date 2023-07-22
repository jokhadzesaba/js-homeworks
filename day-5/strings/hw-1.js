function rmHtmlTags(input) {
  try {
    if (typeof input !== "string") {
      throw new Error("Input parameter must be a string.");
    }
    const htmlTagRegex = /<[^>]*>/g;
    return input.replace(htmlTagRegex, "");
  } catch (error) {
    console.log(error.message);
  }
}
