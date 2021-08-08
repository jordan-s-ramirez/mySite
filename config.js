module.exports = {
  pathPrefix: '',
  siteUrl: 'https://jordanramirez.com',
  siteTitle: 'Jordan Ramirez',
  siteDescription: 'Logbook of a software developer',
  author: 'Jordan Ramirez',
  postsForArchivePage: 3,
  defaultLanguage: 'en',
  pages: {
    home: '/',
    blog: 'blog',
    projects: 'projects',
    contact: 'contact',
    resume: 'resume',
  },
  social: {
    github: 'https://github.com/jordan-s-ramirez',
    facebook: 'https://www.facebook.com/jordan.ramirez.5264',
    twitter: 'https://twitter.com/',
    instagram: 'https://www.instagram.com/jordan_ramirez6/',
    rss: '/rss.xml',
  },
  contactFormUrl: process.env.CONTACT_FORM_ENDPOINT || 'https://getform.io/f/497a2909-a304-4cbf-9ff6-1c9127b72864',
  tags: {
    javascript: {
      name: 'javascript',
      description: 'JavaScript is an object-oriented programming language used alongside HTML and CSS to give functionality to web pages.',
      color: '#f0da50',
    },
    nodejs: {
      name: 'Node.js',
      description: 'Node.js is a tool for executing JavaScript in a variety of environments.',
      color: '#90c53f',
    },
    reactjs: {
      name: 'reactjs',
      description: 'React is an open source JavaScript library used for designing user interfaces.',
      color: '#61dbfa',
    },
    gatsby: {
      name: 'Gatsby.js',
      description: 'A framework built over ReactJS to generate static page web application.  ',
      color: '#6f309f',
    },
    html: {
      name: 'HTML',
      description: 'A markup language that powers the web. All websites use HTML for structuring the content.',
      color: '#dd3431',
    },
    css: {
      name: 'css',
      description: 'CSS is used to style the HTML element and to give a very fancy look for the web application.',
      color: '#43ace0',
    },
    python: {
      name: 'python',
      description: 'A general purpose programming language that is widely used for developing various applications.',
      color: '#f9c646',
    },
  },
};
