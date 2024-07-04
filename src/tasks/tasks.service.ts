import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from 'src/schemas/tasks.schema';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}

  findAll() {
    this.taskModel.find();
  }

  async create(createTask: any) {
    const newTask = new this.taskModel(createTask);
    await newTask.save();
    return newTask;
  }

  async findOne(id: string) {
    return this.taskModel.findById(id);
  }
  async delete(id: string) {
    return this.taskModel.findByIdAndDelete(id);
  }

  async update(id: string, task: any) {
    return this.taskModel.findByIdAndUpdate(id, task);
  }
}
