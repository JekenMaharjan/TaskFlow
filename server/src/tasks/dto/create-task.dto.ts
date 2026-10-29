import { IsDateString, IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

// Define TaskStatus enum
export enum TaskStatus {
    BACKLOG = 'BACKLOG',
    TO_DO = 'TO_DO',
    IN_PROGRESS = 'IN_PROGRESS',
    REVIEW = 'REVIEW',
    DONE = 'DONE',
}

// Define TaskPriority enum
export enum TaskPriority {
    LOW = 'LOW',
    MEDIUM = 'MEDIUM',
    HIGH = 'HIGH',
    URGENT = 'URGENT',
}

// Define DTO
export class CreateTaskDto {
    @IsString()
    @MinLength(3)
    @MaxLength(100)
    @IsNotEmpty()
    readonly title: string;

    @IsString()
    @MinLength(5)
    @MaxLength(1000)
    @IsOptional()
    readonly description?: string;

    @IsEnum(TaskStatus)
    @IsOptional()
    readonly status?: TaskStatus = TaskStatus.BACKLOG; // Set default value

    @IsEnum(TaskPriority)
    @IsOptional()
    readonly priority?: TaskPriority = TaskPriority.LOW; // Set default value

    @IsDateString()
    @IsOptional()
    readonly due_date?: string; // Stored/received as an ISO string
}
