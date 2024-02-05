export function getNestedError(errors, path) {
  return path.split('.').reduce((acc, key) => acc && acc[key], errors);
}