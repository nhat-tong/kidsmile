﻿import { Vue } from 'vue/types/vue';

declare module 'vue/types/vue' {
    interface Vue {
        $toastr: any;
    }
}