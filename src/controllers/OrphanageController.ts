/* eslint-disable camelcase */
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as yup from 'yup';
import orphanagesViews from '../views/orphanages_view';

import Orphanage from '../models/Orphanage';

export default {
  async index(request: Request, response: Response): Promise<any> {
    const orphanagesRepository = getRepository(Orphanage);

    const orphanages = await orphanagesRepository.find({
      relations: ['images'],
    });

    return response.json(orphanagesViews.renderMany(orphanages));
  },

  async show(request: Request, response: Response): Promise<any> {
    const { id } = request.params;
    const orphanagesRepository = getRepository(Orphanage);

    const orphanage = await orphanagesRepository.findOneOrFail(id, {
      relations: ['images'],
    });

    return response.json(orphanagesViews.render(orphanage));
  },

  async create(request: Request, response: Response): Promise<any> {
    const {
      name,
      latitude,
      longitude,
      about,
      instructions,
      whatsapp,
      opening_hours,
      open_on_weekends,
    } = request.body;

    const orphanagesRepository = getRepository(Orphanage);

    const requestImages = request.files as Express.Multer.File[];

    const images = requestImages.map(image => {
      return { path: image.filename };
    });

    const data = {
      name,
      latitude,
      longitude,
      about,
      instructions,
      whatsapp,
      opening_hours,
      open_on_weekends : open_on_weekends === 'true',
      images,
    };
    const schema = yup.object().shape({
      name: yup.string().required(),
      latitude: yup.number().required(),
      longitude: yup.number().required(),
      about: yup.string().required().max(300),
      instructions: yup.string().required(),
      whatsapp: yup.string().required(),
      opening_hours: yup.string().required(),
      open_on_weekends: yup.boolean().required(),
      images: yup.array(
        yup.object().shape({
          path: yup.string().required(),
        }),
      ),
    });

    await schema.validate(data, { abortEarly: false });

    const orphanage = orphanagesRepository.create(data);

    await orphanagesRepository.save(orphanage);

    return response.status(201).json(orphanage);
  },
};
