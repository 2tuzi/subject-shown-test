import { TPL_SELECT, TPL_SELECT_OPTION} from './template/question-select';

class SubjectShown {
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
        const { topic, options } = data;
        const optionsHtmlArr = options.map((item, index)=> {
            let html = TPL_SELECT_OPTION.replace('{{key}}', optionKeys[index]);

            return html.replace('{{option}}', item.describe);
        });
        const optionsHtml = optionsHtmlArr.join('');

        return TPL_SELECT.replace('{{topic}}', topic).replace('{{options}}', optionsHtml);
    }

    showQuestionFillBlank() {
        console.log('showQuestionFillBlank');
    }

}

export default SubjectShown;
