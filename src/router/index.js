import Vue from 'vue'
import Router from 'vue-router'

import projekty from '@/views/projekty'
import oMnie from '@/views/oMnie'
import cv from '@/views/cv'

import problemVirtualCd from '@/views/projects/problemVirtualCd';
import canvasPongGame from '@/views/projects/canvasPongGame';

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
    }
  ]
})
