export const BTN_ACTIONS = {
    ADD: 'ADD',
    THEME: 'THEME',
    CALC: 'CALC',
    DELETE: 'DELETE',
    DELETEONE: 'DELETEONE',
}

export const btns = [
    {
        display: 'C',
        action: BTN_ACTIONS.DELETE,
        class: 'btn__op btn__c btn__cd'
    },
    {
        display: 'D',
        action: BTN_ACTIONS.DELETEONE,
        class: 'btn__op btn__cd'
    },
    {
        display: '(',
        action: BTN_ACTIONS.ADD,
        class: 'btn__op'
    },
    {
        display: ')',
        action: BTN_ACTIONS.ADD,
        class: 'btn__op'
    },
    {
        display: '.',
        action: BTN_ACTIONS.ADD,
        class: 'number'
    },
    {
        display: '/',
        action: BTN_ACTIONS.ADD,
        class: 'btn__op'
    },
    {
        display: '7',
        action: BTN_ACTIONS.ADD,
        class: 'number'
    },
    {
        display: '8',
        action: BTN_ACTIONS.ADD,
        class: 'number'
    },
    {
        display: '9',
        action: BTN_ACTIONS.ADD,
        class: 'number'
    },
    {
        display: 'x',
        action: BTN_ACTIONS.ADD,
        class: 'btn__op'
    },
    {
        display: '4',
        action: BTN_ACTIONS.ADD,
        class: 'number'
    },
    {
        display: '5',
        action: BTN_ACTIONS.ADD,
        class: 'number'
    },
    {
        display: '6',
        action: BTN_ACTIONS.ADD,
        class: 'number'
    },
    {
        display: '-',
        action: BTN_ACTIONS.ADD,
        class: 'btn__op'
    },
    {
        display: '1',
        action: BTN_ACTIONS.ADD,
        class: 'number'
    },
    {
        display: '2',
        action: BTN_ACTIONS.ADD,
        class: 'number'
    },
    {
        display: '3',
        action: BTN_ACTIONS.ADD,
        class: 'number'
    },
    {
        display: '+',
        action: BTN_ACTIONS.ADD,
        class: 'btn__op'
    },
    {
        display: '☀️',
        action: BTN_ACTIONS.THEME,
        class: 'number'
    },
    {
        display: '0',
        action: BTN_ACTIONS.ADD,
        class: 'number'
    },
    {
        display: '=',
        action: BTN_ACTIONS.CALC,
        class: 'btn__op'
    },
   
]