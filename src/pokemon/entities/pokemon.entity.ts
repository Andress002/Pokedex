import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Pokemon extends Document {
  @Prop({
    unique: true,
    index: true, //para saber especificamente donde esta el elemento que se esta buscando
  })
  name: string;

  @Prop({
    unique: true,
    index: true,
  })
  no: number;
}

export const PokemonSchema = SchemaFactory.createForClass(Pokemon); //convierte la clase
//pokemon en un esquema de Mongoose que luego puedes usar para interactuar con la base de datos.
