import Image from '../models/Image';

interface ImageReturn {
  id: number;
  url: string;
}

export default {
  render(image: Image): ImageReturn {
    return {
      id: image.id,
      url: `http://localhost:3333/uploads/${image.path}`,
    };
  },
  renderMany(image: Image[]): ImageReturn[] {
    return image.map(imageItem => this.render(imageItem));
  },
};
