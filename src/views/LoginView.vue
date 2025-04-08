<template>
    <div>
        <h3>Tela de Login</h3>
    </div>
</template>

<script>
import LoginMixins from '@/mixins/LoginMixins';

export default {
    name: 'Login',
    mixins: [LoginMixins],
    created() {
        this.buscarUrls();
    }
}

</script>
