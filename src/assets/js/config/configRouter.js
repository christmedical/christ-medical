import Vue from 'vue';
import VueRouter from 'vue-router';

export function configRouter(App) {
    Vue.use(VueRouter);
    var router = new VueRouter({
        history: true,
        saveScrollPosition: true
    });

    router.map({
        '/': {
            component: require('../pages/patient.vue')
        },
        '/search': {
            component: require('../pages/search.vue')
        },
        '/patient/': {
            component: require('../pages/patient.vue')
        },
        '/patient/:patientId': {
            component: require('../pages/patient.vue')
        },
        '/followups': {
            component: require('../pages/followups.vue')
        },
        '/reports': {
            component: require('../pages/reports.vue')
        },
        '/sync': {
            component: require('../pages/sync.vue')
        },
        '/settings': {
            component: require('../pages/settings.vue')
        }
    });

    router.beforeEach((transition) => {
        console.log('Successfully navigated to: ' + transition.to.path);
        // if (transition.to.path === '/forbidden') {
        //     router.app.authenticating = true
        //     setTimeout(() => {
        //         router.app.authenticating = false
        //         alert('this route is forbidden by a global before hook')
        //         transition.abort()
        //     }, 3000)
        // } else {
            transition.next()
        //}
    });

    router.start(App, 'html');
}
