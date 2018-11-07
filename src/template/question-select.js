export const TPL_SELECT = `
    <div class="subject-wrapper subject-wrapper-{{id}}">
        <div class="topic">{{topic}}</div>
        <div class="options">{{options}}</div>
    </div>
`;

export const TPL_SELECT_OPTION = `
    <div class="option">
        <span>{{key}}. {{option}}</span>
    </div>
`;

export const TPL_EDIT_SELECT_OPTION = `
    <div class="option">
        <span><input type="radio" class="option-input option-input-{{id}}" value="{{value}}"></span>
        <span>{{key}}. {{option}}</span>
    </div>
`;
