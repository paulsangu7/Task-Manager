export function paginate(array, page, limit) {
  const start = (page - 1) * limit;
  const end = page * limit;
  return array.slice(start, end);
}
