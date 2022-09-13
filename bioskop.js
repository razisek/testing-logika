function countWatchedMovies(membership, regular) {
    let count = 1;
    let totalMembership = membership;
    let totalRegular = regular;
    let totalDiscount = 0;

    while (!(totalMembership < totalRegular)) {
        if (totalDiscount == 0) {
            totalMembership = totalMembership + regular * 0.9;
            totalDiscount += 2;
        } else if (totalDiscount > 0) {
            let discount = 0;
            for (let i = 0; i < totalDiscount; i++) {
                discount = discount != 0 ? discount * 0.9 : regular * 0.9;
            }

            totalMembership = totalMembership + discount;
            totalDiscount += 1;
        }

        totalMembership = Math.round(totalMembership);
        totalRegular += regular;
        count += 1;
    }

    return count;
}

console.log(countWatchedMovies(500000, 15000));