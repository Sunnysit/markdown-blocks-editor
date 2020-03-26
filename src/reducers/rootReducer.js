const initState = {
  markdownList: [
    { type: 'h1', sid: 'zasAtvkC8', value: 'Heading 1' },
    {
      type: 'p',
      sid: '1VW0rHTVR',
      value: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
    }
  ]
};

const rootReducer = (state = initState, action) => {
  let newMarkdownList = [];

  switch (action.type) {
    case 'RESET_LIST':
      return { ...state, markdownList: [] };
    case 'ADD_ELEMENT':
      return {
        ...state,
        markdownList: [...state.markdownList, action.payload]
      };
    case 'CHANGE_ELEMENT_CONTENT':
      newMarkdownList = state.markdownList.map((item) => {
        if (item.sid === action.payload.sid) item.value = action.payload.value;
        return item;
      });
      return {
        ...state,
        markdownList: newMarkdownList
      };
    case 'CHANGE_LINK_NAME':
      newMarkdownList = state.markdownList.map((item) => {
        if (item.sid === action.payload.sid)
          item.linkName = action.payload.linkName;
        return item;
      });
      return {
        ...state,
        markdownList: newMarkdownList
      };

    case 'DELETE_ELEMENT':
      newMarkdownList = state.markdownList.filter(
        (item) => item.sid !== action.payload.sid
      );
      return {
        ...state,
        markdownList: newMarkdownList
      };

    case 'UPDATE_NEW_LIST':
      newMarkdownList = action.payload.modifiedList;
      return {
        ...state,
        markdownList: newMarkdownList
      };

    default:
      return state;
  }
};

export default rootReducer;
