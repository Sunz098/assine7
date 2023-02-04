import { ref } from "vue";
import { defineStore } from "pinia";

export const useCourse = defineStore("Course", () => {
  const course = ref([
    {
        code:'คพ313',
        name:'การพัฒนาโปรแกรมประยุกต์บนเว็บ',
        group:'1',
    },
    {
        code:' คพ343',
        name:'การวิเคราะห์และออกแบบเชิงวัตถุ',
        group:'1',
    },
    {
        code:'คพ252',
        name:'คณิตศาสตร์สำหรับวิทยาการคอมพิวเตอร์',
        group:'1',
    },
    {
        code:'ศท242',
        name:'ภาษาอังกฤษเชิงวิทยาศาสตร์และเทคโนโลยี 2',
        group:'2',
    },
    {
        code:'คพ232',
        name:'สถาปัตยกรรมคอมพิวเตอร์',
        group:'1',
    },
    {
        code:'ศท013',
        name:'สุขภาพเพื่อการดำรงชีวิต',
        group:'11',
    },
    {
        code:'สต301',
        name:'หลักสถิติ',
        group:'6',
    },
  ]);
  return {course};
});