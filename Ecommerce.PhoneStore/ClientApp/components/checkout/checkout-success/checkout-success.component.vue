<template>
    <b-alert :variant="variant" show>
        <h3>Order placed successfully.</h3>
        <p>
            Your order number is <strong>{{ order.orderId }}</strong>.
            <span v-if="order.paymentStatus !== 'Paid'">
                However, your payment card was declined - we will not ship your order until payment has been made.
            </span>
        </p>
        <p>
            Click <router-link to="/account">here</router-link> to see your orders.
        </p>
    </b-alert>
</template>

<script lang="ts" src="./checkout-success.component.ts"></script>