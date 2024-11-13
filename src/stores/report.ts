import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
/**
 * @description 报表数据仓库（样例）
 * @author Simon
 */

export const useReportStore = defineStore('report', () => {
  const records = ref<{
    name:string
    amount:number
    category:string[]
    date:Date
  }[]>([])
  return { 
    records
   }
})
