export default {
  input: "./src/index.js", // 程序入口
  output: {//文件输出配置
    file: "./dist/bundle.js", // 打包生成的文件位置和文件名
    format: "cjs"  // 输出格式
  }
 }