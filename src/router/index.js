import Vue from 'vue'
import Router from 'vue-router'

import projekty from '@/views/projekty'
import oMnie from '@/views/oMnie'
import cv from '@/views/cv'
import kontakt from '@/views/kontakt'

import problemVirtualCd from '@/views/projects/problemVirtualCd';
import canvasPongGame from '@/views/projects/canvasPongGame';
import odkurzaCzary from '@/views/projects/odkurzaCzary';

import route404 from '@/views/404';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/projekty',
      name: 'projekty',
      component: projekty
    },

    {
      path: '/oMnie',
      name: 'o mnie',
      component: oMnie
    },

    {
      path: '/cv',
      name: 'cv',
      component: cv
    },

    {
      path: '/kontakt',
      name: 'kontakt',
      component: kontakt
    },

    //projects:
    {
      path: '/problem-virtual-cd',
      name: 'problemVirtualCd',
      component: problemVirtualCd
    },

    {
      path: '/canvas-pong-game',
      name: 'canvasPongGame',
      component: canvasPongGame
    },

    {
      path: '/odkurza-czary',
      name: 'odkurzaCzary',
      component: odkurzaCzary
    },

    // 404

    {
      path: '/404',
      name: '404',
      component: route404
    }
  ]
});