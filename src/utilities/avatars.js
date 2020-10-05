import {data} from '../reducers/data';

const images = {};

data.forEach(val => images[val.name] = import(`../assets/thumbnails/${val.name}.jpg`));

export default images;