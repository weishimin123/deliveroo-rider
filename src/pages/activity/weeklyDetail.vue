<template>
    <div class="weeklyDetailSlider slider" :show="show">
        <div class="outer">
            <v-touch>
                <img src="../images/backward.png" alt="">
            </v-touch>
            <span>{{ dayActivity.date }}</span>
        </div>
        <div class="outer">
            <div class="inner">
                <div class="left">
                    <div>
                        <span>€</span>
                        <span>{{ intPart }}</span>
                        <span>{{ floatPart }}</span>
                    </div>
                    <span>Total earnings</span>
                </div>
                <div class="right">
                    <span>{{ orders }}</span>
                    <span>Orders </span>
                </div>
            </div>
            <div class="innner">
                <span>Order fees €{{ fees }}</span>
                <span v-if="extraFees > 0">· Extra fees €{{ extraFees }}</span>
                <span v-if="tips > 0">· Tips €{{ tips }}</span>
            </div>
        </div>
        <div class="outer" v-for="activity in sortedDayActivity">
            <div class="inner">
                <span>Previous activity</span>
                <span>{{ getStartTime(activity) }}-{{ getCompleteTime(activity) }}</span>
            </div>
            <div class="inner" v-for="(order, index) in activity.orders" :key="index">
                <div class="left">
                    <span>{{ order.shop }}</span>
                    <span>{{ getOrderCompleteTime(order) }}</span>
                </div>
                <div class="right">
                    <span>€{{ getOrderFee(order) }}</span>
                    <v-touch>
                        <img src="../images/forward.png" alt="">
                    </v-touch>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import { Decimal } from 'decimal.js'

export default {
    name: 'WeeklyDetail',
    props: ['show'],
    computed: {
        ...mapState({
            dayActivity: state => state.activity.selectedDayActivity
        }),
        ...mapGetters(['sortedDayActivity']),
        orders() {
            return this.dayActivity.details.length
        },
        totalEarnings() {
            let result = this.fees.add(this.extraFees).add(this.tips)
            return result
        },
        fees() {
            let result = new Decimal(0)
            this.dayActivity.details.forEach(element => {
                if (element.fee) {
                    result = result.add(new Decimal(element.fee))
                }
            });
            return result
        },
        extraFees() {
            let result = new Decimal(0)
            this.dayActivity.details.forEach(element => {
                if (element.extra) {
                    result = result.add(new Decimal(element.extra))
                }
            });
            return result
        },
        tips() {
            let result = new Decimal(0)
            this.dayActivity.details.forEach(element => {
                if (element.tip) {
                    result = result.add(new Decimal(element.tip))
                }
            });
            return result
        },
        intPart() {
            return Math.floor(this.totalEarnings)
        },
        floatPart() {
            return this.totalEarnings.sub(new Decimal(this.intPart)).mul(new Decimal(100))
        },


    },
    methods: {
        getStartTime(activity) {
            const orders = activity.orders
            const firstOrder = orders[0]
            return firstOrder.details[0].start
        },
        getCompleteTime(activity) {
            const orders = activity.orders
            const lastOrder = orders[orders.length - 1]
            const orderDetails = lastOrder.details
            const lastOrderDetail = orderDetails[orderDetails.length - 1]
            return lastOrderDetail.complete
        },
        getOrderFee(order) {
            let result = new Decimal(0)
            result = result.add(new Decimal(order.fee))
            if (order.extra) {
                result = result.add(new Decimal(order.extra))
            }
            if (order.tip) {
                result = result.add(new Decimal(order.tip))
            }
            return result.toNumber()
        },
        getOrderCompleteTime(order) {
            const details = order.details
            if (details.length == 1) {
                return details[0].complete
            } else {
                return details[1].complete
            }
        }
    }
}
</script>

<style></style>