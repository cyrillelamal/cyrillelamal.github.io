const rgb = (r=255, g=255, b=255) => {
    return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
}


const heron = (a, b , c) => {
    const p = 0.5 * (a + b + c);
    return Math.sqrt(p * (p - a) * (p - b) * (p - c));
}


const f2c = (d) => {
    return (d - 32) / 1.8;
}
