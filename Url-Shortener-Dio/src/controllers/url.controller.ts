import { Request, Response } from 'express'
import { UrlModel } from '../models/url.model';
import shortid from 'shortid';
import { config } from '../config/constants';

class UrlController {
  async shorten(req: Request<{}, {}, { originalURL: string }>, res: Response):
    Promise<void> {
    const { originalURL } = req.body;

    const url = await UrlModel.findOne({
      originalURL
    })

    if (url) {
      res.json(url);
      return;
    }

    const hash = shortid.generate();
    const shortURL = `${config.API_URL}/${hash}`;
    const newURL = await UrlModel.create({
      hash,
      shortURL,
      originalURL
    });

    res.json(newURL);
  }

  async redirect(req: Request<{ hash: string }>, res: Response):
    Promise<void> {
    const { hash } = req.params;

    const url = await UrlModel.findOne({ hash });

    if (url) {
      res.redirect(url.originalURL);
      return;
    }

    res.status(400).json({ error: 'URL not found' })
  }
}

export default new UrlController();