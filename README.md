# Whirly
Whirly is a self-care app that allows users to curate a list of self-care ideas. This is my front-end capstone project for Nashville Software School. It is a single-page application, built with React.js. The user can create their list and update or delete activities as needed. The user can also filter items in their list by category or time. The user can also filter and spin a wheel to choose a self-care activity. 

## The Motivation
Self-care has been a personal priority for about 2 years and with the onset of the coronavirus pandemic, even more so. I wanted to build a tool that would allow me to keep a personalized list of supportive activities. I've found that even small acts of caring for myself restore

## Technologies
* React.js
* Google Firebase
* SASS

## Deployed Site
[Whirly Live Site](https://whirly.netlify.app/)
[![Netlify Status](https://api.netlify.com/api/v1/badges/1cd5791d-c5bd-426e-a77a-e9924223a702/deploy-status)](https://app.netlify.com/sites/whirly/deploys)

## Video
[Demo of Application](https://www.loom.com/share/49ffbc0d587d4c2997a9fd241c39559e?sharedAppSource=personal_library)

## Screenshots
![Explore View](https://raw.githubusercontent.com/kaitvan/front-end-capstone/master/whirly-explore.png)

![Spin View](https://raw.githubusercontent.com/kaitvan/front-end-capstone/master/whirly-spin.png)

## Code Snippet
I'm a former math teacher, so I'm pretty proud of my spinner component, because it includes some trigonometry. The code below shows how I built each option around the spinner. I'm using the Math.sin and Math.cos methods to calculate the x and y coordinates for each option and then storing those in state.

```
class Option extends Component {
  state = {
    coordinates: {
      x: '',
      y: '',
    },
  }

  componentDidMount() {
    this.setCoordinates();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.activities !== this.props.activities) {
      this.setCoordinates();
    }
  }

  getMyCoordinates = (radius) => ({
    x: Math.sin((Math.PI / (this.props.numberOfActivities / 2)) * this.props.i) * radius,
    y: Math.cos((Math.PI / (this.props.numberOfActivities / 2)) * this.props.i) * radius,
  })

  setCoordinates = () => {
    const newCoordinates = this.getMyCoordinates(this.props.radius);
    this.setState({ coordinates: newCoordinates });
  }

  render() {
    return (
      <div className='option'
        style={ {
          ...styles.option,
          left: `${this.props.center.x + this.state.coordinates.x}px`,
          top: `${this.props.center.y - this.state.coordinates.y}px`,
        } }>{this.props.activity.title}</div>
    );
  }
}
```

## Planning Resources
- [Wireframe](https://www.figma.com/file/GsCTr3BrvURAHkbLtvNokF/Whirly?node-id=0%3A1)
- [ERD](https://lucid.app/lucidchart/invitations/accept/ebf01094-38cf-4b89-a7c1-fac79b997173)

