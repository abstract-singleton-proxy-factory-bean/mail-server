/**
 * Indicates if a string is empty or not
 * @param { string } value Value to check if is empty
 * @returns { boolean } Boolean value indicating if the string is empty or not
 */
export function isEmpty(value) {
  if (!value) {
    return true
  }

  return value.length === 0
}
