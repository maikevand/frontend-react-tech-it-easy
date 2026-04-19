export function mostSoldFirst(tvs) {
    tvs.sort((a, b) => b.sold - a.sold);
    return tvs;
}
