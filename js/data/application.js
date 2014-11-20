window.data = {
  company: {
    name: {
      value: "Musterfirma GmbH"
    },
    address: {
      person: {
        value: "Personalabteilung"
      },
      street: {
        value: "Musterstraße 42",

      },
      plz: {
        value: "D – 1337"
      },
      city: {
        value: 'Musterstadt'
      }
    }
  },
  date: {
    city: "Hannover, den",
    day: "19",
    month: "11",
    year: "2014"
  },
  person: {
    icon: 'glyphicon glyphicon-user',
    name: {
      value: 'Incoqnito'
    },
    forename: {
      value: 'Chris'
    },
    portrait: {
      src: 'images/photo.jpg',
      class:'img-circle'
    },
    address: {
      fullName: {
        value: 'Chris Incoqnito',
        class: 'glyphicon glyphicon-user',
      },
      telephone: {
        value: "0177 13371337",
        class: 'glyphicon glyphicon-phone'
      },
      email: {
        value: "chris@incoqnito.com",
        class: 'glyphicon glyphicon-envelope'
      },
      street: {
        value: "Musterstraße 21",
        class: 'glyphicon glyphicon-home'
      },
      plz: {
        value: "1337 Musterstadt",
        class: 'glyphicon glyphicon-map-marker'
      }
    }
  },
  social : {
    entries: [
      {
        name: 'XING',
        href: 'https://www.xing.com/profile/Christian_Birg',
        color: '#006464',
        target: '_blank',
        class: 'fa fa-xing-square'
      },
      {
        name: 'Github',
        href: 'https://github.com/incoqnito',
        color: '#333333',
        target: '_blank',
        class: 'fa fa-github'
      }
    ]
  },
  sites: {
    index: {
      id: 'index',
      application: {
        job: "Stellenangebot",
        name: "Musterfirma GmbH",
      },
      assets: [
        {
          name: "Anschreiben",
          href: "/cover-letter",
          target: ""
        }
        ,
        {
          name: "Lebenslauf",
          href: "/curriculum-vitae",
          target: ""
        }
        ,
        {
          name: "Fähigkeiten",
          href: "/skill-page",
          target: ""
        }
      ]
    },
    application: {
      subject: {
        text: "Bewerbung auf das Stellenangebot (m/w)",
        icon: "fa fa-angle-double-down"
      },
      title: "Sehr geehrte Damen und Herren",
      content: [
        "durch ihre Stellenausschreibung auf ihrer Website bin ich auf Ihr Unternehmen aufmerksam geworden.Der Besuch auf Ihrer Internetseite hat mein Interesse an Ihrem Unternehmen geweckt und daher möchte ich bei Ihnen auf die Stellenausschreibung XYZ bewerben.",
        "Ich habe den erweiterten Sekundarabschluss erlangt und absolvierte im Anschluss eine schulische Ausbildung zum „Staatlich geprüften technischen Assistenten für Informatik“. Im Anschluss darauf folgte die Fachhochschulreife Fachrichtung Technik.<br>Im Sommer 2014 habe ich dann meine Ausbildung zum Fachinformatiker für Anwendungsentwicklung erfolgreich abgeschlossen, woraufhin ich von meiner Ausbildungsstätte übernommen wurde und die Stelle des Junior Front End Developers / JavaScript Application Developers wahrgenommen habe. Eine finanzielle Notlage resultierend aus den Liquiditätsproblemen der Firma zwang mich zu der Entscheidung die Firma zu verlassen.",
        "Ich sehe meine Fähigkeiten in der Web Entwicklung - speziell im Bereich der Front End Entwicklung - und beherrsche ein breites Spektrum an Web-Technologien die ich nach Möglichkeit weiter ausbauen möchte. Dennoch konnte ich auch sehr viel Erfahrung in der Backend / API Entwicklung gewinnen.",
        "Zu meinen Stärken zählen Aufmerksamkeit, Flexibilität und Teamfähigkeit. Eine Eigenschaft, die mir oft als Laster anerkannt wird, ist meine Zielstrebigkeit. Treten Probleme auf, bin ich nahezu gezwungen diese zu beheben, ohne dabei die Motivation zu verlieren. Meine Arbeit erledige ich schnell und gewissenhaft.",
        "Klingt das interessant für Sie? Dann sehen Sie meine weiteren Unterlagen durch und laden mich zu einem persönlichen Gespräch ein. Ich freue mich darauf"
      ],
      salutation: "Mit freundlichen Grüßen",
      signing: "Chris Incoqnito"
    },
    curriculumVitae: {
      events: [
        {
          name: "Schullaufbahn",
          icon: 'fa-graduation-cap',
          ticks: [
            {
              name: "Realschule, XYZ",
              begin: 2004,
              end: 2008,
              text: "<strong>Abschluss:</strong> Erweiterter Sekundarabschluss I"
            },
            {
              name: "Berufschule,XYZ",
              begin: 2008,
              end: 2010,
              text: "<strong>Abschluss:</strong> Staatlich geprüfter Assistent für Informatik"
            },
            {
              name: "Fachhochschule, XYZ",
              begin: 2010,
              end: 2011,
              text: "<strong>Abschluss:</strong> Fachhochschulreife"
            }
          ]
        },
        {
          name: "Ausbildung",
          icon: 'fa-institution',
          ticks: [
            {
              name: "XYZ AG",
              begin: "01.08.2012",
              end: "31.08.2013",
              text: "Beginn der Ausbildung"
            },
            {
              name: "XYZ GmbH",
              begin: "01.09.2013",
              end: "30.06.2014",
              text: "<strong>Abschluss:</strong> Fachinformatiker für Anwendungsentwicklung"
            }
          ]
        },
        {
          name: "Berufsweg",
          icon: 'fa-rocket',
          ticks: [
            {
              name: "XYZ GmbH",
              begin: "01.07.2014",
              end: "31.10.2014",
              text: ""
            }
          ]
        }
      ]
    },
    skills: {
      skillSections: [
        {
          name: "Web Skills",
          icon: 'fa-globe',
          skillTable: [
            {
              name: "Computersprachen",
              skills: [
                {
                  name: 'JavaScript',
                  range: 5,
                },
                {
                  name: 'ExtendScript',
                  range: 5,
                },
                {
                  name: 'PHP',
                  range: 2.5,
                },
                {
                  name: 'Ruby',
                  range: 2,
                },
                {
                  name: 'Java',
                  range: 2,
                },
                {
                  name: '(My)SQL',
                  range: 4,
                }
              ]
            },
            {
              name: "Frameworks",
              skills: [
                {
                  name: 'Node.js',
                  range: 3,
                },
                {
                  name: 'Angular.js',
                  range: 4,
                },
                {
                  name: 'jQuery',
                  range: 5,
                },
                {
                  name: 'Zend FW 1/2',
                  range: 3,
                },
                {
                  name: 'Doctrine',
                  range: 3,
                },
                {
                  name: 'Ruby on Rails',
                  range: 4,
                },
                {
                  name: 'Phonegap',
                  range: 2,
                }
              ]
            },
            {
              name: "Technologien",
              skills: [
                {
                  name: 'HTML5',
                  range: 4.5,
                },
                {
                  name: 'CSS/3',
                  range: 4.5,
                },
                {
                  name: 'SASS/SCSS',
                  range: 5,
                },
                {
                  name: 'LESS',
                  range: 5,
                },
                {
                  name: 'Stylus',
                  range: 3,
                },
                {
                  name: 'XML/SVG',
                  range: 4,
                },
                {
                  name: 'Android',
                  range: 3,
                },
                {
                  name: 'Win 8 Store Apps',
                  range: 3,
                }
              ]
            }
          ]
        },
        {
          name: "Software Skills",
          icon: 'fa-pencil',
          skillTable: [
            {
              name: "OS & CMS",
              skills: [
                {
                  name: 'Windows',
                  range: 4,
                },
                {
                  name: 'Linux Ubuntu',
                  range: 3,
                },
                {
                  name: 'Mac OS',
                  range: 4,
                },
                {
                  name: 'Wordpress',
                  range: 4,
                },
                {
                  name: 'Joomla',
                  range: 3,
                },
                {
                  name: 'Typo 3',
                  range: 2,
                },
              ]
            },
            {
              name: "Produktion",
              skills: [
                {
                  name: 'JIRA/Confluence',
                  range: 5,
                },
                {
                  name: 'Git/Gitflow',
                  range: 5,
                },
                {
                  name: 'Office Produkte',
                  range: 5,
                },
                {
                  name: 'Adobe Indesign',
                  range: 4,
                },
                {
                  name: 'Adobe Photoshop',
                  range: 2,
                }
              ]
            },
            {
              name: "Entwicklung",
              skills: [
                {
                  name: 'Sublime Text',
                  range: 5,
                },
                {
                  name: 'Atom.io',
                  range: 5,
                },
                {
                  name: 'Netbeans IDE',
                  range: 3,
                },
                {
                  name: 'Eclipse IDE',
                  range: 3,
                },
                {
                  name: 'Charles',
                  range: 3,
                },
              ]
            },

          ]
        },
        {
          name: "Soft Skills",
          icon: 'fa-user',
          skillTable: [
            {
              name: "Soft Skills",
              skills: [
                {
                  name: 'Flexibilität',
                  range: 5,
                },
                {
                  name: 'Teamfähigkeit',
                  range: 5,
                },
                {
                  name: 'Ehrgeiz',
                  range: 5,
                },
              ]
            },
            {
              name: "Eigenschaften",
              skills: [
                {
                  name: '100% geben',
                  range: 5,
                },
                {
                  name: 'Erfolgsorientiert',
                  range: 5,
                },
                {
                  name: 'Aufgeben',
                  range: 0,
                }
              ]
            },
            {
              name: "Sprachen",
              skills: [
                {
                  name: 'Deutsch',
                  range: 5,
                },
                {
                  name: 'Englisch',
                  range: 3.5,
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
