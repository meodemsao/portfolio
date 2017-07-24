export const projects = [
  {
    id: 1,
    name: 'porfolio',
    description: 'my porfolio',
    client: ['own'],
    image: '/images/portfolio.jpg',
    demo: [{ title: 'http://bangvu.info', link: 'http://bangvu.info' }],
    source: 'https://github.com/bangvc/portfolio',
    frontend: [
      'created react app',
      'reactjs',
      'react router v4',
      'react-scroll',
      'react-transition-group',
      'bootstrap'
    ],
    backend: [],
    deploy: ['docker'],
    date: '2017'
  },
  {
    id: 2,
    name: 'vcms',
    description: 'Content manager system for newspaper',
    client: ['Cong an TPHCM', 'Viet nam news'],
    image: '/images/bizhub.jpg',
    demo: [
      { title: 'http://congan.com.vn', link: 'http://congan.com.vn' },
      { title: 'http://bizhub.vn/', link: 'http://bizhub.vn/' }
    ],
    frontend: ['c#', 'asp.net webform', 'bootstrap', 'jquery'],
    backend: [
      'reponsitory pattern',
      'entity framework',
      'mssql',
      'redis',
      'mongodb'
    ],
    deploy: [],
    date: '2014-2017'
  },
  {
    id: 3,
    name: 'Keboo',
    description: 'Accountant manager system',
    client: ['keboo'],
    image: '/images/keebo.jpg',
    demo: [{ title: 'http://keboo.uk', link: 'http://keboo.uk' }],
    frontend: ['c#', 'asp.net mvc', 'jquery', 'knockoutjs'],
    backend: ['entity framework', 'mssql'],
    deploy: [],
    date: '2011'
  },
  {
    id: 4,
    name: 'Green signal',
    description: 'Garment production management system',
    image: '/images/poongshin.jpg',
    client: ['Poongshin'],
    demo: [
      { title: 'http://green-signal.com', link: 'http://green-signal.com' }
    ],
    frontend: ['c#', 'asp.net mvc', 'jquery', 'bootstrap', 'androind', 'ios'],
    backend: ['entity framework', 'mssql'],
    deploy: [],
    date: '2014'
  },
  {
    id: 5,
    name: 'React bulma',
    description: 'React components library using bulma css framework',
    client: ['Own'],
    source: 'https://github.com/bangvc/react-bulma',
    image: '/images/bulma.jpg',
    demo: [
      {
        title: 'https://github.com/bangvc/react-bulma',
        link: 'https://github.com/bangvc/react-bulma'
      }
    ],
    frontend: ['reactjs', 'bulma', 'webpack', 'jest', 'enzym'],
    backend: [],
    deploy: [],
    date: '2017'
  },
  {
    id: 6,
    name: 'Ciat',
    description: 'Agricultural investment calculation system for ciat',
    client: ['ciat'],
    source: '',
    image: '/images/ciat.jpg',
    demo: [
      {
        title: 'http://cbatool-us.vgroup.vn/',
        link: 'http://cbatool-us.vgroup.vn/'
      }
    ],
    frontend: ['reactjs', 'financejs', 'redux-saga', 'webpark'],
    backend: ['parse server', 'mongodb'],
    deploy: [],
    date: '2017'
  },
  {
    id: 7,
    name: 'opec import export',
    description: 'import export manager system for opec',
    client: ['Opec'],
    source: '',
    image: '/images/opec.jpg',
    demo: [],
    frontend: [
      'reactjs',
      'exceljs',
      'redux',
      'redux thunk',
      'apollo client',
      'webpark'
    ],
    backend: ['graphql', 'sequelize', 'mysql'],
    deploy: ['docker'],
    date: '2017'
  },
  {
    id: 8,
    name: 'Catp app',
    description: 'catp newspaper app',
    client: ['Cong an TPHCM'],
    source: '',
    image: '/images/catp.jpg',
    demo: [
      {title: 'ios', link: 'https://itunes.apple.com/us/app/b%C3%A1o-c%C3%B4ng-an-tphcm/id1100280446?mt=8'},
      {title: 'android', link: 'https://play.google.com/store/apps/details?id=com.catphcm&hl=en'}
    ],
    frontend: ['react native', 'redux thunk', 'apollo client', 'html parser'],
    backend: ['graphql', 'sequlize', 'mssql'],
    deploy: ['fastlane', 'docker'],
    date: '2016'
  },
  {
    id: 9,
    name: 'TTXVN App',
    description: 'TTXVN newspaper react native app',
    client: ['Vietnam News Agency'],
    source: '',
    image: '/images/ttxvn.jpg',
    demo: [
      {
        title: 'ios',
        link: 'https://itunes.apple.com/us/app/ttxvn/id1225035480?mt=8'
      },
      {
        title: 'android',
        link: 'https://play.google.com/store/apps/details?id=com.ttx_news_app&hl=en'
      }
    ],
    frontend: ['react native', 'redux thunk', 'apollo client', 'html parser'],
    backend: ['graphql', 'sequlize', 'mssql'],
    deploy: ['fastlane', 'docker'],
    date: '2017'
  },
  {
    id: 10,
    name: 'Vestate',
    description: 'Find infomation real estate project in viet nam',
    client: ['Own'],
    source: '',
    image: '/images/vestate.jpg',
    demo: [
      {
        title: 'android',
        link: 'https://play.google.com/store/apps/details?id=com.rn_estate_upgrade&hl=en'
      }
    ],
    frontend: ['react native', 'redux thunk', 'react native svg'],
    backend: ['graphql', 'sequelize', 'mysql', 'pyspider', 'rabbitmq'],
    deploy: ['docker'],
    date: '2017'
  },
  {
    id: 11,
    name: 'Vmovies',
    description: 'movies app',
    client: ['Own'],
    source: '',
    image: '/images/vmovies.jpg',
    demo: [
      {
        title: 'android',
        link: 'https://play.google.com/store/apps/details?id=vn.vgroup.vmovies&hl=vi'
      }
    ],
    frontend: ['android'],
    backend: ['python', 'django'],
    deploy: ['fastlane'],
    date: '2016'
  },
  {
    id: 12,
    name: 'Barcode scanner',
    description:
      'Scan code app check and manage product in warehouse. Using scanner barcode connect to android via mini usb, and send data via 3G',
    client: ['NVMS'],
    source: '',
    image: '/images/barcode.jpg',
    demo: [],
    frontend: ['react native', 'redux thunk'],
    backend: ['java spring'],
    deploy: [],
    date: '2017'
  }
]
