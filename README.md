# **SIMON报表网页，一套可复用的前端项目模板，可应付一些增删改查大作业的页面📘**
## *技术栈*：vue3.5+ts+vue-router+pinia(可持久化)+sass+element-plus
食用前提，能看懂javascript(请原谅我用ts做类型体操)，了解过前端三大件，封装能力有限，不过SIMON尽可能让非前端人士能够使用，如果觉得不错，给simon点个赞吧！🌟
### 项目使用说明👀：
1. 项目快速运行
   * 请确已经下载node
   * pnpm: 下载相关依赖：\`pnpm install\` 运行项目：\`pnpm run dev\`
   * npm:  下载相关依赖：\`npm install\` 运行项目：\`npm run dev\`
2. 项目主要结构：  
![dbeba565-3687-4008-8516-fd2447e5f310(1)](https://github.com/user-attachments/assets/33d906a5-bf66-49b4-bdf3-97fe66ecfc62)  
若要个性化修改报表组件，对views文件夹里的StudentView和ClassView直接修改即可  
里面的index.vue是组件入口文件，IncomeForm.vue是表单输入组件（用于新增数据）,Record***List.vue是表格展示组件，SearchLine是查询信息录入组件
若想多开一个自己的报表组件，请直接复制StudentView文件并修改相应名称作为新的报表组件，
在router文件夹里的index.ts文件里新增新报表组件的index.vue相对路径，再到components文件夹里的Header.vue组件里面修改导航对象信息  
![image](https://github.com/user-attachments/assets/b7404cfa-0167-4f49-80cb-271284c9c4ef)
![bb1440e2-70ec-4679-ade8-52b9f90b348f(1)](https://github.com/user-attachments/assets/0cd243e7-3842-4e97-8e42-0082e1348bae)






