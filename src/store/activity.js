import { Decimal } from 'decimal.js'
const state = {
  weeklyActivities: [
    {
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
              shop: 'The Chili Shack',
              place: 'GAL',
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
              shop: "McDonald's",
              place: 'SHT',
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
        {
          date: '18 Nov',
          day: 'Sat',
          orders: [
            {
              fee: 9.65,
              shop: 'Subway',
              place: 'GAL',
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
              shop: 'Xian Street Food',
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
              shop: 'Wokbaba Asian',
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
              shop: 'Wokbaba Asian',
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
          day: 'Thu',
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
              shop: 'Lana galway City Asian Street Food',
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
  ],
  monthlyActivities: [
    {
      month: 'Nov',
      dayActivities: [
        {
          date: '20 Nov',
          day: 'Mon',
          orders: [
            {
              fee: 4.52,
              place: 'NUNS',
              shop: 'Spice India',
              orderDetails: [
                {
                  start: '21:40',
                  complete: '21:57',
                  orderNo: '0350',
                },
              ],
            },
            {
              fee: 5.6,
              tip: 1.0,
              place: 'NUNS',
              shop: 'Handsome Burger',
              orderDetails: [
                {
                  start: '19:37',
                  complete: '19:59',
                  orderNo: '3349',
                },
              ],
            },
            {
              fee: 5.88,
              place: 'BLL',
              shop: 'Handsome Burger',
              orderDetails: [
                {
                  start: '18:22',
                  complete: '18:44',
                  orderNo: '8832',
                },
              ],
            },
            {
              fee: 4.73,
              place: 'BLL',
              shop: 'MrBeast Burger',
              orderDetails: [
                {
                  start: '15:26',
                  complete: '18:12',
                  orderNo: '2816',
                },
              ],
            },
            {
              fee: 6.02,
              place: 'GAL',
              shop: 'Burger King',
              orderDetails: [
                {
                  start: '21:05',
                  complete: '21:39',
                  orderNo: '6647',
                },
              ],
            },
            {
              fee: 8.53,
              place: 'GAL',
              shop: "McDonald's",
              orderDetails: [
                {
                  start: '20:34',
                  complete: '20:55',
                  orderNo: '0785',
                },
                {
                  start: '20:34',
                  complete: '21:05',
                  orderNo: '7630',
                },
              ],
            },
          ],
        },
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
              shop: 'The Chili Shack',
              place: 'GAL',
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
              shop: "McDonald's",
              place: 'SHT',
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
        {
          date: '18 Nov',
          day: 'Sat',
          orders: [
            {
              fee: 9.65,
              shop: 'Subway',
              place: 'GAL',
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
              shop: 'Xian Street Food',
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
              shop: 'Wokbaba Asian',
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
              shop: 'Wokbaba Asian',
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
          day: 'Thu',
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
              shop: 'Lana galway City Asian Street Food',
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
  ],
  monthlyActivity: {},
  weeklyActivity: {},
  dayActivity: {},
  order: {},
}

const actions = {
  selectDaily(context, index) {
    context.commit('SELECTDAILY', index)
  },
  selectWeekly(context, index) {
    context.commit('SELECTWEEKLY', index)
  },
  selectOrder(context, data) {
    context.commit('SELECTORDER', data)
  },
  selectMonthly(context, index) {
    context.commit('SELECTMONTHLY', index)
  },
  clearWeekly(context) {
    context.commit('CLEARWEEKLY')
  },
  clearDayActivity(context) {
    context.commit('CLEARDAYACTIVITY')
  },
  clearOrder(context) {
    context.commit('CLEARORDER')
  },
  clearMonthly(context) {
    context.commit('CLEARMONTHLY')
  },
}

const mutations = {
  CLEARMONTHLY(state) {
    state.monthlyActivity = {}
  },
  CLEARWEEKLY(state) {
    state.weeklyActivity = {}
  },
  CLEARDAYACTIVITY(state) {
    state.dayActivity = {}
  },
  SELECTMONTHLY(state, index) {
    state.monthlyActivity = state.monthlyActivities[index]
  },
  SELECTDAILY(state, index) {
    if (state.weeklyActivity.dayActivities) state.dayActivity = state.weeklyActivity.dayActivities[index]
    if (state.monthlyActivity.dayActivities) state.dayActivity = state.monthlyActivity.dayActivities[index]
  },
  SELECTWEEKLY(state, index) {
    state.weeklyActivity = state.weeklyActivities[index]
  },
  SELECTORDER(state, data) {
    state.order = data
  },
  CLEARORDER(state) {
    state.order = {}
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

  /** Monthly Activity*/
  monthlyOrders(state) {
    if (!state.monthlyActivity.dayActivities) return 0
    let sum = 0
    for (const dayActivity of state.monthlyActivity.dayActivities) {
      for (const order of dayActivity.orders) {
        sum += 1
      }
    }
    return sum
  },
  monthlyEarnings(state) {
    if (!state.monthlyActivity.dayActivities) return new Decimal(0)
    let sum = new Decimal(0)
    for (const dayActivity of state.monthlyActivity.dayActivities) {
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
  monthlyActivityDays(state) {
    if (!state.monthlyActivity.dayActivities) return 0
    return state.monthlyActivity.dayActivities.length
  },
  monthlyDayActivities(state) {
    if (!state.monthlyActivity.dayActivities) return []
    return state.monthlyActivity.dayActivities
  },

  /**Daily Order */
  orderFee(state) {
    if (!state.order) return 0
    let sum = new Decimal(0)
    if (state.order.fee) sum = sum.add(new Decimal(state.order.fee))
    if (state.order.extra) sum = sum.add(new Decimal(state.order.extra))
    if (state.order.tip) sum = sum.add(new Decimal(state.order.tip))
    return sum.toNumber()
  },
}

export default {
  actions,
  mutations,
  state,
  getters,
}
