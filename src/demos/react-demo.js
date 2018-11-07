import React, { Component } from 'react';
import SubjectShown from 'subject-shown-test';

class ReactDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    };
  }

  getHtml() {
    const { subjects } = this.state;
    const config = {
      editable: true,
    };
    this.ss = new SubjectShown(config, subjects);
    return {
      __html: this.ss.showQuestions(),
    };
  }

  getData = () => {
    const data = this.ss.getData();
    console.log(data);
  };

  ss = null;

  render() {
    return <div dangerouslySetInnerHTML={this.getHtml()} onClick={this.getData} />;
  }
}
export default ReactDemo;
