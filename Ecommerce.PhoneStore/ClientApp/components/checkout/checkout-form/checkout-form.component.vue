<template>
    <form @submit.prevent="submit">
        <h4 class="mb-4">Delivery address</h4>
        <b-row>
            <b-col>
                <b-form-group>
                    <label>First name</label>
                    <b-form-input v-model="firstName" data-vv-name="firstName" v-validate="'required|min:3'" :state="state('firstName')" />
                    <b-form-invalid-feedback>
                        {{ errors.first('firstName') }}
                    </b-form-invalid-feedback>
                </b-form-group>
            </b-col>
            <b-col>
                <b-form-group>
                    <label>Last name</label>
                    <b-form-input v-model="lastName" data-vv-name="lastName" v-validate="'required|min:3'" :state="state('lastName')" />
                    <b-form-invalid-feedback>
                        {{ errors.first('lastName') }}
                    </b-form-invalid-feedback>
                </b-form-group>
            </b-col>
        </b-row>
        <b-form-group>
            <label>Address</label>
            <b-form-input v-model="address" data-vv-name="address" v-validate="'required'" :state="state('address')" />
            <b-form-invalid-feedback>
                {{ errors.first('address') }}
            </b-form-invalid-feedback>
        </b-form-group>
        <b-form-group>
            <label>Address 2 <span class="text-muted">(Optional)</span></label>
            <b-form-input v-model="address2" data-vv-name="address2" :state="state('address2')" />
        </b-form-group>
        <b-form-group>
            <label>Town / city</label>
            <b-form-input v-model="townCity" data-vv-name="townCity" v-validate="'required'" :state="state('townCity')" />
            <b-form-invalid-feedback>
                {{ errors.first('townCity') }}
            </b-form-invalid-feedback>
        </b-form-group>
        <b-form-group>
            <label>Country</label>
            <b-form-input v-model="country" data-vv-name="country" v-validate="'required'" :state="state('country')" />
            <b-form-invalid-feedback>
                {{ errors.first('country') }}
            </b-form-invalid-feedback>
        </b-form-group>
        <b-form-group>
            <label>Post code</label>
            <b-form-input v-model="postCode" data-vv-name="postCode" v-validate="'required'" :state="state('postCode')" />
            <b-form-invalid-feedback>
                {{ errors.first('postCode') }}
            </b-form-invalid-feedback>
        </b-form-group>
        <h4 class="mb-4">Payment details</h4>
        <b-form-group>
            <label>Name on card</label>
            <b-form-input v-model="nameOnCard" data-vv-name="nameOnCard" v-validate="'required'" :state="state('nameOnCard')" />
            <b-form-invalid-feedback>
                {{ errors.first('nameOnCard') }}
            </b-form-invalid-feedback>
        </b-form-group>
        <b-form-group>
            <label>Credit/debit card details</label>
            <div ref="card" class="form-control"></div>
        </b-form-group>
        <b-button :disabled="loading" type="submit" variant="primary" size="lg" block class="mt-4 mb-4">
            Checkout
            <span v-if="loading" class="fas fa-spinner fa-spin"></span>
        </b-button>
        <span v-if="paymentError != null" class="text-danger">{{paymentError}}</span>
    </form>
</template>

<script lang="ts" src="./checkout-form.component.ts"></script>

<style lang="scss" scoped>
    .StripeElement--focus {
        border-color: #80bdff;
        outline: 0;
        box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }
</style>