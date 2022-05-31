import { prop, getModelForClass } from '@typegoose/typegoose';

class Url {
  @prop({ required: true })
  public hash: string

  @prop({ required: true })
  public originalURL: string

  @prop({ required: true })
  public shortURL: string
}

export const UrlModel = getModelForClass(Url);