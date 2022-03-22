<template>
    <div>
        <p>name : {{ userInfo.id }}</p>
        <p>karma : {{ userInfo.karma }}</p>
        <p>created : {{ userInfo.created }}</p>
    </div>
</template>

<script>
export default {
    created() {
        const routePath = this.$route.path;
        let userName = this.$route.params.id;
        let myName = 'davideast';
        let action = '';

        if(routePath === `/user/${userName}`) {
            action = 'FETCH_USER';
        } else if(routePath === '/my') {
            action = 'FETCH_MY';
            userName = myName
        }

        this.$store.dispatch(action, userName);
    },
    computed: {
        userInfo() {
            const userId = this.$store.state.user.id;
            let user = '';
            const myInfo = {
                id: '김두환',
                karma: '777',
                created: '2022.03.22',
            }
            
            if(userId === 'davideast') {
                user = myInfo;
            } else {
                user = this.$store.state.user;
            }

            return user;
        }
    }
}
</script>

<style>

</style>