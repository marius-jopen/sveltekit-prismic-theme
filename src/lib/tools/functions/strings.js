export function titleCase (str) {
  return str.replace(
    /\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}

export function kebabCase (str) {
  return str.replaceAll(' ', '-')
}

export function unKebabCase (str) {
  return str.replaceAll('-', ' ')
}

/** Make an array with all case versions for the given string */
export function makeCases (str) {
  return [
    unKebabCase(titleCase(str)),
    unKebabCase(str.toLowerCase()),
    unKebabCase(str.toUpperCase())
  ]
}