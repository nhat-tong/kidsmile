<template>
    <div class="app" v-cloak>
        <b-navbar toggleable="md" type="dark" variant="dark">
            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
            <b-navbar-brand to="/">Kid Smile Shop - Chuyên quần áo trẻ em xuất khẩu</b-navbar-brand>
            <b-collapse is-nav id="nav_collapse">
                <b-navbar-nav>
                    <b-nav-item to="/products">Catalog</b-nav-item>
                    <b-nav-item to="/blogs">Blog</b-nav-item>
                    <b-nav-item to="/contact">Contact</b-nav-item>
                    <b-nav-item v-if="isAdmin" to="/admin">Admin</b-nav-item>
                </b-navbar-nav>
                <b-navbar-nav class="ml-auto mr-4">
                    <cart-summary />
                    <nav-item />
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>

        <transition name="fade" mode="out-in">
            <router-view />
        </transition>

        <b-navbar class="footer" toggleable="md" type="dark" variant="dark">
            <span class="copyright" >
                <a target="_blank" href="https://www.facebook.com/Kid-smile-Shop-Chuy%C3%AAn-Qu%E1%BA%A7n-%C3%81o-Tr%E1%BA%BB-Em-Xu%E1%BA%A5t-Kh%E1%BA%A9u-1731585566888051/">@ {{currentYear}} by Kid Smile Shop</a>
            </span>
        </b-navbar>
        <auth-modal :show="showAuthModal" />
    </div>
</template>

<script lang="ts" src="./app.component.ts"></script>

<style>
    html,
    body {
        height: 100vh;
    }

    div.app,
    div.page {
        height: 100% !important;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.3s ease-in-out;
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }

    .footer {
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
        text-align: center;
        z-index: 1030;
    }

    .copyright {
        text-align: center;
        padding-left: 600px;
        color: #fff;
    }

    .copyright > a {
        color: #fff;
    }
</style>