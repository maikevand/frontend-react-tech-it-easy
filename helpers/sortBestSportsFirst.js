export function bestSportsFirst(tvs) {
    tvs.sort((a, b) => b.refreshRate - a.refreshRate);
    return tvs;
}