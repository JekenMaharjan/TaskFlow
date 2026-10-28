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

    // UPDATE SPECIFIC TASK
    update(id: number, updateTaskDto: UpdateTaskDto): Task {
        const task = this.findOne(id);
        if (!task) {
            throw new NotFoundException(`Task with ID ${id} not found`);
        }
        const taskIndex = this.tasks.findIndex((t) => t.id === id);
        const updatedTask = {
            ...task,
            ...updateTaskDto,
        } as Task;
        this.tasks[taskIndex] = updatedTask;
        return updatedTask;
    }

    remove(id: number) {
        return `This action removes a #${id} task`;
    }
}
