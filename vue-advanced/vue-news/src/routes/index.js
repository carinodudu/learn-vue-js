import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
import MyView from '../views/MyView.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
    // mode가 history면 url의 #값 제거
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/news',
        },
        {
            // path: url 주소
            path: '/news',
            // name: 명칭
            name: 'news',
            // component: url 주소로 갔을 때 표시될 컴포넌트
            component: NewsView,
        },
        {
            path: '/ask',
            name: 'ask',
            component: AskView,
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobsView,
        },
        {
            path: '/user/:id',
            component: UserView,
        },
        {
            path: '/item/:id',
            component: ItemView,
        },
        {
            path: '/my',
            component: MyView,
        },
    ]
});




/**오류해결
 * 오류: "export 'default' (imported as 'router') was not found in './router/index'
 * 해결: 
 *      1. const router 선언 시 앞에 export 제거
 *      2. 가장 하단에 export default router; 로 export 처리
 * 참조: https://im-designloper.tistory.com/40
 */