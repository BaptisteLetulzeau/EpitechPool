export function objectsDeeplyEqual(cmp1, cmp2) {
    if (cmp1 === cmp2) {
        return true;
    }

    if (typeof cmp1 !== 'object' || cmp1 === null || typeof cmp2 !== 'object' || cmp2 === null) {
        return false;
    }

    const key_cmp1 = Object.keys(cmp1);
    const key_cmp2 = Object.keys(cmp2);

    if (key_cmp1.length !== key_cmp2.length) {
        return false;
    }

    for (const key of key_cmp1) {
        if (!key_cmp2.includes(key) || !objectsDeeplyEqual(cmp1[key], cmp2[key])) {
            return false;
        }
    }

    return true;
}