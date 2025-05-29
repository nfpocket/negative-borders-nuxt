# Negative borders for Nuxt

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

Nuxt module for https://github.com/nfpocket/negative-borders

## Quick Setup

Install the module to your Nuxt application with one command:

```bash
npx nuxi module add negative-borders-nuxt
```

That's it! You can now use Negative borders for Nuxt in your Nuxt app ✨

## Usage

```vue
<template>
  <div
    style="width: 200px; height: 200px; background-color: chartreuse"
    v-negative-borders="{
      size: '50px',
      color: 'orange',
      position: 'bottom',
    }"
  ></div>
</template>

<script setup></script>
```

## Contribution

<details>
  <summary>Local development</summary>
  
  ```bash
  # Install dependencies
  npm install
  
  # Generate type stubs
  npm run dev:prepare
  
  # Develop with the playground
  npm run dev
  
  # Build the playground
  npm run dev:build
  
  # Run ESLint
  npm run lint
  
  # Run Vitest
  npm run test
  npm run test:watch
  
  # Release new version
  npm run release
  ```

</details>


<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/negative-borders-nuxt/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/negative-borders-nuxt

[npm-downloads-src]: https://img.shields.io/npm/dm/negative-borders-nuxt.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npm.chart.dev/negative-borders-nuxt

[license-src]: https://img.shields.io/npm/l/negative-borders-nuxt.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/negative-borders-nuxt

[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com
