function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

export default importAll(require.context('./assets/thumbnails', false, /\.(png|jpe?g|svg)$/));