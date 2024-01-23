import { Decimal } from 'decimal.js'
const state = {
  weeklyActivities: [
    {
      fromDate: '13 Nov',
      toDate: '19 Nov',
      details: [
        {
          date: '19 Nov',
          details: [
            {
              fee: 5.28,
              place: 'BLL',
              details: [
                {
                  start: '15:39',
                  complete: '16:06',
                  shop: 'Shake Dog Wellpark Retail Centre',
                  orderNo: '2880',
                },
              ],
            },
            {
              fee: 9.03,
              place: 'GAL',
              details: [
                {
                  start: '16:06',
                  complete: '16:49',

                  orderNo: 3313,
                  shop: "McDonald's",
                },
                {
                  start: '16:06',
                  complete: '16:56',
                  orderNo: 1862,
                  shop: "McDonald's",
                },
              ],
            },
            {
              fee: 6.05,
              place: 'GAL',
              details: [
                {
                  shop: "Papa John's",
                  start: '15:11',
                  complete: '15:38',

                  orderNo: '0461',
                },
              ],
            },
            {
              fee: 4.11,
              place: 'GAL',
              details: [
                {
                  shop: 'Subway',
                  start: '14:53',
                  complete: '15:10',

                  orderNo: '0319',
                },
              ],
            },
            {
              fee: 7.27,
              place: 'GAL',
              details: [
                {
                  shop: 'The Chili Shack',

                  start: '14:27',
                  complete: '14:46',
                  orderNo: '4811',
                },
                {
                  shop: 'The Chili Shack',
                  start: '14:27',
                  complete: '14:53',
                  orderNo: '7011',
                },
              ],
            },
            {
              fee: 3.28,
              extra: 1.31,
              place: 'SHT',
              details: [
                {
                  shop: "McDonald's",
                  start: '13:54',
                  complete: '14:19',

                  orderNo: '3644',
                },
              ],
            },
          ],
        },
        {
          date: '18 Nov',
          details: [
            {
              fee: 9.65,
              place: 'GAL',
              details: [
                {
                  start: '16:35',
                  complete: '16:54',
                  orderNo: '7933',

                  shop: "Supermac's",
                },
                {
                  start: '16:35',
                  complete: '17:07',
                  orderNo: '0578',
                  shop: "Supermac's",
                },
              ],
            },
            {
              fee: 5.57,
              place: 'GAL',
              details: [
                {
                  shop: 'Subway',

                  start: '16:06',
                  complete: '16:26',
                  orderNo: '0778',
                },
              ],
            },
            {
              fee: 5.57,
              place: 'GAL',
              details: [
                {
                  shop: "Supermac's",

                  orderNo: '0888',
                  start: '15:31',
                  complete: '15:59',
                },
              ],
            },
            {
              fee: 9.91,
              place: 'GAL',
              details: [
                {
                  start: '14:29',
                  complete: '15:08',
                  orderNo: '0276',
                  shop: 'Boojum',
                },
                {
                  start: '14:29',
                  complete: '15:12',
                  orderNo: '0518',
                  shop: 'Boojum',
                },
              ],
            },
          ],
        },
        {
          date: '17 Nov',
          details: [
            {
              fee: 5.56,
              place: 'SLTH',
              details: [
                {
                  shop: 'Osaka Japanese and Korean BBQ',

                  orderNo: '7435',
                  start: '21:58',
                  complete: '22:19',
                },
              ],
            },
            {
              fee: 7.47,
              place: 'NUNS',
              details: [
                {
                  shop: "Papa John's",

                  orderNo: '6292',
                  start: '21:36',
                  complete: '21:52',
                },
                {
                  shop: "Papa John's",
                  orderNo: '4085',
                  start: '21:36',
                  complete: '21:57',
                },
              ],
            },
            {
              fee: 10.87,
              place: 'NUNS',
              details: [
                {
                  shop: 'Londis',

                  orderNo: '1190',
                  start: '21:07',
                  complete: '21:26',
                },
                {
                  shop: 'Kawa Asian Street Food',
                  orderNo: '8052',
                  start: '21:07',
                  complete: '21:32',
                },
              ],
            },
            {
              fee: 5.35,
              extra: 1.07,
              place: 'SHT',
              details: [
                {
                  shop: "McDonald's",

                  orderNo: '5999',
                  start: '20:46',
                  complete: '21:07',
                },
              ],
            },
            {
              fee: 4.01,
              extra: 1.2,
              place: 'KNC',
              details: [
                {
                  shop: 'Wokbaba Asian',

                  orderNo: '6841',
                  start: '20:30',
                  complete: '20:44',
                },
              ],
            },
            {
              fee: 10.89,
              extra: 2.18,
              place: 'GAL',
              tip: 1,
              details: [
                {
                  orderNo: '7767',

                  start: '19:45',
                  complete: '20:17',
                },
                {
                  start: '19:45',
                  complete: '20:30',
                  orderNo: '5325',
                },
              ],
            },
            {
              fee: 5.51,
              extra: 2.76,
              tip: 2,
              place: 'GAL',
              details: [
                {
                  start: '17:47',
                  complete: '18:22',

                  orderNo: '3156',
                },
              ],
            },
            {
              fee: 7.01,
              extra: 3.51,
              place: 'GAL',
              details: [
                {
                  start: '17:21',
                  complete: '17:47',

                  orderNo: '6573',
                },
              ],
            },
          ],
        },
        {
          date: '16 Nov',
          place: 'BLT',
          details: [
            {
              fee: 5.79,
              details: [
                {
                  start: '20:24',
                  complete: '20:46',

                  orderNo: '6108',
                  shop: "Beeny's",
                },
              ],
            },
            {
              fee: 3.95,
              extra: 1.19,
              place: 'SHT',
              details: [
                {
                  shop: "McDonald's",
                  start: '18:48',
                  complete: '19:32',

                  orderNo: '9767',
                },
              ],
            },
            {
              fee: 4.63,
              place: 'GAL',
              details: [
                {
                  shop: "McDonald's",
                  start: '21:34',
                  complete: '22:01',

                  orderNo: '3737',
                },
              ],
            },
            {
              fee: 4.69,
              place: 'GAL',
              details: [
                {
                  shop: 'Subway',
                  start: '21:12',
                  complete: '21:28',

                  orderNo: '5475',
                },
              ],
            },
            {
              fee: 5.26,
              place: 'GAL',
              details: [
                {
                  shop: 'Burger King',
                  start: '20:54',
                  complete: '21:12',

                  orderNo: '9743',
                },
              ],
            },
            {
              fee: 5.07,
              place: 'GAL',
              details: [
                {
                  shop: "Supermac's",
                  start: '20:00',
                  complete: '20:12',
                  orderNo: '0620',
                },
              ],
            },
            {
              fee: 4.57,
              extra: 1.83,
              place: 'GAL',
              details: [
                {
                  shop: 'Lana galway City Asian Street Food',
                  start: '18:07',
                  complete: '18:43',

                  orderNo: '9945',
                },
              ],
            },
            {
              fee: 4.45,
              extra: 1.34,
              tip: 1,
              place: 'GAL',
              details: [
                {
                  start: '17:19',
                  complete: '17:36',

                  orderNo: '8792',
                },
                {
                  start: '17:19',
                  complete: '17:51',
                  orderNo: '1961',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  mmonthlyActivities: [
    {
      month: 'Jan',
      orders: 0,
      totalAmount: 0,
    },
    {
      month: 'Dec',
      orders: 0,
      totalAmount: 0,
    },
    {
      month: 'Nov',
      orders: 37,
      totalAmount: 241.78,
    },
    {
      month: 'Oct',
      orders: 0,
      totalAmount: 0,
    },
    {
      month: 'Sep',
      orders: 8,
      totalAmount: 66.28,
    },
    {
      month: 'Aug',
      orders: 257,
      totalAmount: 1607.28,
    },
  ],
  weeklyActivity: {
    fromDate: '13 Nov',
    toDate: '19 Nov',
    dayActivities: [
      {
        date: '19 Nov',
        day: 'Sun',
        orders: [
          {
            fee: 5.28,
            place: 'BLL',
            shop: 'Shake Dog Wellpark Retail Centre',
            orderDetails: [
              {
                start: '15:39',
                complete: '16:06',
                orderNo: '2880',
              },
            ],
          },
          {
            fee: 9.03,
            place: 'GAL',
            shop: "McDonald's",
            orderDetails: [
              {
                start: '16:06',
                complete: '16:49',
                orderNo: 3313,
              },
              {
                start: '16:06',
                complete: '16:56',
                orderNo: 1862,
              },
            ],
          },
          {
            fee: 6.05,
            place: 'GAL',
            shop: "Papa John's",
            orderDetails: [
              {
                start: '15:11',
                complete: '15:38',
                orderNo: '0461',
              },
            ],
          },
          {
            fee: 4.11,
            shop: 'Subway',
            place: 'GAL',
            details: [
              {
                start: '14:53',
                complete: '15:10',
                orderNo: '0319',
              },
            ],
          },
          {
            fee: 7.27,
            shop: 'The Chili Shack',
            place: 'GAL',
            details: [
              {
                start: '14:27',
                complete: '14:46',
                orderNo: '4811',
              },
              {
                start: '14:27',
                complete: '14:53',
                orderNo: '7011',
              },
            ],
          },
          {
            fee: 3.28,
            extra: 1.31,
            shop: "McDonald's",
            place: 'SHT',
            details: [
              {
                start: '13:54',
                complete: '14:19',
                orderNo: '3644',
              },
            ],
          },
        ],
      },
      {
        date: '18 Nov',
        day: 'Sat',
        orders: [
          {
            fee: 9.65,
            orderDetails: [
              {
                start: '16:35',
                complete: '16:54',
                orderNo: '7933',
              },
              {
                start: '16:35',
                complete: '17:07',
                orderNo: '0578',
              },
            ],
          },
          {
            fee: 5.57,
            shop: 'Subway',
            place: 'GAL',
            orderDetails: [
              {
                start: '16:06',
                complete: '16:26',
                orderNo: '0778',
              },
            ],
          },
          {
            fee: 5.57,
            shop: "Supermac's",
            place: 'GAL',
            orderDetails: [
              {
                orderNo: '0888',
                start: '15:31',
                complete: '15:59',
              },
            ],
          },
          {
            fee: 9.91,
            shop: 'Boojum',
            place: 'GAL',
            orderDetails: [
              {
                start: '14:29',
                complete: '15:08',
                orderNo: '0276',
              },
              {
                start: '14:29',
                complete: '15:12',
                orderNo: '0518',
              },
            ],
          },
        ],
      },
      {
        date: '17 Nov',
        day: 'Fri',
        orders: [
          {
            fee: 5.56,
            shop: 'Osaka Japanese and Korean BBQ',
            place: 'SLTH',
            orderDetails: [
              {
                orderNo: '7435',
                start: '21:58',
                complete: '22:19',
              },
            ],
          },
          {
            fee: 7.47,
            shop: "Papa John's",
            place: 'NUNS',
            orderDetails: [
              {
                orderNo: '6292',
                start: '21:36',
                complete: '21:52',
              },
              {
                orderNo: '4085',
                start: '21:36',
                complete: '21:57',
              },
            ],
          },
          {
            fee: 10.87,
            shop: 'Londis',
            place: 'NUNS',
            orderDetails: [
              {
                orderNo: '1190',
                start: '21:07',
                complete: '21:26',
              },
              {
                orderNo: '8052',
                start: '21:07',
                complete: '21:32',
              },
            ],
          },
          {
            fee: 5.35,
            extra: 1.07,
            shop: "McDonald's",
            place: 'SHT',
            orderDetails: [
              {
                orderNo: '5999',
                start: '20:46',
                complete: '21:07',
              },
            ],
          },
          {
            fee: 4.01,
            extra: 1.2,
            shop: 'Wokbaba Asian',
            place: 'KNC',
            orderDetails: [
              {
                orderNo: '6841',
                start: '20:30',
                complete: '20:44',
              },
            ],
          },
          {
            fee: 10.89,
            extra: 2.18,
            tip: 1,
            place: 'GAL',
            shop: 'Wokbaba Asian',
            orderDetails: [
              {
                orderNo: '7767',

                start: '19:45',
                complete: '20:17',
              },
              {
                start: '19:45',
                complete: '20:30',
                orderNo: '5325',
              },
            ],
          },
          {
            fee: 5.51,
            extra: 2.76,
            tip: 2,
            place: 'GAL',
            orderDetails: [
              {
                start: '17:47',
                complete: '18:22',
                orderNo: '3156',
              },
            ],
          },
          {
            fee: 7.01,
            extra: 3.51,
            place: 'GAL',
            orderDetails: [
              {
                start: '17:21',
                complete: '17:47',
                orderNo: '6573',
              },
            ],
          },
        ],
      },
      {
        date: '16 Nov',
        orders: [
          {
            fee: 5.79,
            shop: "McDonald's",
            place: 'SHT',
            orderDetails: [
              {
                start: '20:24',
                complete: '20:46',

                orderNo: '6108',
              },
            ],
          },
          {
            fee: 3.95,
            extra: 1.19,
            shop: "McDonald's",
            place: 'SHT',
            orderDetails: [
              {
                start: '18:48',
                complete: '19:32',

                orderNo: '9767',
              },
            ],
          },
          {
            fee: 4.63,
            shop: "McDonald's",
            place: 'GAL',
            orderDetails: [
              {
                start: '21:34',
                complete: '22:01',
                orderNo: '3737',
              },
            ],
          },
          {
            fee: 4.69,
            shop: 'Subway',
            place: 'GAL',
            orderDetails: [
              {
                start: '21:12',
                complete: '21:28',
                orderNo: '5475',
              },
            ],
          },
          {
            fee: 5.26,
            shop: 'Burger King',
            place: 'GAL',
            orderDetails: [
              {
                start: '20:54',
                complete: '21:12',
                orderNo: '9743',
              },
            ],
          },
          {
            fee: 5.07,
            shop: "Supermac's",
            place: 'GAL',
            orderDetails: [
              {
                start: '20:00',
                complete: '20:12',
                orderNo: '0620',
              },
            ],
          },
          {
            fee: 4.57,
            extra: 1.83,
            shop: 'Lana galway City Asian Street Food',
            place: 'GAL',
            orderDetails: [
              {
                start: '18:07',
                complete: '18:43',
                orderNo: '9945',
              },
            ],
          },
          {
            fee: 4.45,
            extra: 1.34,
            tip: 1,
            place: 'GAL',
            orderDetails: [
              {
                start: '17:19',
                complete: '17:36',

                orderNo: '8792',
              },
              {
                start: '17:19',
                complete: '17:51',
                orderNo: '1961',
              },
            ],
          },
        ],
      },
    ],
  },
  dayActivity: {
    date: '19 Nov',
    day: 'Sun',
    orders: [
      {
        fee: 5.28,
        place: 'BLL',
        shop: 'Shake Dog Wellpark Retail Centre',
        orderDetails: [
          {
            start: '15:39',
            complete: '16:06',
            orderNo: '2880',
          },
        ],
      },
      {
        fee: 9.03,
        place: 'GAL',
        shop: "McDonald's",
        orderDetails: [
          {
            start: '16:06',
            complete: '16:49',
            orderNo: 3313,
          },
          {
            start: '16:06',
            complete: '16:56',
            orderNo: 1862,
          },
        ],
      },
      {
        fee: 6.05,
        place: 'GAL',
        shop: "Papa John's",
        orderDetails: [
          {
            start: '15:11',
            complete: '15:38',
            orderNo: '0461',
          },
        ],
      },
      {
        fee: 4.11,
        place: 'GAL',
        shop: 'Subway',
        orderDetails: [
          {
            start: '14:53',
            complete: '15:10',
            orderNo: '0319',
          },
        ],
      },
      {
        fee: 7.27,
        place: 'GAL',
        shop: 'The Chili Shack',
        orderDetails: [
          {
            start: '14:27',
            complete: '14:46',
            orderNo: '4811',
          },
          {
            start: '14:27',
            complete: '14:53',
            orderNo: '7011',
          },
        ],
      },
      {
        fee: 3.28,
        extra: 1.31,
        place: 'SHT',
        shop: "McDonald's",
        orderDetails: [
          {
            start: '13:54',
            complete: '14:19',
            orderNo: '3644',
          },
        ],
      },
    ],
  },
}

const actions = {
  selectDaily(context, index) {
    context.commit('SELECTDAILY', index)
  },
  clearWeekly(context) {
    context.commit('CLEARWEEKLY')
  },
  clearDayActivity(context) {
    context.commit('CLEARDAYACTIVITY')
  },
}

const mutations = {
  CLEARWEEKLY(state) {
    state.weeklyActivity = {}
  },
  CLEARDAYACTIVITY(state) {
    state.dayActivity = {}
  },
  SELECTDAILY(state, index) {
    state.dayActivity = state.weeklyActivity.dayActivities[index]
  },
}

const getters = {
  /**Day Activity */
  dailyOrders(state) {
    if (state.dayActivity == {} || !state.dayActivity.orders) return 0
    return state.dayActivity.orders.length
  },
  dailyTips(state) {
    if (state.dayActivity == {} || !state.dayActivity.orders) return 0
    let result = new Decimal(0)
    for (const order of state.dayActivity.orders) {
      if (order.tip) result = result.add(new Decimal(order.tip))
    }
    return result.toNumber()
  },
  dailyExtraFees(state) {
    if (state.dayActivity == {} || !state.dayActivity.orders) return 0
    let result = new Decimal(0)
    for (const order of state.dayActivity.orders) {
      if (order.extra) result = result.add(new Decimal(order.extra))
    }
    return result.toNumber()
  },
  dailyFees(state) {
    if (state.dayActivity == {} || !state.dayActivity.orders) return 0
    let result = new Decimal(0)
    for (const order of state.dayActivity.orders) {
      if (order.fee) result = result.add(new Decimal(order.fee))
    }
    return result.toNumber()
  },
  dailyEarnings(state) {
    if (state.dayActivity == {} || !state.dayActivity.orders) return 0
    let result = new Decimal(0)
    for (const order of state.dayActivity.orders) {
      if (order.fee) result = result.add(new Decimal(order.fee))
      if (order.extra) result = result.add(new Decimal(order.extra))
      if (order.tip) result = result.add(new Decimal(order.tip))
    }
    return result.toNumber()
  },
  dailyPlaces(state) {
    if (state.dayActivity == {} || !state.dayActivity.orders) return 0
    let result = []
    for (const order of state.dayActivity.orders) {
      if (result.indexOf(order.place) == -1) result.push(order.place)
    }
    return result
  },

  /***Weekly Activity */

  weeklyOrders(state) {
    if (state.weeklyActivity == {} || !state.weeklyActivity.dayActivities) return 0
    let sum = 0
    for (const dayActivity of state.weeklyActivity.dayActivities) {
      for (const order of dayActivity.orders) {
        sum += 1
      }
    }
    return sum
  },
  weeklyStartDate(state) {
    return state.weeklyActivity.fromDate
  },
  weeklyCompleteDate(state) {
    return state.weeklyActivity.toDate
  },
  weeklyActivityDays(state) {
    if (state.weeklyActivity == {} || !state.weeklyActivity.dayActivities) return 0
    return state.weeklyActivity.dayActivities.length
  },
  weeklyEarnings(state) {
    if (state.weeklyActivity == {} || !state.weeklyActivity.dayActivities) return new Decimal(0)
    let sum = new Decimal(0)
    for (const dayActivity of state.weeklyActivity.dayActivities) {
      for (const order of dayActivity.orders) {
        sum = sum.add(new Decimal(order.fee))
        if (order.extra) {
          sum = sum.add(new Decimal(order.extra))
        }
        if (order.tip) {
          sum = sum.add(new Decimal(order.tip))
        }
      }
    }
    return sum
  },
  dayActivities(state) {
    return state.weeklyActivity.dayActivities || []
  },
}

export default {
  actions,
  mutations,
  state,
  getters,
}
