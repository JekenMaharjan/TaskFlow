import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

export interface Task {
    id: number;
    title: string;
    description?: string;
    status?: string;
    priority?: string;
    due_date?: Date;
}

@Injectable()
export class TasksService {
    // This array acts as database in RAM
    private tasks: Task[] = [];
    private idCounter = 1;

    // CREATE TASK
    create(createTaskDto: CreateTaskDto): Task {
        const newTask: Task = {
            id: this.idCounter++, // Fake auto-incrementing ID
            ...createTaskDto,
        } as Task;
        this.tasks.push(newTask);
        return newTask;
    }

    // READ ALL TASKS
    findAll(): Task[] {
        return this.tasks;
    }

    // READ ONE SPECIFIC TASK
    findOne(id: number): Task {
        const task = this.tasks.find(t => t.id === id);
        if (!task) {
            throw new NotFoundException(`Task with ID ${id} not found`);
        }
        return task;
    }

    update(id: number, updateTaskDto: UpdateTaskDto) {
        return `This action updates a #${id} task`;
    }

    remove(id: number) {
        return `This action removes a #${id} task`;
    }
}
