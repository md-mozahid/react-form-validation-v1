export const GetClasses = (classes) =>
  classes
    .filter((item) => item !== '')
    .join(' ')
    .trim()
