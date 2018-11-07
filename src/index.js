import { TPL_SELECT, TPL_SELECT_OPTION, TPL_EDIT_SELECT_OPTION} from './template/question-select';
import { clone } from './utils';
class SubjectShown {
    constructor(options, data) {
        this.options = Object.assign({}, {
            editable: false,
            showAnswer: false
          }, options);
        this.data = data;
    }

    showQuestions() {
        const htmlsArr = this.data.map((subject) => {
            return this.showQuestion(subject.type, subject);
        });

        return htmlsArr.join();
    }

    showQuestion(type = '1', data = {}) {
        let html;

        switch (type) {
            case '1':
                html = this.showQuestionSelect(data);
                break;
            case '2':
                html = this.showQuestionFillBlank(data);
                break;
            default :
                html = '<div>none match err!</div>';
                break;
        };
        return html;
    }

    showQuestionSelect(data) {
        const optionKeys = ['A', 'B', 'C', 'D', 'E', 'F'];
        const { id, topic, options } = data;
        const optionsHtmlArr = options.map((item, index)=> {
            const tpl = this.options.editable ? TPL_EDIT_SELECT_OPTION : TPL_SELECT_OPTION;
            let html;

            html = tpl.replace('{{key}}', optionKeys[index]);
            html = html.replace('{{option}}', item.describe);
            if (this.options.editable) {
                html = html.replace('{{id}}', item.id).replace('{{value}}', item.id);
            }
            return html;
        });
        const optionsHtml = optionsHtmlArr.join('');

        return TPL_SELECT.replace('{{id}}', id).replace('{{topic}}', topic).replace('{{options}}', optionsHtml);
    }

    showQuestionFillBlank() {
        console.log('showQuestionFillBlank');
    }

    getData() {
        const subjects = clone(this.data);

        return subjects.map(subject => {
            if (subject.type === '1') {
                subject.options = subject.options.map(option => {
                    option.checked = false;
                    let ref = document.querySelectorAll(`.subject-wrapper-${subject.id} .option-input-${option.id}`);
                    if (ref && ref[0].checked) {
                        option.checked = true;
                    }
                    return option;
                });
            }
            return subject;
        });
    }
}

export default SubjectShown;
