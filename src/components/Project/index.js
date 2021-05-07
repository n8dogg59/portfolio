import React from 'react';
import safeFlightPhoto from "../../assets/project-images/safeFlight.jpg";
import recessPhoto from "../../assets/project-images/recess-screenshot.jpg";
import weatherPhoto from "../../assets/project-images/weather.jpg";
import schedulerPhoto from "../../assets/project-images/scheduler.jpg";
import quizPhoto from "../../assets/project-images/quiz.jpg";
import noteTakerPhoto from "../../assets/project-images/note-taker-screenshot.jpg";


const photos = [
    {
      photo: recessPhoto,
      name: 'Recess',
      description: 'Application that allows the user to select activities for the week that will be randomly tailored around their work and sleep schedules.',
    },
    {
      photo: safeFlightPhoto,  
      name: 'SafeFlight',
      description: 'Application where a user can search for flights and will shown the 10 cheapest flights along with the current Covid-19 data for the state and county of their destination.',
    },
    {
      photo: weatherPhoto,  
      name: 'Weather',
      description: 'Application that returns the current weather and the 5 day forecast.',
    },
    {
      photo: schedulerPhoto,  
      name: 'Scheduler',
      description: 'Application that lets a user tailor their schedule for the current day.',
    },
    {
      photo: quizPhoto,  
      name: 'Quiz',
      description: 'Application that runs a quiz to test the users knowledge of javaScript.',
    },
    {
      photo: noteTakerPhoto,  
      name: 'Note Taker',
      description: 'Application where the user can take and save important notes.',
    }
  ];

function Project() {
  return (
    <div className="flex-row">
        {photos.map((image,i) => (
            <img
            src={image.photo}
            alt={image.name}
            className="img-thumbnail mx-1"
            key={image.name}
            />
        ))}
    </div>
  )
}

export default Project;