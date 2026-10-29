import { NgClass } from '@angular/common';
import { Component } from '@angular/core';


@Component({
    imports: [NgClass],
    selector: 'app-tasks',
    styleUrl: './tasks.css',
    templateUrl: './tasks.html',
})
export class Tasks {
    statuses = ['BackLog', 'To Do', 'In Progress', 'Review', 'Done'];

    stages = [
        {
            title: "User Authentication Redesign",
            description: "Implement OAuth2 login flow and update password recovery screens.",
            status: "BackLog",
            priority: "High",
            dueDate: "Nov 15, 2026",
            assigneeTo: "Ram",
        },
        {
            title: "Database Index Optimization",
            description: "Analyze slow queries on the dashboard and add necessary indexing.",
            status: "To Do",
            priority: "Medium",
            dueDate: "Dec 01, 2026",
            assigneeTo: "Sita",
        },
        {
            title: "Dark Mode UI Bug Fixes",
            description: "Fix contrast issues on navigation bar and buttons in dark theme.",
            status: "In Progress",
            priority: "Low",
            dueDate: "Next week",
            assigneeTo: "Alex",
        },
        {
            title: "Payment Gateway Integration",
            description: "Integrate Stripe webhooks for subscription renewal handling.",
            status: "Review",
            priority: "Urgent",
            dueDate: "Completed",
            assigneeTo: "Priya",
        },
        {
            title: "Monthly Security Audit",
            description: "Run vulnerability scans and update outdated NPM packages.",
            status: "Done",
            priority: "Medium",
            dueDate: "Next month",
            assigneeTo: "John",
        }
    ];

    // Function to get tasks for a specific column status
    getTasksForStatus(status: string) {
        return this.stages.filter(task => task.status === status);
    }
}
