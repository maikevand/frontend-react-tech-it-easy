export function cheapestFirst(tvs) {
    tvs.sort((a, b) => a.price - b.price);
    return tvs;
}