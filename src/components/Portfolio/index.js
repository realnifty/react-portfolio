import React from 'react';
import budgetTracker from "../../assets/images/projects/budget_tracker.png"
import employeeTracker from "../../assets/images/projects/employee_tracker.png"
import habitTracker from "../../assets/images/projects/habit_tracker.png"
import moodswingr from "../../assets/images/projects/moodswingr.png"

function Portfolio() {
    const projects =[
        {
            name: "Budget Tracker",
            description: "A budget tracker application that allows offline access and functionality. ",
            link: "https://github.com/realnifty/budget-tracker",
            image: budgetTracker
        },
        {
            name: "Employee Tracker",
            description: "A command-line application that manages a company's employee database, using Node.js, Inquirer, and MySQL.",
            link: "https://github.com/realnifty/employee-tracker",
            image: employeeTracker
        },
        {
            name: "Habitual",
            description: "An application that allows users to track their daily habits in a visually simplified display.",
            link: "https://habitualtracker.herokuapp.com/",
            image: habitTracker
        },
        {
            name: "Moodswingr",
            description: "An application that recommends songs based on your current mood.",
            link: "https://realnifty.github.io/moodswingr/",
            image: moodswingr
        }
    ]

    return (
        <div id='portfolio' className="d-flex my-5">
            {projects.map((project, index) => (
                <div key={index} className="card w-25 mx-4" >
                    <img src={project.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{project.name}</h5>
                        <p className="card-text">{ project.description}</p>
                        <a href={project.link} className="btn btn-primary">View</a>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Portfolio;