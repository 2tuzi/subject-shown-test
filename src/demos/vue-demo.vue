<template>
  <div v-html="getHtml()" @click="getData">
  </div>
</template>

<script>
import SubjectShown from 'subject-shown-test';

export default {
  name: 'SubjectShow',
  data() {
    return {
      ss: null,
      editable: this.edit,
      subjects: [
        {
          id: 't1',
          type: '1',
          topic: '请选择山西省会',
          options: [
            {
              id: 1,
              describe: '太原',
            },
            {
              id: 2,
              describe: '大同',
            },
            {
              id: 3,
              describe: 'xx',
            },
            {
              id: 4,
              describe: 'yy',
            },
          ],
        },
        {
          id: 't2',
          type: '1',
          topic: '请选择山西省会222',
          options: [
            {
              id: 1,
              describe: '太原',
            },
            {
              id: 2,
              describe: '大同',
            },
            {
              id: 3,
              describe: 'xx',
            },
            {
              id: 4,
              describe: 'yy',
            },
          ],
        },
      ],
    }
  },
  props: {
    edit: Boolean
  },
  created() {
    //
  },
  methods: {
    getHtml() {
      const { subjects, editable } = this;
      const config = {
        editable
      };
      this.ss = new SubjectShown(config, subjects);
      return this.ss.showQuestions()
    },
    getData() {
      const data = this.ss.getData();
      console.log(data);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.subject-show {
  color: #999;
}
</style>
