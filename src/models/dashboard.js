
export default {
  namespace: 'dashboard',
  state: {
    figurecard: [
      {
        icon: 'book',
        title: 'Bookings',
        number: 184,
        color: 'green',
        sub: 'Get More Space...',
        subIcon: 'info-circle'
      }, {
        icon: 'eye-o',
        title: 'Views',
        number: 75,
        color: 'pink',
        sub: 'Google Analytics',
        subIcon: 'tag'
      }, {
        icon: 'bank',
        title: 'Revenue',
        number: 3245,
        color: 'blue',
        sub: 'Last 24 Hours',
        subIcon: 'calendar'
      }, {
        icon: 'team',
        title: 'Followers',
        number: 245,
        color: 'yellow',
        sub: 'Just Updated',
        subIcon: 'solution'
      },
    ],
    imagecard: [
      {
        image: '1',
        title: 'Cozy 5 Stars Apartment',
        desc: 'The place is close to Barceloneta Beach and bus stop just 2 min by walk and...',
        footerTitle: '$899/night',
        position: 'Barcelona, Spain'
      },
      {
        image: '2',
        title: 'Office Studio',
        desc: 'The place is close to Metro Station and bus stop just 2 min by walk and near...',
        footerTitle: '$1,119/night',
        position: 'London, UK'
      },
      {
        image: '3',
        title: 'Beautiful Castle',
        desc: 'The place is close to Metro Station and bus stop just 2 min by walk and near...',
        footerTitle: '$459/night',
        position: 'Milan, Italy'
      }
    ]
  },
  subscriptions: {
    setup({ dispatch, history }) {
    },
  },
  effects: {

  },
  reducers: {

  },
}
