# vite-plugin-transform-css-modules
🌈🌈🌈 transform not module.(css|scss|less) to css module


# 使用方式

```js
import { defineConfig } from 'vite'
import vitePluginTransformCssModules from 'vite-plugin-transform-css-modules';

// https://vitejs.dev/config/
export default defineConfig({
  ... 
  plugins: [
    vitePluginTransformCssModules()
  ]
})

```