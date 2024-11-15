# **SIMON报表网页，一套可复用的前端项目模板，可应付一些增删改查大作业的页面📘**
## *技术栈*：vue3.5+ts+vue-router+pinia(可持久化)+sass+element-plus
食用前提，能看懂javascript(请原谅我用ts做类型体操)，了解过前端三大件，封装能力有限，不过SIMON尽可能让非前端人士能够使用，如果觉得不错，给simon点个赞吧！🌟
### 项目使用说明👀：
1. 项目快速运行
   * 请确已经下载node，使用node -v检查版本，vscode插件下载Vue-official
   * 若配置了pnpm: 在命令行中依次输入
     1. 下载相关依赖：\`pnpm install\`
     2. 运行项目：\`pnpm run dev\`
   * 没有配置就用npm: 在命令行中依次输入
     1. 下载相关依赖：\`npm install\`
     2. 运行项目：\`npm run dev\`  
![image](https://github.com/user-attachments/assets/61e93141-be4e-4e68-8a26-ba723d3c52b7)  
vite.config.ts里面可以修改运行时的端口号port
2. 项目主要结构以及页面修改：  
![dbeba565-3687-4008-8516-fd2447e5f310(1)](https://github.com/user-attachments/assets/33d906a5-bf66-49b4-bdf3-97fe66ecfc62)  
   * 若要个性化修改报表组件，对views文件夹里的StudentView和ClassView直接修改即可
   * 里面的index.vue是组件入口文件，IncomeForm.vue是表单输入组件（用于新增数据）,Record***List.vue是表格展示组件，SearchLine是查询信息录入组件
   * 若想多开一个自己的报表组件，请直接复制StudentView文件并修改相应名称作为新的报表组件，在router文件夹里的index.ts文件里新增新报表组件的index.vue相对路径，再到components文件夹里的Header.vue组件里面修改导航对象信息  
![image](https://github.com/user-attachments/assets/b7404cfa-0167-4f49-80cb-271284c9c4ef)
![bb1440e2-70ec-4679-ade8-52b9f90b348f(1)](https://github.com/user-attachments/assets/0cd243e7-3842-4e97-8e42-0082e1348bae)
3. 网络接口部分特别说明：
   * 本人闲的蛋疼对AXIOS进行了比较繁琐的ts封装，看不懂也没关系，只需要看几个地方
![image](https://github.com/user-attachments/assets/b4d68088-c105-4d57-9038-7f550438d5ec)  
在.env文件（此处不同后缀表示不同运行环境）中修改服务器地址，本地的或者远程的IP地址，跨域问题请后端自行添加注解  
![f749fffa-0fa8-4a55-b232-016551ce9a18(1)](https://github.com/user-attachments/assets/7278dc33-919d-42c4-9588-d55e91b441f6)  
对于一个快速搭建报表页面的项目，这个api封装确实是整的复杂了（写ts上瘾啦，略略略），大家只需关注path文件里的具体接口填写，写完导入到index.ts出口文件里即可，然后在具体页面里面使用index.ts导出的api(具体接口可以以方法形式.点出来)，SIMON尽力在里面写能让大家都看懂的注释。。。。。。。







