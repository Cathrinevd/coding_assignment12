import React from 'react';
import './App.css';
import { Button } from './components/Button';
import { Card } from './components/Card';
import { HeroImage } from './components/HeroImage';
import { Img } from './components/Img';
import { Label } from './components/Label';
import { Text } from './components/Text';
import { Table, TableCell, TableHeader, TableRow } from './components/Table';

import railsIntroImg from './assets/rails-intro.png';
import railsEcommerceImg from './assets/rails-ecommerce.png';
import flaskDashImg from './assets/flask-dash.png';
import pandasImg from './assets/pandas.png';
import componentImg from './assets/component-library.png';
import headshot from './assets/headshot.png';

import w3Img from './assets/w3schools.png';
import reactImg from './assets/react.png';
import railsImg from './assets/rails.png';
import dockerImg from './assets/docker.png';

const projects = [
  {
    title: 'Intro to Ruby on Rails Application',
    description:
      'Developed a foundational Ruby on Rails web application to learn MVC architecture, routing, and database integration. This project introduced models, controllers, and views while building a functional web interface.',
    tech: ['Ruby on Rails', 'HTML', 'CSS', 'SQLite'],
    link: 'https://github.com/Cathrinevd/rails_intro_project',
    image: railsIntroImg,
  },
  {
    title: 'E-Commerce Web Application (Rails)',
    description:
      'Built a full-stack e-commerce web application using Ruby on Rails. Features included product listings, cart functionality, and checkout functionality. This project strengthened my understanding of database relationships, RESTful routing, and dynamic content rendering.',
    tech: ['Ruby on Rails', 'PostgreSQL / SQLite', 'HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/Cathrinevd/gone_fishing',
    image: railsEcommerceImg,
  },
  {
    title: 'Interactive API with Flask and Dash',
    description:
      'Created a Flask-based API with multiple routes and integrated a Dash application for data visualization. This project demonstrated how to build and consume APIs, process user input, and present interactive graphs using real data.',
    tech: ['Python', 'Flask', 'Dash', 'Plotly'],
    link: 'https://github.com/Cathrinevd',
    image: flaskDashImg,
  },
  {
    title: 'Data Analysis with SQLite and Pandas',
    description:
      'Developed a Python application that integrates SQLite with Pandas for data analysis. This project involved querying structured datasets, performing data manipulation, and generating insights using Python tools.',
    tech: ['Python', 'SQLite', 'Pandas'],
    link: 'https://github.com/Cathrinevd',
    image: pandasImg,
  },
  {
    title: 'UI Component Library and Build Pipeline',
    description:
      'Designed and implemented a reusable UI component library using React and Storybook. Integrated ESLint, Prettier, Husky, and GitHub Actions to support code quality, automate testing, and reinforce continuous integration practices.',
    tech: [
      'React',
      'Storybook',
      'ESLint',
      'Prettier',
      'Husky',
      'GitHub Actions',
    ],
    link: 'https://github.com/Cathrinevd/coding_assignment12',
    image: componentImg,
  },
];

const resources = [
  {
    title: 'W3Schools',
    summary:
      'This resource is helpful for learning all kinds of coding languages such as PHP, Java, JavaScript, HTML, and CSS.',
    link: 'https://www.w3schools.com/',
    image: w3Img,
  },
  {
    title: 'React Documentation',
    summary:
      'This website is helpful for learning components, props, hooks, project structure, and React development patterns.',
    link: 'https://react.dev/',
    image: reactImg,
  },
  {
    title: 'Ruby on Rails Guides',
    summary:
      'This resource is helpful for understanding Rails, routing, migrations, Active Record, and MVC patterns.',
    link: 'https://guides.rubyonrails.org/',
    image: railsImg,
  },
  {
    title: 'Docker Documentation',
    summary:
      'This website is useful for understanding images, containers, Dockerfiles, and production deployment.',
    link: 'https://docs.docker.com/',
    image: dockerImg,
  },
];

function App() {
  return (
    <div className="portfolio-page">
      <header className="portfolio-header">
        <HeroImage
          title="Cathrine Van Damme"
          subtitle="Full Stack Web Development Student Portfolio"
          backgroundColor="linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)"
        />
      </header>

      <main className="portfolio-content">
        <section className="portfolio-section">
          <div className="section-heading">
            <Label text="Basic Information" backgroundColor="#e8f0ff" />
          </div>

          <div className="basic-info-grid">
            <div>
              <Text text="Hello, my name is Cathrine Van Damme and I am a Full Stack Web Development student. This portfolio highlights coursework I have completed throughout my program, including projects in Ruby on Rails, Python, APIs, data analysis, React, and testing/build workflows. My goal is to continue building practical full-stack development skills while creating clean, organized, and user-friendly applications." />
              <div className="button-row">
                <a
                  href="https://github.com/Cathrinevd"
                  target="_blank"
                  rel="noreferrer"
                  className="button-link"
                >
                  <Button text="View GitHub" />
                </a>
              </div>
            </div>

            <div className="info-card-wrap">
              <img
                src={headshot}
                alt="Cathrine Van Damme"
                className="headshot"
              />
              <Card
                title="Portfolio Focus"
                body="This portfolio showcases coursework, technical skills, development resources, and my preferred setup for building and testing applications."
              />
            </div>
          </div>
        </section>

        <section className="portfolio-section">
          <div className="section-heading">
            <Label text="Work" backgroundColor="#e8f0ff" />
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-item-horizontal">
                <div className="project-image">
                  <Img src={project.image} alt={project.title} width="100%" />
                </div>

                <div className="project-content">
                  <Card title={project.title} body={project.description} />

                  <div className="project-meta">
                    <Text text={`Tech List: ${project.tech.join(', ')}`} />
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                    >
                      View Repository
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="portfolio-section">
          <div className="section-heading">
            <Label text="Skills" backgroundColor="#e8f0ff" />
          </div>

          <div className="skills-grid">
            <Card
              title="Description"
              body="My technical skills have been developed through coursework in front-end development, back-end development, testing, deployment, APIs, and data-focused projects."
            />
            <Card
              title="Languages / Frameworks"
              body="HTML, CSS, JavaScript, TypeScript, React, Ruby on Rails, Python, Flask, Dash, SQL"
            />
            <Card
              title="Tools"
              body="VS Code, GitHub, Git Bash, Docker, Storybook, ESLint, Prettier, Husky, GitHub Actions"
            />
          </div>
        </section>

        <section className="portfolio-section">
          <div className="section-heading">
            <Label text="Resources" backgroundColor="#e8f0ff" />
          </div>

          <div className="resources-grid">
            {resources.map((resource) => (
              <article key={resource.title} className="resource-item">
                <div className="resource-card">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="resource-icon"
                  />
                  <Card title={resource.title} body={resource.summary} />
                </div>

                <a
                  href={resource.link}
                  target="_blank"
                  rel="noreferrer"
                  className="resource-link"
                >
                  Visit Resource
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="portfolio-section">
          <div className="section-heading">
            <Label text="Developer Setup" backgroundColor="#e8f0ff" />
          </div>

          <div className="setup-table-wrap">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableCell>Setup Area</TableCell>
                  <TableCell>Details</TableCell>
                </TableRow>
              </TableHeader>
              <tbody>
                <TableRow>
                  <TableCell>VS Code Setup</TableCell>
                  <TableCell>
                    I use Visual Studio Code with ESLint, Prettier, and GitHub
                    tools.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Terminal Setup</TableCell>
                  <TableCell>
                    Git Bash and VS Code terminal for npm, Docker, and Git
                    commands.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Preferred Editor Font</TableCell>
                  <TableCell>
                    Default coding font for readability and simplicity.
                  </TableCell>
                </TableRow>
              </tbody>
            </Table>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
