import Orphanage from '../models/Orphanage';
import imageView from './images_view';

export default {
  render(orphanage: Orphanage): any {
    return {
      id: orphanage.id,
      name: orphanage.name,
      latitude: orphanage.latitude,
      longitude: orphanage.longitude,
      about: orphanage.about,
      instructions: orphanage.instructions,
      whatsapp: orphanage.whatsapp,
      opening_hours: orphanage.opening_hours,
      open_on_weekends: orphanage.open_on_weekends,
      images: imageView.renderMany(orphanage.images),
    };
  },
  renderMany(orphanage: Orphanage[]): any {
    return orphanage.map(orphanageItem => this.render(orphanageItem));
  },
};
