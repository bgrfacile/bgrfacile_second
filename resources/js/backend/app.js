require('../bootstrap');
import React from 'react'
import { render } from 'react-dom'
import { createInertiaApp } from '@inertiajs/inertia-react'
import { InertiaProgress } from '@inertiajs/progress'

InertiaProgress.init({
    color: '#ED8936',
    showSpinner: true
  });

createInertiaApp({
  resolve: name => import(`../backend/pages/${name}`),
  setup({ el, App, props }) {
    render(<App {...props} />, el)
  },
})

