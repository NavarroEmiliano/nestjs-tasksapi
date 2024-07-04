import { Prop, Schema } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Task {
  @Prop({
    unique: true,
    required: true,
    trim: true,
  })
  title: string;

  @Prop({ trim: true })
  description: string;

  @Prop({
    default: false,
  })
  done: boolean;
}
