import Vue from 'vue';
import Router from 'vue-router';

import projekty from '@/views/projekty';
import oMnie from '@/views/oMnie';
import cv from '@/views/cv';
import kontakt from '@/views/kontakt';

import problemVirtualCd from '@/views/projects/problemVirtualCd';
import canvasPongGame from '@/views/projects/canvasPongGame';
import odkurzaCzary from '@/views/projects/odkurzaCzary';
import margonemMultiBot from '@/views/projects/margonemMultiBot';
import badooSpamBot from '@/views/projects/badooSpamBot';
import nbaHallOfHate from "@/views/projects/nbaHallOfHate";
import igHelperTool from "@/views/projects/igHelperTool";
import propertyMapSearcher from "@/views/projects/propertyMapSearcher";

import route404 from '@/views/404';

Vue.use(Router);

export default new Router({
	mode: 'history',
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

		{
			path: '/margonem-multi-bot',
			name: 'margonemMultiBot',
			component: margonemMultiBot
		},

		{
			path: '/badoo-spam-bot',
			name: 'badooSpamBot',
			component: badooSpamBot
		},

		{
			path: '/nba-hall-of-hate',
			name: 'nbaHallOfHate',
			component: nbaHallOfHate
		},

		{
			path: '/ig-helper-tool',
			name: 'igHelperTool',
			component: igHelperTool
		},

		{
			path: '/property-map-searcher',
			name: 'propertyMapSearcher',
			component: propertyMapSearcher
		},

		// 404

		{
			path: '/404',
			name: '404',
			component: route404
		}
	]
});
