# JSM Scheduler Calendar Prototype

Prototype implementation of a React calendar for the EDS Jira Service Management app.

## Running the project

1. Clone the repo
2. Execute `npm i` to install the Node packages used in this project
3. Execute `npm start` to begin running the server. The project is visible in your browser at [localhost:3000](http://localhost:3000/). To stop the server, do Ctrl + C in the terminal running the project

## Design decisions

A major issue with [Forge's UIKit](https://developer.atlassian.com/platform/forge/ui-kit/) is that it lacks a native calendar component. Because of this, we need to use a third-party calendar component in the scheduler app. After researching multiple components, I decided that [React Big Calendar](https://github.com/jquense/react-big-calendar) is the best option. The packages I tried are summarized below.

1. **React Event Calendar** ([Github](https://github.com/dptoot/react-event-calendar))
    * **Pros:**
        * Easy to use
        * Simple and customizable events
    * **Cons:**
        * Deprecated! (and not compatible with the latest version of React)
        * Functionality has been surpassed by other libraries
2. **Ant Design** ([Docs](https://ant.design/components/calendar))
    * **Pros:**
        * Looks good
        * Custom styling possibilities
        * The other Ant Design [components](https://ant.design/components/overview) can be used in other places throughout the app/page
    * **Cons:**
        * Complicated to set up and expand on (lots of overhead)
        * Year and month view only
        * Component lacks event calendar functionality
            * Events don't have times
            * We'd have to implement the event calendar part ourselves, even with this component
3. **React Big Calendar** ([Github](https://github.com/jquense/react-big-calendar), [Docs](https://jquense.github.io/react-big-calendar/examples/?path=/story/about-big-calendar--page))
    * **Pros:**
        * Easy to use and great documentation
        * Simple event structure with support for custom fields
        * Lots of props and features
        * Multiple useful view options
        * Option to use pre-built or custom styling
    * **Cons:**
        * Default styling is a little outdated
        * Requires some use of inline-style props

## Features

All of these features are covered in React Big Calendar's [docs](https://jquense.github.io/react-big-calendar/examples/?path=/story/about-big-calendar--page). Here, I highlighted some of the features that will make React Big Calendar a good fit for our project.

Events are structured as a list of JSON objects. 

``` js
{
    'title': 'Birthday Party',
    'start': new Date(2024, 3, 13, 7, 0, 0),
    'end': new Date(2024, 3, 13, 10, 30, 0)
}
```

By default, they contain a title, start date, and end date (the dates are formatted as `Date` objects). For all-day events, remove the hour, minute, and second fields from the start and end dates. Additionally, events support custom fields. This way, we can add things like descriptions and lists of participants. Since events are a list of JSON objects, they can be added to the calendar through the results of a function/API call (note that in this example I created a file called `events.js` and imported them in `App.js`).

The calendar component itself also has features that make it a good fit for our application:

* Support for multiple event handlers, like `onSelectEvent`, `onDrillDown`, and `onSelecting`. These will let us easily add the functionality we want to the calendar. In this example, I made the app open an alert window containing the event object when you click on an event.
* The `background`, `selectable`, and/or `dayPropGetter` can be combined to disable selection and add custom styling to certain days/events, so we can implement disabled dates in the app.
* The `scrollToTime`, `views`, `max`, and `min` props provide heavy customization of the times/dates shown on the calendar. We can use this to only show relevant days/hours in the app.
* To use the default styling, the external CSS link needs to be imported into the file the calendar is in. But, React Big Calendar also contains SASS files. This gives us the ability to easily customize the styling of the calendar.

## Limitations

The biggest limitation right now is that we haven't figured out how to use third-party React libraries in Forge yet. However, once we figure that out then the code from this project should be easily transferrable into the Forge app. Another thing I'm worried about is that the default styling needs to be imported from an external source. I'm not sure how or if this will work in Forge.
