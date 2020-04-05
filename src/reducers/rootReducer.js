import { APP_INTRODUCTION } from '../assets/introductionInfo';

const initState = {
  currentDisplayMode: 'edit',
  showResultView: false,
  markdownList: APP_INTRODUCTION,
};

const rootReducer = (state = initState, action) => {
  let newMarkdownList = [];

  switch (action.type) {
    case 'CHANGE_DISPLAY_MODE':
      return { ...state, currentDisplayMode: action.payload };

    case 'TOGGLE_RESULT_VIEW':
      return { ...state, showResultView: !state.showResultView };

    //Actions for Manipulate Markdown List
    case 'RESET_LIST':
      return { ...state, markdownList: [] };
    case 'ADD_ELEMENT':
      return {
        ...state,
        markdownList: [...state.markdownList, action.payload],
      };
    case 'CHANGE_ELEMENT_CONTENT':
      newMarkdownList = state.markdownList.map((item) => {
        if (item.sid === action.payload.sid) item.data = action.payload.data;
        return item;
      });
      return {
        ...state,
        markdownList: newMarkdownList,
      };

    case 'DELETE_ELEMENT':
      newMarkdownList = state.markdownList.filter(
        (item) => item.sid !== action.payload.sid
      );
      return {
        ...state,
        markdownList: newMarkdownList,
      };

    case 'UPDATE_NEW_LIST':
      newMarkdownList = action.payload.modifiedList;
      return {
        ...state,
        markdownList: newMarkdownList,
      };

    default:
      return state;
  }
};

export default rootReducer;
